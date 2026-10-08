import { test, expect } from '@playwright/test';

test('RESTORE-2864 - Error handling for invalid email during login', async ({ page }) => {

  
  await page.goto('https://uat.v2.restoreforretail.com/login');

  
  await page.getByLabel('Email').fill('test2@gmail.com')

  
  await page.getByLabel('Password').fill('Hello!23');

  
  await page.getByRole('button', { name: 'Log in' }).click();

  
 await expect(
    page.getByText(/No Tenant found for Email/i)
  ).toBeVisible();
});