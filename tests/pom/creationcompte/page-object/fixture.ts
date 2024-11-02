import { test as base } from '@playwright/test';
        //grand dossier         //ici le fichier .ts
import { CreationCompte } from './creation_compte'; 

const test = base.extend<{
   //fichier .ts      //grand dossier
    Creation_Compte: CreationCompte;
}>
({//fichier .ts
    Creation_Compte : async ({ page }, use) => {
 // grand dossier en minuscule      //grand dossier
        const creationcompte = new CreationCompte(page);
         // grand dossier en minuscule
        await use(creationcompte);
    }
});

const expect = base.expect;
export { test, expect };
