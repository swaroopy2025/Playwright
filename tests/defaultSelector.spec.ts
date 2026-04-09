import {test} from '@playwright/test';

test.describe("Using Default Selectors",()=>{
    test("Using getByRole",async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.getByRole("button",{name:"START"}).click();
        await page.getByRole("button",{name:"Simple Alert"}).click();
        
    })
    test("Using getByText",async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.getByText('Simple Alert').click();
        await page.getByRole('link',{name:'PlaywrightPractice'}).first().click();
        await page.goBack();
        await page.getByLabel('Sunday').check();
        await page.getByPlaceholder('Enter Name').pressSequentially('Swaroop');
        console.log(await page.getByTitle('Automation Testing Practice').first().textContent());
        
    })
    test("Using GetBy methods",async ({page})=>{
        await page.goto("https://rahulshettyacademy.com/practice");
        await page.getByAltText('Rahul Shetty Academy').click();
    });
})