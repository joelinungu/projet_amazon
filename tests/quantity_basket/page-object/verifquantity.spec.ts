import { test, expect } from '../quantity_basket/fixture2'; // Modifier le chemin vers votre fichier étendu

test('Ajouter un produit au panier et modifier la quantité', async ({ Pagetest }) => {
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

  // Modifier la quantité à 2
  await Pagetest.updateQuantityTo(2);

  // Vérifier que le sous-total est affiché
  await Pagetest.verifySubtotalDisplayed();
});
