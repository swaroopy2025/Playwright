
import { test } from '@playwright/test'
//const{test} = require('@playwright/test');

//Creating a test cases by using the test function 
//async ({ browser }) → Playwright automatically provides a browser instance as a fixture.
test('Launch Browser', async ({ browser }) => {
   //A browser context is like a fresh, isolated browser profile.It doesn’t share cookies, cache, or sessions with other tests.
   //Useful for clean test environments.
   /*  
   What is actually happening?

   context.newPage():

   Sends a request to the browser to open a new tab
   Browser takes some time to create it
   Returns a Promise<Page>
   👉 await tells JavaScript:
   “Pause here until the page is fully created, then continue.”
   */

   const context = await browser.newContext();
   //Open a New Page (Tab).Opens a new tab inside that context.page is what you use to interact with the website.
   const page = await context.newPage();
   //Navigate to Google.Opens Google in the browser.
   await page.goto('https://www.google.com');
   //Type Text into Search Box.pressSequentially('Allu Arjun').That means Types text character by character (like real typing).
   //Simulates human typing more realistically than .fill()
   await page.locator('#APjFqb').pressSequentially('Allu Arjun');
   /*
   await page.getByRole('textbox').fill('Allu Arjun');
   await page.keyboard.press('Enter');
   */

   //Print Page Title.Prints it in the console.
   console.log(await page.title());
   //await page.pause(); pauses the execution upto above step, it doesn't execute other steps.Its stops the further execution.

   await page.locator('//div[@class="u4Uk3c"]').click();
});

