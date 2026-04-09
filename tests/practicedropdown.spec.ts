import { expect, test } from '@playwright/test';

test.describe("Validating Dropdown", () => {
    test("Selecting Value from Dropdown", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.locator('[name="username"]').fill("Admin");
        await page.locator('[type="password"]').pressSequentially('admin123');
        await page.locator('[type="submit"]').click();
        await page.locator('[href*="/viewPimModule"]').click();
        await page.locator('.oxd-select-text--after').nth(0).click();
        await page.locator('div[role="option"] >> text=Part-Time Contract').click();


    })
    test("handle dropdown tagname is select", async ({ page }) => {
        await page.locator('https://testautomationpractice.blogspot.com/');
        await page.locator('#country', { hasText: "India" }).click();
        await page.locator('#country').selectOption('India')

        //Select the Radio button
        await page.locator('#male').check();
        await expect(page.locator('#male')).toBeChecked();

    })
    test('Drop down in ClientApp rahulShetty Academy - Search based', async ({ page }) => {

        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        await page.locator('#userEmail').fill('ashokkumar2028@gmail.com');
        await page.locator('#userPassword').fill('Ashok@2028');
        await page.locator('#login').click();
        await page.locator('[class="btn w-10 rounded"]').nth(1).click();
        await page.locator('[routerlink*="cart"]').click();
        await page.locator('text=Checkout').click();
        await page.locator('[placeholder="Select Country"]').pressSequentially('Ind');
        const list = page.locator('.ta-results');
       const  listcount = await list.locator('[type="button"]').count();
       for(let i=0;i<=listcount;i++){
                    const text= await list.locator('[type="button"]').nth(i).textContent();

                if(text===' India'){
                    await list.locator('[type="button"]').nth(i).click();
                    break;
                }

       }

    })

});