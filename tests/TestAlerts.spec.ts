
import { test, expect } from '@playwright/test'

test.describe('Handling Alerts', () => {
    test('handling simple Alert', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        // ✅ Validate alert message
        console.log(dialog.message());
        expect(dialog.message()).toBe('I am an alert box!');
        
        // Accept the alert
        await dialog.accept();
    });

    // ✅ Trigger alert AFTER listener is set
    await page.locator('#alertBtn').first().click();
    });

    test('handling Confirm Alert', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        page.on('dialog', async dailog => {
            console.log(dailog.message());
           await  dailog.accept();
           //await dailog.dismiss();
        });
        await page.locator('#confirmBtn').first().click();
        
    });
    test('handling Prompt Alert', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');
        page.on('dialog', async dailog => {
             console.log(dailog.message());
             const msg = await dailog.accept("I AM TESTER");
             console.log(msg);
        });

        await page.locator('#promptBtn').first().click();

    });

});