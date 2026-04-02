
import{test} from '@playwright/test'
//const{test} = require('@playwright/test');

test('Launch Browser', async({browser})=>{

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://www.google.com');
   await page.locator('#APjFqb').pressSequentially('Allu Arjun');
   console.log(await page.title());
   //await page.pause(); pauses the execution upto above step, it doesn't other steps
   await page.locator('//div[@class="u4Uk3c"]').click();
});

