import {test} from '@playwright/test';

test("Perform Browser Operations",async ({page})=>{
    //Launch webpage
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //Enter Username
    await page.locator('#userEmail').fill('ashokkumar2028@gmail.com');
    await page.locator('#userPassword').fill('Ashok@2028');
    await page.locator('#login').click();

    //Reload the page
    await page.reload();
    //Page go back
    await page.goBack();
    //Page go forward
    await page.goForward();

})

test("Perform Browser Operations in different way",async ({page})=>{
    //Launch webpage
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //Enter Username
    await page.locator('#userEmail').fill('ashokkumar2028@gmail.com');
    //Enter Password
    await page.locator('#userPassword').fill('Ashok@2028');
    // Click login and wait for navigation
    await Promise.all([
        page.waitForURL('**/dashboard/dash'), // wait until redirected after login
        page.locator('#login').click()
    ]);

    //Reload the page
    await page.reload();
    //Page go back
    await page.goBack();
    //Page go forward
    await page.goForward();
    
})

test("Perform Browser Operations in different way2",async ({page})=>{
    //Launch webpage
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //Enter Username
    await page.locator('#userEmail').fill('ashokkumar2028@gmail.com');
    //Enter Password
    await page.locator('#userPassword').fill('Ashok@2028');
    //Click on Login button
    await page.locator('#login').click();
    // OR (alternative) wait for a specific element on dashboard
    await page.locator('.fa.fa-sign-out').first().waitFor();
    //Reload the page
    await page.reload();
    //Page go back
    await page.goBack();
    //Page go forward
    await page.goForward();
    
})