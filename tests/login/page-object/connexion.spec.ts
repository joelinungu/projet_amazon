import { test } from '../page-object/fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByLabel('Accepter').click();
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
  
});                     //fichier .ts
test('connexion', async ({ Log }) => {
           //fichier .ts
  await Log.connexion();
});