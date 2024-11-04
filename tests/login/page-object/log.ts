import { Locator, Page } from '@playwright/test';
        //grand dossier
export class Login {
    readonly page: Page;
    readonly nameField: Locator;
    readonly phoneOrEmailField: Locator;
    readonly continuerButton: Locator;
    readonly passwordField: Locator;
    readonly SidentifierButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#ap_customer_name'); 
        this.phoneOrEmailField = page.locator('#ap_email'); 
        this.passwordField = page.locator('#ap_password'); 
        this.continuerButton = page.locator('#continue'); 
        this.SidentifierButton = page.locator('#continue');
    }
    async connexion() {
        await this.phoneOrEmailField.fill('kevindlaflamme@gmail.com');
        await this.page.getByLabel('Continuer').click();
        await this.passwordField.fill('1234567890');
    
        // clic sur le bouton de connexion
        await this.page.getByLabel('S\'identifier').click();
        await this.page.goto("https://www.amazon.fr/", { waitUntil: 'networkidle', timeout: 60000 });

   }
}