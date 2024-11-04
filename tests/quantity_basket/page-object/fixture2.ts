import { test as base } from '@playwright/test';
import { Verif } from './verifquant';

const test = base.extend({
    Pagetest: async ({page}, use)=> {
        await use(new Verif(page));
    },
})
const expect = base.expect;
export { test, expect};
