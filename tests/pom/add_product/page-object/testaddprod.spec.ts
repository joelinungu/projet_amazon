import { test } from '../page-object/fixture';

test('Ajouter un produit au panier ', async ({ Pagetest }) => {
  await Pagetest.navigateToAmazon();
  await Pagetest.acceptCookies();
  await Pagetest.searchForProduct('casqu');
  await Pagetest.selectProduct(); 
  await Pagetest.addProductToCart();
  // Aller au panier
  await Pagetest.goToCart();
});