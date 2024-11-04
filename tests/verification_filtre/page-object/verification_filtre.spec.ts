import { test } from '../page-object/fixture'; 

test('verification filtre', async ({ verif_filtre }) => {
    await verif_filtre.page.goto('https://www.amazon.fr/');

    // Accepter les cookies
    await verif_filtre.acceptCookies();

    // Rechercher un produit
    await verif_filtre.searchInput.click(); // Utilisez la méthode définie dans Verif
    await verif_filtre.searchItem('ordinateur portable'); // Utilisez la méthode définie dans Verif
    await verif_filtre.page.getByPlaceholder('Rechercher Amazon.fr').press('Enter'); // Utilisez page de verif_filtre
    await verif_filtre.page.getByRole('link', { name: 'AMD Ryzen 9' }).click(); // Utilisez page de verif_filtre
    await verif_filtre.page.getByRole('link', { name: '″ (43 cm) et plus' }).click(); // Utilisez page de verif_filtre
    await verif_filtre.page.getByRole('link', { name: '2 To' }).click(); // Utilisez page de verif_filtre
});
