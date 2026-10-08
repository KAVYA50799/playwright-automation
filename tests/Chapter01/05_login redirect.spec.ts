import { test, expect } from '@playwright/test';

test('Verify Login successful with valid credentials and redirect to dashboard', async({ page }) => {
    await page.goto('https://uat.v2.restoreforretail.com/Login');

    await page.getByLabel('Email').fill('kkavyasri881+aa@gmail.com');
    await page.getByLabel('Password').fill('Hello!23');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page).toHaveURL(/\/projects/);
});

