import { test } from '../page-object/fixture';

test('test', async ({ page }) => {
    await page.goto('https://www.amazon.fr/');
    
    // Accepter les cookies
    await page.getByLabel('Accepter').click();
    
    // Rechercher un produit
    await page.getByPlaceholder('Rechercher Amazon.fr').click();
    await page.getByPlaceholder('Rechercher Amazon.fr').fill('habit homme');
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    await page.getByRole('link', { name: 'Sweat à Capuche en Polaire' }).click();
    await page.getByRole('button', { name: 'Ajouter au panier' }).click();
    await page.locator('#sw-gtc').getByRole('link', { name: 'Aller au panier' }).click();
    await page.getByLabel('Supprimer Amazon Essentials').click();
  });
