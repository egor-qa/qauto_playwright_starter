import { test, expect } from '@playwright/test';

test('Guest log in -> Add car -> Audi TT 12000', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Guest log in' }).click();
  await expect(page).toHaveURL(/.*garage/);

  await page.getByRole('button', { name: 'Add car' }).click();
  await page.getByLabel('Brand').selectOption('Audi');
  await page.getByLabel('Model').selectOption('TT');
  await page.getByLabel('Mileage').fill('12000');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  const carItem = page.locator('.car-item', { hasText: 'Audi TT' });
  await expect(carItem).toBeVisible();
});