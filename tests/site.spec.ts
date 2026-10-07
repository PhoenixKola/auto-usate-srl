import { expect, test } from "@playwright/test";

test("homepage renders signature sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Usato");
  await expect(page.locator("#auto")).toBeVisible();
  await expect(page.locator(".vehicle")).not.toHaveCount(0);
  await expect(page.locator("#contatti")).toBeVisible();
  await expect(page.getByText("Realizzato con")).toBeVisible();
});

test("vehicle enquiry keeps the selected car", async ({ page }) => {
  await page.goto("/");
  const first = page.locator(".vehicle").first();
  const name = (await first.locator("h3").innerText()).replace(/\s+/g, " ").trim();
  await first.getByRole("button", { name: /Chiedi informazioni/ }).click();
  await expect(page.locator(".contact-vehicle strong")).toHaveText(name);
  await expect(page.locator("#contatti textarea")).toHaveValue(new RegExp(name));
});

test("phone links only ever dial a real number", async ({ page }) => {
  await page.goto("/");
  for (const href of await page.locator('a[href^="tel:"]').evaluateAll(links => links.map(link => link.getAttribute("href")))) {
    expect(href).toMatch(/^tel:\+?\d{6,}$/);
  }
});

test("contact validates required fields", async ({ page }) => {
  await page.goto("/");
  await page.locator("#contatti").scrollIntoViewIfNeeded();
  await page.locator("#contatti button[type=submit]").click();
  await expect(page.getByRole("alert")).toContainText("campi obbligatori");
});

test("legal routes render", async ({ page }) => {
  for (const path of ["/privacy/", "/cookie-policy/", "/note-legali/", "/garanzia-legale/", "/disclaimer/"]) {
    await page.goto(path);
    await expect(page.locator("main")).toBeVisible();
  }
});

test("static 404 is branded", async ({ page }) => {
  await page.goto("/404.html");
  await expect(page.getByText("Questa strada")).toBeVisible();
});
