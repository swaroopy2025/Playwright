import { test } from "@playwright/test";

//Creating a test cases by using the test function 
//async ({ browser }) → Playwright automatically provides a browser instance as a fixture.
test("Launching The Browser", async ({ browser }) => {
    const context = await browser.newContext();

    await browser.close();
    //const page= await context.newPage();
    //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

})

test('open page', async ({ page }) => {
    await page.goto('https://example.com');
});


