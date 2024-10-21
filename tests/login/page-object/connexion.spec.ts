import { test } from '../page-object/fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.fr/?&tag=hydraamazon05-21&ref=pd_sl_781ozcfkw9_e&adgrpid=154637622122&hvpone=&hvptwo=&hvadid=683560492499&hvpos=&hvnetw=g&hvrand=17831401740184783330&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9055774&hvtargid=kwd-10573980&hydadcr=&gad_source=1');
  await page.getByLabel('Accepter').click();
  await page.getByRole('link', { name: 'Bonjour, Identifiez-vous' }).click();
  
});                     //fichier .ts
test('connexion', async ({ Log }) => {
           //fichier .ts
  await Log.connexion();
});