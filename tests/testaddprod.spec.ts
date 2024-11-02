import { test } from '../tests/fixturegenerale'; // Modifier le chemin vers votre fichier étendu

test('Ajouter un produit au panier ', async ({ Pagetest }) => {
  await Pagetest.navigateToAmazon();
  await Pagetest.acceptCookies();
  await Pagetest.searchForProduct('casqu');
  await Pagetest.selectProduct(); 
  await Pagetest.addProductToCart();
  // Aller au panier
  await Pagetest.goToCart();
});