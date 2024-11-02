import { test as base } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { AddProduct } from './addtobasket';
import { Buy_Product } from './buyprod'; 
import { CreationCompte } from './creation_compte'; 
import { Login } from './log'; 
import { Logout } from './out'; 
import { Quantity_Basket } from './verifquant';
import { SuppressionProduit } from './suppanier'; 
import { Verification_Filtre } from './verif_filtre';

const test = base.extend<{
    addtobasket: AddProduct;
    BuyProd: Buy_Product;
    Creation_Compte: CreationCompte;
    Log: Login;
    out: Logout;
    Verifquant: Quantity_Basket;
    SupPanier: SuppressionProduit;
    Verif_Filtre: Verification_Filtre;
}>(
    {
        addtobasket : async ({ page }, use) => {
            const addproduct = new AddProduct(page);
            await use(addproduct);
        },
        BuyProd : async ({ page }, use) => {
            const buy_product = new Buy_Product(page);
            await use(buy_product);
        },
        Creation_Compte : async ({ page }, use) => {
            const creationcompte = new CreationCompte(page);
            await use(creationcompte);
        },
        Log : async ({ page }, use) => {
            const login = new Login(page);
            await use(login);
        },
        out : async ({ page }, use) => {
            const logout = new Logout(page);
            await use(logout);
        },
        Verifquant : async ({ page }, use) => {
            const quantity_basket = new Quantity_Basket(page);
            await use(quantity_basket);
        },
        SupPanier : async ({ page }, use) => {
            const suppressionproduit = new SuppressionProduit(page);
            await use(suppressionproduit);
        },
        Verif_Filtre : async ({ page }, use) => {
            const verification_filtre = new Verification_Filtre(page);
            await use(verification_filtre);
        }
    }
);
export default defineConfig({
  timeout: 60000, // Par exemple, on définit 60 secondes pour tous les tests
});