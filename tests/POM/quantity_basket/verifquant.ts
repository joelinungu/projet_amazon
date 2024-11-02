import { Page, Locator, expect } from "@playwright/test";

export class Verif {
  readonly page: Page;
  readonly acceptCookiesButton: Locator;
  readonly searchInput: Locator;
  readonly searchSuggestion: Locator;
  readonly productLink: Locator;
  readonly addToCartButton: Locator;
  readonly goToCartLink: Locator;
  readonly quantitySelector: Locator;
  readonly quantityOption: Locator;
  readonly subtotalLabel: Locator;
  readonly subtotalAmount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.getByLabel('Accepter');
    this.searchInput = page.getByPlaceholder('Rechercher Amazon.fr');
    this.searchSuggestion = page.getByLabel('casque bluetooth sans fil');
    this.productLink = page.getByRole('link', { name: 'JBL Tune 720BT, casque audio' });
    this.addToCartButton = page.getByRole('button', { name: 'Ajouter au panier' });
    this.goToCartLink = page.locator('#sw-gtc').getByRole('link', { name: 'Aller au panier' });
    this.quantitySelector = page.getByText('Qté :1');
    this.quantityOption = page.getByLabel('2', { exact: true }).getByText('2');
    this.subtotalLabel = page.locator('#sc-subtotal-label-activecart');
    this.subtotalAmount = page.locator('#sc-subtotal-amount-activecart').getByText('€');
  }

  async navigateToAmazon() {
    await this.page.goto('https://www.amazon.fr/');
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }

  async searchForProduct(query: string) {
    await this.searchInput.click();
    await this.searchInput.fill(query);
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

  async updateQuantityTo(quantity: number) {
    await this.quantitySelector.click();
    await this.quantityOption.click();
  }

  async verifySubtotalDisplayed() {
    await this.subtotalLabel.click();
    await this.subtotalAmount.click();
  }
}
