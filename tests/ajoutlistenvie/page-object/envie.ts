import { Locator, Page } from '@playwright/test';
         //grand dossier
export class AjoutListEnvie {
    readonly page: Page;
    readonly nameField: Locator;
    readonly phoneOrEmailField: Locator;
    readonly continuerButton: Locator;
    readonly passwordField: Locator;
    readonly SidentifierButton: Locator;
    readonly deconnexionButton: Locator;
    readonly search: Locator;
    readonly GoButton: Locator;
    readonly ajouterListeEnvie: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#ap_customer_name'); 
        this.phoneOrEmailField = page.locator('#ap_email'); 
        this.passwordField = page.locator('#ap_password'); 
        this.continuerButton = page.locator('#continue'); 
        this.SidentifierButton = page.locator('#continue');
        this.deconnexionButton = page.locator('#nav-item-signout');
        this.search = page.locator('#twotabsearchtextbox');
        this.GoButton = page.locator('#nav-search-submit-button');
        this.ajouterListeEnvie = page.locator('#add-to-wishlist-button-submit');
        
    }   
    async connexion() {
        await this.phoneOrEmailField.fill('kevindlaflamme@gmail.com');
        await this.page.getByLabel('continuer').click();
        await this.passwordField.fill('1234567890')
        await this.page.getByLabel('S\'identifier').click();
    }
    async ajoutListeEnvie() {
        await this.search.fill('iphone 16');
        await this.GoButton.click();
        await this.page.locator('.rush-component > .a-link-normal').first().click();
        await this.page.getByLabel('Ajouter à votre liste').click();
        
    }

}