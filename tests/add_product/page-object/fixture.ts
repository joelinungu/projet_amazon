import { test as base } from '@playwright/test';
import { AddProd } from './addtobasket';

const test = base.extend({
    Pagetest: async ({page}, use)=> {
        await use(new AddProd(page));
    },
})
const expect = base.expect;
export { test, expect};
