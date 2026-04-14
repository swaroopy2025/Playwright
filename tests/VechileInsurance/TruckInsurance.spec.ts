import {expect, test} from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';
import path from 'node:path';
import { text } from 'node:stream/consumers';

test.describe("Vechile Insurance",()=>{
    test("Truck Insurance Quote", async({page})=>{
        await page.goto("https://sampleapp.tricentis.com/101/index.php");
        expect(page.locator('#downloadtrial')).toBeVisible();
        await page.locator('#nav_truck').first().click();
        await page.waitForLoadState();
        await page.locator('#make').selectOption('BMW');
        await page.locator('#engineperformance').fill('1234');
        await page.locator('#dateofmanufacture').fill('10/10/2025');
        await page.locator('#numberofseats').selectOption('7');
        await page.locator('#fuel').selectOption('Diesel');
        await page.locator('#payload').fill('999');
        await page.locator('#totalweight').fill('22222');
        await page.locator('#listprice').fill('23222');
        await page.locator('#licenseplatenumber').fill('1234567890');
        await page.locator('#annualmileage').fill('4343');
        await page.locator('#nextenterinsurantdata').click();
        //Enter Insurant Data

        await page.locator('#firstname').fill('Swaroop');
        await page.locator('#lastname').fill('Reddy');
        await page.locator('#birthdate').fill('09/09/1987');
        await page.locator('#gendermale').check({force:true});
        await page.locator('#streetaddress').fill('FREMONT,HYD');
        await page.locator('#country').selectOption('India');
        await page.locator('#zipcode').fill('123456');
        await page.locator('#city').fill('HYDERABAD');
        await page.locator('#occupation').selectOption('Farmer');
        await page.locator('#cliffdiving').check({force:true});
        await page.locator('#website').fill("https://sampleapp.tricentis.com/101/app.php");
        //File upload
        // Path to your image
        const filepath = path.resolve('tests/VechileInsurance/1.png');
        // Upload file
        await page.locator('#picture').focus();
        await page.locator('input[type="file"]').setInputFiles(filepath);
        // Optional: verify file name appears in UI
        await expect(page.locator('input[type="file"]')).toHaveValue(/1.png/);
        //await expect(page.locator('input[type="file"]')).toHaveValue(/1\.jpg/);
        await page.locator('#nextenterproductdata').click();

        //Enter Product Data
        await page.locator('#startdate').fill('10/10/2026');
        // Press TAB to move to next field
        await page.keyboard.press('Tab');
        await page.locator('#insurancesum').selectOption('5000000');
        await page.locator('#damageinsurance').selectOption('Partial Coverage');
        await page.locator('#EuroProtection').check({force:true});
        await page.locator('#nextselectpriceoption').click();

        //Select Price Option
        await page.locator('#selectultimate').check({force:true});
        await page.locator('#nextsendquote').click();
        await page.locator('#email').fill('testysr9100@gmail.com');
        await page.locator('#phone').fill('4567891230');
        await page.locator('#username').fill('Swaroop');
        await page.locator('#password').fill('Swaroop@123');
        await page.locator('#confirmpassword').fill('Swaroop@123');
        await page.locator('#Comments').fill('This simulates pressing the TAB key once and moves focus to the next focusable element.')
        await page.locator('#sendemail').click();
        //Printing message in Console
        console.log(await page.locator('.showSweetAlert').textContent());
        //Verifying the success message
        await expect(page.locator('.showSweetAlert')).toContainText('Sending e-mail success!');
        //Click on OK button in 
        await page.locator('.confirm').click();
        //Navigate to main page
        await page.locator("text='Main page'").click();
        //Alternative - Navigate to main page
        //await page.getByText('Main page').click();

         
    });

});