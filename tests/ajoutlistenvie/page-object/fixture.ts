import { test as base } from '@playwright/test';
  //grand dossier      //ici le fichier .ts sans majuscule
import { AjoutListEnvie } from './envie'; 

const test = base.extend<{
//fichier.ts   :   //grand dossier
    Envie: AjoutListEnvie;
}>
({//fichier .ts
    Envie : async ({ page }, use) => {
 // grand dossier en minuscule      //grand dossier
        const ajoutlistenvie = new AjoutListEnvie(page);
            // grand dossier en minuscule
        await use(ajoutlistenvie);
    }
});

const expect = base.expect;
export { test, expect };
