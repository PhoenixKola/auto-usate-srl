import { expect, test } from "@playwright/test";

test("homepage renders signature sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Usato");
  await expect(page.locator("#auto")).toBeVisible();
  await expect(page.locator("#permuta")).toBeVisible();
  await expect(page.locator("#contatti")).toBeVisible();
  await expect(page.getByText("Realizzato con")).toBeVisible();
});

test("finder prefills contact message", async ({ page }) => {
  await page.goto("/");
  await page.locator("#auto").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "SUV / Crossover" }).click();
  await page.getByRole("button", { name: "20–30k" }).click();
  await page.getByRole("button", { name: "Ibrida" }).click();
  await page.locator("#auto").getByRole("button", { name: "Chiedi disponibilità" }).click();
  await expect(page.locator("#contatti textarea")).toContainText("");
  await expect(page.locator("#contatti textarea")).toHaveValue(/SUV \/ Crossover.*20–30k.*Ibrida/);
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
