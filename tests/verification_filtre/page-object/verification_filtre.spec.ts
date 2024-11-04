import { test } from '../page-object/fixture'; // Modifier le chemin vers votre fichier étendu

test('verification filtre', async ({ verif_filtre }) => {
    await verif_filtre.page.goto('https://www.amazon.fr/');

    // Accepter les cookies
    await verif_filtre.acceptCookies();

    // Rechercher un produit
    await verif_filtre.searchInput.click(); // Utilisez la méthode définie dans Verif
    await verif_filtre.page.getByPlaceholder('Rechercher Amazon.fr').click();
    await verif_filtre.page.getByPlaceholder('Rechercher Amazon.fr').fill('ordinateur portable');
    await verif_filtre.page.getByPlaceholder('Rechercher Amazon.fr').press('Enter');
    await verif_filtre.page.getByRole('button', { name: 'Go', exact: true }).click();
    await verif_filtre.page.getByRole('link', { name: 'AMD Ryzen 9' }).click();
    await verif_filtre.page.getByRole('link', { name: 'à 16″ (38 à 42 cm)' }).click();
    await verif_filtre.page.getByRole('link', { name: '32 Go', exact: true }).click();
    await verif_filtre.page.getByLabel('Technologie de connectivité').getByRole('link', { name: 'HDMI' }).click();
});