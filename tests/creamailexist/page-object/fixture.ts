import { test as base } from '@playwright/test';
import { Registration } from './creation_mail_exist';

const test = base.extend<{
    creation_mail_exist: Registration;
}>

({
    creation_mail_exist: async ({ page }, use) => {
        const registrationPage = new Registration(page);
        await use(registrationPage);
    }
});

const expect = base.expect;
export { test, expect };