import { Locator, Page } from '@playwright/test';

export class SuppressionPanier {
    readonly page: Page;
    readonly panierButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.panierButton = page.getByLabel('article dans le panier'); 
    }

    async allerAuPanier() {
        await this.panierButton.click();
    }

    async supprimerArticle(nomArticle: string) {
        // Utilise un sélecteur dynamique pour trouver le bouton de suppression correspondant à l'article
        const articleSupprimerButton = this.page.locator(`text=${nomArticle}`).locator('..').locator('button[aria-label^="Supprimer"]');
        await articleSupprimerButton.click();
    }
}
