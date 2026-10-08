//Import playwright module
import { test, expect } from '@playwright/test';

//Write a test case
test('My first test', async ({ page }) => {

    await page.goto('https://www.youtube.com/');

    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');

    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    await expect(page).toHaveTitle('Playwright by testers talk - YouTube');
  

    // //Navigate to the URL
    // await page.goto('https://www.google.com/');

    // //search with keywords
    // await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    // await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // console.log('URL:', page.url());
    // console.log('Title:', await page.title());
    // console.log('Links:', await page.getByRole('link').allTextContents());
});

    // //Click on playlist
    // await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 31.1K+ followers' }).click();
    // //Validate web page title
    // await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube');

