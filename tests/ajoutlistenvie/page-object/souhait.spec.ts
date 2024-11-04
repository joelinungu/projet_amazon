import { test } from '../page-object/fixture';

test.beforeEach(async ({ page, Envie }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByLabel('Accepter').click();
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
  await Envie.connexion();
});                 
test('Ajouter à votre liste', async ({ Envie }) => {
  await Envie.ajoutListeEnvie();
});
