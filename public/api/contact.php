<?php
declare(strict_types=1);

/*
 * Auto Usate SRL — contact endpoint
 * ------------------------------------------------------------
 * CHANGE THESE TWO VALUES before going live if the real mailbox/domain differs.
 */
const CONTACT_RECIPIENT = 'rivensmurf040@gmail.com';
const MAIL_FROM = 'website@test.com';
const RATE_LIMIT_SECONDS = 45;

header_remove('X-Powered-By');
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, string $message): never {
    http_response_code($status);
    echo json_encode(['message' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, 'Metodo non consentito.');
}

if (str_ends_with(CONTACT_RECIPIENT, '.invalid') || str_ends_with(MAIL_FROM, '.invalid')
    || !filter_var(CONTACT_RECIPIENT, FILTER_VALIDATE_EMAIL)
    || !filter_var(MAIL_FROM, FILTER_VALIDATE_EMAIL)) {
    respond(503, 'Il modulo contatti deve ancora essere configurato con gli indirizzi email reali.');
}

// Same-origin guard: if the browser sends Origin, it must match the current host.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '' && $host !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $currentHost = explode(':', $host)[0];
    if (!is_string($originHost) || strcasecmp($originHost, $currentHost) !== 0) {
        respond(403, 'Origine della richiesta non valida.');
    }
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') === false) {
    respond(415, 'Formato della richiesta non supportato.');
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 25000) {
    respond(400, 'Richiesta non valida.');
}

$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(400, 'Dati non validi.');
}

// Honeypot: bots often fill fields hidden from real users.
if (trim((string)($data['website'] ?? '')) !== '') {
    respond(200, 'Messaggio inviato.');
}

$startedAt = (int)($data['startedAt'] ?? 0);
$elapsedMs = (int)round(microtime(true) * 1000) - $startedAt;
if ($startedAt <= 0 || $elapsedMs < 1800) {
    respond(429, 'Invio troppo rapido. Riprova tra qualche secondo.');
}

$ip = (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateKey = hash('sha256', $ip . '|auto-usate-contact');
$rateFile = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'aus_' . $rateKey;
$now = time();
if (is_file($rateFile)) {
    $last = (int)@file_get_contents($rateFile);
    if ($last > 0 && ($now - $last) < RATE_LIMIT_SECONDS) {
        respond(429, 'Hai appena inviato una richiesta. Attendi qualche secondo e riprova.');
    }
}
@file_put_contents($rateFile, (string)$now, LOCK_EX);

$clean = static function (mixed $value, int $max): string {
    $value = trim((string)$value);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return function_exists('mb_substr') ? mb_substr($value, 0, $max) : substr($value, 0, $max);
};

$name = $clean($data['name'] ?? '', 120);
$email = $clean($data['email'] ?? '', 180);
$phone = $clean($data['phone'] ?? '', 40);
$message = $clean($data['message'] ?? '', 5000);
$consent = ($data['consent'] ?? false) === true;

if ($name === '' || $email === '' || $message === '' || !$consent) {
    respond(422, 'Compila i campi obbligatori e conferma di aver letto l\'informativa privacy.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $email)) {
    respond(422, 'Inserisci un indirizzo email valido.');
}
if (preg_match('/[\r\n]/', $name)) {
    respond(422, 'Nome non valido.');
}

$subject = 'Nuova richiesta dal sito Auto Usate SRL';
$body = "Nuova richiesta dal sito\n\n"
      . "Nome: {$name}\n"
      . "Email: {$email}\n"
      . "Telefono: " . ($phone !== '' ? $phone : 'non indicato') . "\n\n"
      . "Messaggio:\n{$message}\n\n"
      . "Informativa privacy confermata: sì\n"
      . "Data server: " . date('c') . "\n";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Auto Usate SRL website <' . MAIL_FROM . '>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . PHP_VERSION,
];

$encodedSubject = function_exists('mb_encode_mimeheader')
    ? mb_encode_mimeheader($subject, 'UTF-8')
    : $subject;

// The -f envelope sender improves deliverability on many shared-hosting setups.
$sent = @mail(CONTACT_RECIPIENT, $encodedSubject, $body, implode("\r\n", $headers), '-f' . MAIL_FROM);
if (!$sent) {
    respond(500, 'Il messaggio non è stato inviato. Riprova più tardi o contattaci direttamente.');
}

respond(200, 'Messaggio inviato. Ti ricontatteremo appena possibile.');
