

import{test} from '@playwright/test'

test.describe('Mosuse Hover', ()=>{

    test('MouseHover in Automation Practice', async({browser})=>{

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('.dropbtn').hover();
        //await page.locator("div[class ='dropdown-content'] >> text = Laptops").click(); - success 
        await page.locator(".dropdown-content >> text = Laptops").click(); // -- success

    });
    


});