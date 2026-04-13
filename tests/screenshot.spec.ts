import {test,expect} from '@playwright/test';

test('Capture Screenshots and Visual Comparision', async ({ page }) => {
 
 
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await expect(page.locator('#displayed-text')).toBeVisible();
        //To take a screenshot for loactor or partially
        //If u want to take screenshots at locator level we go for this.But screenshot will generate at root folder level
        await page.locator('#displayed-text').screenshot({ path: 'partialscreenshot.png' });
        await page.locator('#hide-textbox').click();
        //To take screenshot completely. that means entire screenshot of page.But screenshot will generate at root folder level
        await page.screenshot({ path: 'pagescreenshot.png' });
        await expect(page.locator('#displayed-text')).toBeHidden();
 
    });