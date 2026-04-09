
import { test, expect } from '@playwright/test'


test.describe('To Test Orange HRM Application', () => {

    test('Login to the Orange HRM Application', async ({ browser }) => {

        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator("[name='username']").fill('admin');
        await page.locator("[name='password']").fill('admin123');
        await page.locator('.oxd-button').click();
        await expect(page).toHaveTitle('OrangeHRM');

    });

    test('Locators using has and hasNot', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // for username
        await page.locator('.oxd-form-row',{has:page.locator('input[name="username"]')}).click();
        await page.locator('.oxd-form-row',{has:page.locator('input[name="username"]')}).pressSequentially('Admin');
        // for password:
        await page.locator('.oxd-form-row',{hasNot:page.locator('input[name="username"]')}).click();
        await page.locator('.oxd-form-row',{hasNot:page.locator('input[name="username"]')}).pressSequentially('admin123');
        
        // await page.pause();
        
    })

});