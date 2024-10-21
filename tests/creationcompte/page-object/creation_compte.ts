import { Locator, Page, expect } from '@playwright/test';
         //grand dossier
export class CreationCompte {
    readonly page: Page;
    readonly nameField: Locator;
    readonly phoneOrEmailField: Locator;
    readonly passwordField: Locator;
    readonly passwordCheckField: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#ap_customer_name'); 
        this.phoneOrEmailField = page.locator('#ap_email'); 
        this.passwordField = page.locator('#ap_password'); 
        this.passwordCheckField = page.locator('#ap_password_check'); 
        this.createAccountButton = page.locator('#continue'); 
    }

    async fillRegistrationForm() {
        await this.nameField.fill('marc');
            
        await this.phoneOrEmailField.fill('kevindlaflamme@gmail.com');
        await this.passwordField.fill('1234567890');
        await this.passwordCheckField.fill('1234567890');

        // Vérification des valeurs saisies
        await expect(this.nameField).toHaveValue('marc');
        await expect(this.phoneOrEmailField).toHaveValue('kevindlaflamme@gmail.com');
        await expect(this.passwordField).toHaveValue('1234567890');
        await expect(this.passwordCheckField).toHaveValue('1234567890');

        // Clic sur le bouton pour soumettre le formulaire
        await this.createAccountButton.click();
    }

}