import { test as base } from '@playwright/test';
        //grand dossier         //ici le fichier .ts
import { SuppressionPanier } from './suppanier'; 

const test = base.extend<{
//fichier.ts   :   //grand dossier
    suppanier: SuppressionPanier;
}>
({//fichier .ts
    suppanier : async ({ page }, use) => {
 // grand dossier en minuscule      //grand dossier
        const suppressionpanier = new SuppressionPanier(page);
            // grand dossier en minuscule
        await use(suppressionpanier);
    }
});

const expect = base.expect;
export { test, expect };