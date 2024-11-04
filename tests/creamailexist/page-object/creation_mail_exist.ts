import { Locator, Page, expect } from '@playwright/test';

export class Registration {
    readonly page: Page;
    readonly nameField: Locator;
    readonly phoneOrEmailField: Locator;
    readonly passwordField: Locator;
    readonly passwordCheckField: Locator;
    readonly createAccountButton: Locator;
    readonly acceptCookiesButton: Locator;
    readonly accountExistsMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#ap_customer_name');
        this.phoneOrEmailField = page.locator('#ap_email');
        this.passwordField = page.locator('#ap_password');
        this.passwordCheckField = page.locator('#ap_password_check');
        this.createAccountButton = page.locator('#continue');
        this.acceptCookiesButton = page.getByLabel('Accepter'); // Ajuster si nécessaire
        // Ajuste le sélecteur si le message est différent
        this.accountExistsMessage = page.locator('text="Il existe déjà un compte"'); 
    }

    async fillRegistration() {
        await this.nameField.fill('Jean Brad');
        await this.phoneOrEmailField.fill('bibangjoseph2020@icloud.com');
        await this.passwordField.fill('123456');
        await this.passwordCheckField.fill('123456');

        // Vérification des valeurs saisies
        await expect(this.nameField).toHaveValue('Jean Brad');
        await expect(this.phoneOrEmailField).toHaveValue('bibangjoseph2020@icloud.com');
        await expect(this.passwordField).toHaveValue('123456');
        await expect(this.passwordCheckField).toHaveValue('123456');
        
        // Clic sur le bouton pour soumettre le formulaire
        await this.createAccountButton.click();

        // Ajoute une attente pour le message
        await expect(this.accountExistsMessage).toBeVisible({ timeout: 60000 });
    }
}
