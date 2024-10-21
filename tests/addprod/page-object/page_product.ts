import { test } from './fixture'
let query: string = "casque bluetooth sans fil";
 
 test('gotoAmazone', async({AddProd}) => {
  await AddProd.navigateToAmazon()
 })
 test('search product', async({AddProd}) => {
    await AddProd.searchForProduct(query)
 })
 test('add product to basket', async({AddProd}) => {
    await AddProd.addProductToCart()
 })
 test('verify', async({AddProd}) => {
    await AddProd.verifyProductAddedToCart()
 })
