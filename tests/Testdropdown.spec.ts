
import {test,expect} from '@playwright/test';

test.describe('Testing Drop downs',()=>{

    test('Login to Orange HRM', async({page})=>{

       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       await page.locator("[name='username']").fill('Admin');
       await page.locator("[name='password']").pressSequentially('admin123');
       await page.locator("[type='submit']").click();
       await page.locator('[href*= "viewPimModule"]').click();
       await page.locator('.oxd-select-text-input').nth(2).click();
       await page.locator('div[role="option"] >> text=Database Administrator').click();
    });

    test('Drop down in ClientApp rahulShetty Academy - Search based',async({page})=>{
        
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        await page.locator('#userEmail').fill('ashokkumar2028@gmail.com');
        await page.locator('#userPassword').fill('Ashok@2028');
        await page.locator('#login').click();
        await page.locator('.card-body .w-10').nth(1).click();
        await page.locator("button[routerlink*='cart']").click();
        await page.locator('text=Checkout').click();
        await page.locator("input[placeholder='Select Country']").pressSequentially('ind');
        const selectCountryDropdown = page.locator('.form-group .ta-results');
         await selectCountryDropdown.waitFor();
        const CountryOptions = await selectCountryDropdown.locator('button').count();
        for (let i =0; i<=CountryOptions;i++){

            const text = await selectCountryDropdown.locator('button').nth(i).textContent();
            if(text === ' India'){
                await selectCountryDropdown.locator('button').nth(i).click();
             break;
            }
        } 
        await page.locator('text = Place Order ').click();
        console.log(await page.locator('.ng-star-inserted .em-spacer-1 .ng-star-inserted').textContent());
        console.log(await page.locator('.hero-primary').textContent());
        await expect(page.locator('.hero-primary')).toHaveText(' Thankyou for the order. ')
        
    })

    test('Drop down for Select Tag', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        // await page.locator('#country', {hasText:'Japan'}).click();
        await page.locator('#country').selectOption('japan');
        //Select the Gender Radio button
        await page.locator('#female').check();
        await expect(page.locator('#female')).toBeChecked();

    })

});