import { expect, test } from '@playwright/test';

test('la home en inglés carga con lang="en"', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('la home en español carga con lang="es"', async ({ page }) => {
  await page.goto('/es/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});
