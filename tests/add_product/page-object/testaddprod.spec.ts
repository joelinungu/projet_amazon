import { test, expect } from '../page-object/fixture1'; // Modifier le chemin vers votre fichier étendu

test('Ajouter un produit au panier ', async ({ Pagetest }) => {
  // Utilisation de la classe Verif (Pagetest) pour effectuer les actions sur la page
  await Pagetest.navigateToAmazon();

  // Accepter les cookies
  await Pagetest.acceptCookies();

  // Rechercher un produit
  await Pagetest.searchForProduct('casqu');

  // Sélectionner le produit
  await Pagetest.selectProduct();

  // Ajouter le produit au panier
  await Pagetest.addProductToCart();

  // Aller au panier
  await Pagetest.goToCart();
});