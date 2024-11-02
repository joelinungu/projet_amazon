import { test } from '../page-object/fixture';

test.beforeEach(async ({ page, Out }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByLabel('Accepter').click();
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
  await Out.connexion();
});                 
test('deconnexion', async ({ Out }) => {
  await Out.deconnexion();
});
