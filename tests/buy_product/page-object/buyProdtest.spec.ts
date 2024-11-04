import { test, expect } from '../page-object/fixture3'; // Importez votre fichier fixture.ts

test('Recherche et achat de produit ', async ({ Pagetest }) => {
  // Naviguer vers Amazon
  await Pagetest.navigateToAmazon();

  // Accepter les cookies
  await Pagetest.acceptCookies();

  // Rechercher un produit
  await Pagetest.searchForProduct('cas');

  // Sélectionner le produit et cliquer sur "Acheter"
  await Pagetest.selectProductAndBuy();

  // Se connecter avec l'adresse e-mail et le mot de passe
  await Pagetest.signIn('kevindlaflamme@gmail.com', '1234567890');

  // Compléter l'achat en vérifiant la présence du champ 'Numéro de téléphone'
  await Pagetest.completePurchase();
});
