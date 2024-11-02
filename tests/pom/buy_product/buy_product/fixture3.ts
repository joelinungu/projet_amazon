import { test as base } from '@playwright/test';
import { AmazonPurchasePage } from '../buy_product/buyProd'; 
import { defineConfig } from '@playwright/test';
const test = base.extend({
    Pagetest: async ({page}, use)=> {
        await use(new AmazonPurchasePage(page));
    },
})
const expect = base.expect;
export { test, expect};

export default defineConfig({
  timeout: 60000, // Par exemple, on définit 60 secondes pour tous les tests
});
