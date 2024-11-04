import { test as base } from '@playwright/test';
  //grand dossier      //ici le fichier .ts sans majuscule
import { Logout } from './out'; 

const test = base.extend<{
//fichier.ts   :   //grand dossier
    Out: Logout;
}>
({//fichier .ts
    Out : async ({ page }, use) => {
 // grand dossier en minuscule      //grand dossier
        const logout = new Logout(page);
            // grand dossier en minuscule
        await use(logout);
    }
});

const expect = base.expect;
export { test, expect };
