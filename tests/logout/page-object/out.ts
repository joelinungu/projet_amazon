import { Locator, Page } from '@playwright/test';
         //grand dossier
export class Logout {
    readonly page: Page;
    readonly nameField: Locator;
    readonly phoneOrEmailField: Locator;
    readonly continuerButton: Locator;
    readonly passwordField: Locator;
    readonly SidentifierButton: Locator;
    readonly deconnexionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameField = page.locator('#ap_customer_name'); 
        this.phoneOrEmailField = page.locator('#ap_email'); 
        this.passwordField = page.locator('#ap_password'); 
        this.continuerButton = page.locator('#continue'); 
        this.SidentifierButton = page.locator('#continue');
        this.deconnexionButton = page.locator('#nav-item-signout');
    }
    async connexion() {
        await this.phoneOrEmailField.fill('kevindlaflamme@gmail.com');
        await this.page.getByLabel('continuer').click();
        await this.passwordField.fill('1234567890');

        // clic sur le bouton de connexion
        await this.page.getByLabel('S\'identifier').click();
   }
    async deconnexion() {
        //survolage du profil pour trouver le bouton de déconnexion 
        await this.page.getByRole('link', { name: 'Bonjour marc Compte et listes' }).hover();
        await this.page.getByText('Qui est-ce ? Sélectionnez un profil.Gérer les profils Vos listes d\'envies Votre').isVisible();
        // clic sur le bouton de déconnexion
        await this.page.getByRole('link', { name: 'Déconnexion' }).click();
        await this.page.goto('https://www.amazon.fr/');
    }
}