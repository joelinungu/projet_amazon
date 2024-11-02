import { Page, Locator, expect } from "@playwright/test";

export class AddProd {
  readonly page: Page;
  readonly acceptCookiesButton: Locator;
  readonly search: Locator;
  readonly searchSuggestion: Locator;
  readonly productLink: Locator;
  readonly addToCartButton: Locator;
  readonly goToCartLink: Locator;
  readonly addtobasket: Locator;
  readonly cartConfirmation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByLabel('Accepter');
    this.search = page.getByPlaceholder('Rechercher Amazon.fr');
    this.searchSuggestion = page.getByLabel('casque bluetooth sans fil');
    this.productLink = page.getByRole('link', { name: 'JBL Tune 720BT, casque audio' });
    this.addToCartButton = page.getByRole('button', { name: 'Ajouter au panier' });
    this.goToCartLink = page.locator('#sw-gtc').getByRole('link', { name: 'Aller au panier' });
    this.addtobasket = page.locator('#add-to-cart-button');
    this.cartConfirmation = page.getByRole('heading', { name: 'Ajouté au panier' });
  }

  async navigateToAmazon() {
    await this.page.goto('https://www.amazon.fr/');
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }

  async searchForProduct(query: string) {
    await this.search.click();
    await this.search.fill(query);
    await this.searchSuggestion.click();
  }

  async selectProduct() {
    await this.productLink.click();
  }

  async addProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.goToCartLink.click();
  }

  async verifyProductAddedToCart() {
    await expect(this.cartConfirmation).toBeVisible();
  }
}
