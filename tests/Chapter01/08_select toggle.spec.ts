import { test, expect } from '@playwright/test';

test('RESTORE-1951 - Verify Select Photos toggle is visible', async ({ page }) => {

  await page.goto('https://uat.v2.restoreforretail.com/login');

  await page.getByLabel('Email').fill('ganesht@restoreforretail.com');
  await page.getByLabel('Password').fill('Hello!23');
  await page.getByRole('button', { name: 'Log in' }).click();

  
  await page.getByRole('link', { name: 'My Projects', exact: true }).click();

  await page.getByText('General Operations Regression', { exact: true }).click();

  await page.getByRole('link', { name: 'Gallery', exact: true }).click();

  
  await expect(
    page.getByText('Select Photos', { exact: true })
  ).toBeVisible();
});