import { test as base } from '@playwright/test';
import { AmazonPurchasePage } from './buyProd'; // Assurez-vous que le chemin est correct
import { defineConfig } from '@playwright/test';
const test = base.extend({
    Pagetest: async ({page}, use)=> {
        await use(new AmazonPurchasePage(page));
    },
})
const expect = base.expect;
export { test, expect};

// playwright.config.ts


export default defineConfig({
  timeout: 60000, // Par exemple, on définit 60 secondes pour tous les tests
});
