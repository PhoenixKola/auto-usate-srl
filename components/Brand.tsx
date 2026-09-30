// Canonical AU symbol. public/favicon.svg and public/brand/*.svg mirror these paths — keep them in sync.
export const BRAND_A_PATH = "M10 46 19.4 18h5.2L34 46h-6.2l-1.7-5.5h-8.2L16.2 46H10Zm9.9-11h4.2L22 28.7 19.9 35Z";
export const BRAND_U_PATH = "M37 18h5.6v19.5a2.9 2.9 0 0 0 5.8 0V18H54v19.5a8.5 8.5 0 0 1-17 0V18Z";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={`brand-mark ${className ?? ""}`} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect x=".5" y=".5" width="63" height="63" rx="14" className="brand-mark-tile" vectorEffect="non-scaling-stroke" />
      <path d={BRAND_A_PATH} fill="#f2eee6" fillRule="evenodd" />
      <path d={BRAND_U_PATH} fill="#ff5b32" />
    </svg>
  );
}

export function BrandLockup({ className }: { className?: string }) {
  return (
    <span className={`brand-lockup-inner ${className ?? ""}`}>
      <BrandMark />
      <span className="brand-wordmark"><strong>AUTO USATE</strong><small>GENOVA · SRL</small></span>
    </span>
  );
}
