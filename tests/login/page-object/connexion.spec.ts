import { expect, test } from '../page-object/fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByLabel('Accepter').click();
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
  
});                     //fichier .ts
test('connexion', async ({ Log, page }) => {
           //fichier .ts
  await Log.connexion();
  await expect(page).toHaveURL('https://www.amazon.fr/');
});