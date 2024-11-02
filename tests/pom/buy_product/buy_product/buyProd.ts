import { Page, Locator, expect } from "@playwright/test";

export class AmazonPurchasePage {
  readonly page: Page;
  readonly autoidButton: Locator;
  readonly searchInput: Locator;
  readonly searchSuggestion: Locator;
  readonly productLink: Locator;
  readonly buyNowButton: Locator;
  readonly emailField: Locator;
  readonly continueButton: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly phoneNumberField: Locator;
  readonly addressField: Locator;
  readonly postalCodeField: Locator;
  readonly cityField: Locator;
  readonly useAddressButton: Locator;
  readonly submitButton: Locator;
  readonly addCreditCardLink: Locator;
  readonly selectShipToAddressButton: Locator;
  readonly creditCardHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.autoidButton = page.getByLabel('Accepter');
    this.searchInput = page.getByPlaceholder('Rechercher Amazon.fr');
    this.searchSuggestion = page.getByLabel('casque bluetooth sans fil');
    this.productLink = page.getByRole('link', { name: 'JBL Tune 720BT, casque audio' });
    this.buyNowButton = page.getByLabel('Acheter cet article');
    this.emailField = page.getByLabel('Adresse e-mail ou numéro de t');
    this.continueButton = page.getByLabel('Continuer');
    this.passwordField = page.getByLabel('Mot de passe');
    this.signInButton = page.getByLabel('S\'identifier');
    this.phoneNumberField = page.getByLabel('Numéro de téléphone');
    this.addressField = page.getByPlaceholder('Adresse');
    this.postalCodeField = page.getByLabel('Code postal');
    this.cityField = page.getByLabel('Ville');
    this.useAddressButton = page.getByLabel('Utiliser cette adresse');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.addCreditCardLink = page.getByRole('link', { name: 'Ajouter une carte de crédit' });
    this.selectShipToAddressButton = page.getByTestId('Address_selectShipToThisAddress');
    this.creditCardHeading = page.getByRole('heading', { name: 'Vos cartes de crédit et de dé' });
  }

  async navigateToAmazon() {
    await this.page.goto('https://www.amazon.fr/');
  }

  async acceptCookies() {
    await this.autoidButton.click();
  }
  async searchForProduct(query: string) {
    await this.searchInput.click();
    await this.searchInput.fill(query);
    await this.searchSuggestion.click();
  }

  async selectProductAndBuy() {
    await this.productLink.click();
    await this.buyNowButton.click();
  }

  async signIn(email: string, password: string) {
    await this.emailField.fill(email);
    await this.continueButton.click();
    await this.passwordField.click();
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }

  async enterShippingDetails(phone: string, address: string, postalCode: string, city: string) {
    await this.phoneNumberField.fill(phone);
    await this.addressField.fill(address);
    await this.postalCodeField.fill(postalCode);
    await this.cityField.fill(city);
    await this.useAddressButton.click();
  }

  async completePurchase() {
    // Vérification de la présence du champ 'Numéro de téléphone'
    if (await this.phoneNumberField.isVisible()) {
      // Si présent, entrer les détails de livraison
      await this.enterShippingDetails('0620204885', 'de le bar', '59000', 'LILLE');
    } else {
      // Sinon, naviguer à l'adresse d'alternative
      await this.page.goto('https://www.amazon.fr/gp/buy/addressselect/handlers/display.html?_from=cheetah');
      await this.selectShipToAddressButton.click();
      await this.page.goto('https://www.amazon.fr/gp/buy/payselect/handlers/display.html?hasWorkingJavascript=1');
      await this.creditCardHeading.click();
    }
  }
}
