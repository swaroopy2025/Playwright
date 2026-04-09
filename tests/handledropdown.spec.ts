import {test,expect} from '@playwright/test';

test("Handle Dropdown fields",async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('a[class="btn1"]').click();
    await page.locator('#firstName').fill('Softsol');
    await page.locator('#lastName').fill('Tester');
    await page.locator('#userEmail').fill('softsoltester@gmail.com');
    await page.locator('#userMobile').fill('9517534862');
    
    //Your HTML shows a <select> element with options like Doctor, Student, Engineer… — so you can directly use selectOption().
    await page.selectOption('select[formcontrolname="occupation"]', {label: 'Doctor'});
    // Using By value
    //await page.selectOption('select[formcontrolname="occupation"]', '1');
    // Using By index
    await page.selectOption('select[formcontrolname="occupation"]', { index: 1 });
    //Using Locator (recommended modern Playwright style).
    const dropdown = page.locator('select[formcontrolname="occupation"]');
    await dropdown.selectOption({ label: 'Student' });
    //Verify selected value
    //await expect(dropdown).toHaveValue('1'); // for Student

    /* 
    If it’s NOT a <select> (custom dropdown like Angular Material, React, etc.)

    Then selectOption() won’t work. You must:

    Click dropdown
    Click option

    Tips::
   Always inspect if it’s <select> or custom UI.
   Prefer locator() over page.$().
   Use label, value, or index depending on stability.
    */
   //await page.click('#occupationDropdown');   // open dropdown
    //await page.click('text=Doctor');           // select option



})