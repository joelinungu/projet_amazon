import { test, expect } from './fixture';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.locator('#a-autoid-0').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').click();
  await page.getByPlaceholder('Rechercher Amazon.fr').fill('cas');
  await page.getByLabel('casque bluetooth sans fil').click();
  await page.getByRole('link', { name: 'JBL Tune 720BT, casque audio' }).click();
  await page.locator('#add-to-cart-button').click();
  await expect(page.getByRole('heading', { name: 'Ajouté au panier' })).toBeVisible();
});