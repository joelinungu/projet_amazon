import { Locator, Page } from '@playwright/test';

export class Verif {
    readonly page: Page;
    readonly acceptButton: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptButton = page.getByLabel('Accepter');
        this.searchInput = page.getByPlaceholder('Rechercher Amazon.fr');
    }

    async acceptCookies() {
        await this.acceptButton.click();
    }

    async searchItem(item: string) {
        await this.searchInput.fill(item);
    }
}
