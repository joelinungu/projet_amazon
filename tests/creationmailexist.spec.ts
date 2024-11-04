import { test } from './creamailexist/page-object/fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/');
  await page.getByLabel('Accepter').click({ timeout: 60000 });
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click({ timeout: 30000 });
  await page.getByRole('link', { name: 'Créer votre compte Amazon' }).click({ timeout: 30000 });
});

test('Formulaire de création de compte utilisateur', async ({ creation_mail_exist }) => {
  await creation_mail_exist.fillRegistration();
});




