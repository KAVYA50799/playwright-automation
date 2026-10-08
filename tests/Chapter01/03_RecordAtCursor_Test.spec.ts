//Import playwright module
import { test, expect } from '@playwright/test';

//Write a test case
test('My first test', async ({ page }) => {

    await page.goto('https://www.youtube.com/');

    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');

    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    await expect(page).toHaveTitle('Playwright by testers talk - YouTube');
    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: '2 #2 Playwright API Testing' }).first()).toBeVisible();

    await expect(page.getByLabel('#1 Playwright Tutorial Full')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
    await expect(page.locator('#playlist')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');

});