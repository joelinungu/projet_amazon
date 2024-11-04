
import { test } from '../page-object/fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByLabel('Accepter').click();
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
  await page.getByRole('link', { name: 'Créer votre compte Amazon' }).click();
  
});                                           //fichier .ts
test('creation de compte', async ({ Creation_Compte }) => {
           //fichier .ts
  await Creation_Compte.fillRegistrationForm();
});
