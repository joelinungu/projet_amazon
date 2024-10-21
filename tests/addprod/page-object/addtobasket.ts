import { Page, Locator, expect } from "@playwright/test";

export class AddProd {
  readonly page: Page;
  readonly cookie: Locator;
  readonly search: Locator;
  readonly searchSuggestion: Locator;
  readonly productLink: Locator;
  readonly addtobasket: Locator;
  readonly cartConfirmation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookie = page.locator('#a-autoid-0');
    this.search = page.getByPlaceholder('Rechercher Amazon.fr');
    this.searchSuggestion = page.getByLabel('casque bluetooth sans fil');
    this.productLink = page.getByRole('link', { name: 'JBL Tune 720BT, casque audio' });
    this.addtobasket = page.locator('#add-to-cart-button');
    this.cartConfirmation = page.getByRole('heading', { name: 'Ajouté au panier' });
  }

  async navigateToAmazon() {
    await this.page.goto('https://www.amazon.fr/');
  }

  async searchForProduct(query: string) {
    await this.cookie.click();
    await this.search.click();
    await this.search.fill(query);
    await this.searchSuggestion.click();
  }

  async addProductToCart() {
    await this.productLink.click();
    await this.addtobasket.click();
  }

  async verifyProductAddedToCart() {
    await expect(this.cartConfirmation).toBeVisible();
  }
}
