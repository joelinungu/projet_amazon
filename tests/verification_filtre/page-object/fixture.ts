import { test as base } from '@playwright/test';
import { Verif } from './verif_filtre';

export const test = base.extend<{
//fichier.ts   :   //grand dossier
    verif_filtre: Verif;
}>
({//fichier .ts
    verif_filtre : async ({ page }, use) => {
 // grand dossier en minuscule      //grand dossier
        const verif = new Verif(page);
            // grand dossier en minuscule
        await use(verif);
    }
});


