import { test, expect } from '@playwright/test';

test('has title and navigation works', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Darlyng Mateo/);

  // Navegar a Work
  await page.click('text=WORK');
  await expect(page).toHaveURL('/work');
  await expect(page.locator('h1')).toContainText('Projects');
  
  // Navegar a Certificates
  await page.click('text=CERTIFICATES');
  await expect(page).toHaveURL('/certificates');
});
