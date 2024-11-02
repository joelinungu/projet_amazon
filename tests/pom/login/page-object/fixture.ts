import { test as base } from '@playwright/test';
        //grand dossier         //ici le fichier .ts
import { Login } from './log'; 

const test = base.extend<{
//fichier.ts   :   //grand dossier
    Log: Login;
}>
({//fichier .ts
    Log : async ({ page }, use) => {
 // grand dossier en minuscule      //grand dossier
        const login = new Login(page);
            // grand dossier en minuscule
        await use(login);
    }
});

const expect = base.expect;
export { test, expect };
