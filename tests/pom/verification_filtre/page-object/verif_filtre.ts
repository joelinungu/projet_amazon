import { Locator, Page } from '@playwright/test';

export class Verif {
    readonly page: Page;
    readonly acceptButton: Locator;
    readonly sectionDropdown: Locator;
    readonly searchInput: Locator;
    readonly goButton: Locator;
    readonly categoriesHeading: Locator;
    readonly desktopComputersLink: Locator;
    readonly priceFilterLink: Locator;
    readonly hdmiFilterLink: Locator;
    readonly flashMemoryFilterLink: Locator;
    readonly frequencyFilterLink: Locator;
    readonly ssdFilterLink: Locator;
    readonly lanFilterLink: Locator;
    readonly businessLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.acceptButton = page.getByLabel('Accepter');
        this.sectionDropdown = page.getByLabel('Sélectionnez la section dans');
        this.searchInput = page.getByPlaceholder('Rechercher Amazon.fr');
        this.goButton = page.getByRole('button', { name: 'Go', exact: true });
        this.categoriesHeading = page.getByRole('heading', { name: 'Catégories à l\'honneur' });
        this.desktopComputersLink = page.getByTitle('Ordinateurs de bureau');
        this.priceFilterLink = page.getByRole('link', { name: 'à 300 EUR' });
        this.hdmiFilterLink = page.getByLabel('Interface de sortie vidéo').getByRole('link', { name: 'HDMI' });
        this.flashMemoryFilterLink = page.getByLabel('Mémoire flash').getByRole('link', { name: 'à 999 Go' });
        this.frequencyFilterLink = page.getByRole('link', { name: 'Fréquence radio de 5 GHz' });
        this.ssdFilterLink = page.getByRole('link', { name: 'SSD', exact: true });
        this.lanFilterLink = page.getByRole('link', { name: 'LAN', exact: true });
        this.businessLink = page.getByRole('link', { name: 'Entreprise' });
    }

    async acceptCookies() {
        await this.acceptButton.click();
    }

    async selectSection(option: string) {
        await this.sectionDropdown.selectOption(option);
    }

    async searchItem(item: string) {
        await this.searchInput.fill(item);
    }

    async clickGoButton() {
        await this.goButton.click();
    }

    async navigateToCategory() {
        await this.categoriesHeading.click();
        await this.desktopComputersLink.click();
    }

    async applyFilters() {
        await this.priceFilterLink.click();
        await this.hdmiFilterLink.click();
        await this.flashMemoryFilterLink.click();
        await this.frequencyFilterLink.click();
        await this.ssdFilterLink.click();
        await this.lanFilterLink.click();
        await this.businessLink.click();
    }

    async selectSearchSuggestion() {
        await this.searchInput.press('ArrowDown');
        await this.searchInput.press('Enter');
    }

    async clickOnProductLink() {
        await this.page.waitForSelector('role=link[name="à 16″ (38 à 42 cm)"]');
        await this.page.getByRole('link', { name: 'à 16″ (38 à 42 cm)', exact: true }).click();
    }
    
}
