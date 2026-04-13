/*
Annotations  are used for organizing and controlling tests in Playwright

Types of Annotations in Playwright:
There are 2 main categories:

1. Built-in Annotations (Execution Control) - These directly affect how tests run.
2. Descriptive Annotations (Metadata) - These don’t control execution—they improve reporting & organization.

*/





/*
Let’s break down "test.info()" in a simple + practical way.
// "testInfo" is same as "test.info()"

test.info() is a runtime API that gives you complete information about the currently running test.

Why do we use test.info()?
You use it when you want to:

Add custom annotations dynamically
Attach screenshots / logs / files
Get test status (Pass/Fail)
Get test name, title, retry count
Build advanced reporting
Integrate with Jira / Test Management tools

test('My test', async ({ page }, testInfo) => {
  // testInfo is same as test.info()
});


test('My test', async ({ page }) => {
  const info = test.info();
});

Both are same. But passing testInfo as parameter is preferred
*/
//import {test} from "@playwright/test";
import { test, expect, Page, TestInfo } from '@playwright/test';

test('Login test', async ({ page }, testInfo) => {
  testInfo.annotations.push({
    type: 'issue',
    description: 'BUG-1234'
  });

  await page.goto('https://testautomationpractice.blogspot.com/');
});


// Runs after every test
test.afterEach(async ({ page }: { page: Page }, testInfo: TestInfo) => {

  const testName = testInfo.title;
  const status = testInfo.status;

  if (status === 'passed') {
    console.log(`✅ PASSED: ${testName}`);
  }

  if (status === 'failed') {
    console.log(`❌ FAILED: ${testName}`);

    // Capture screenshot on failure
    const screenshot = await page.screenshot();

    await testInfo.attach('Failure Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });
  }

  // Optional: log duration
  console.log(`⏱ Duration: ${testInfo.duration} ms`);
});


// Actual test
test('Checkout test', async ({ page }: { page: Page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // This will PASS or FAIL depending on element availability
  await page.click('#checkout');

  // Example assertion (recommended in real projects)
  await expect(page).toHaveURL(/checkout/);
});