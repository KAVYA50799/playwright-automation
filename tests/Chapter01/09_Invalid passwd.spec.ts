import {test, expect} from '@playwright/test';

test('Error handling for invalid password during login', async ({ page })=>{

    await page.goto('https://uat.v2.restoreforretail.com/Login');
    await page.getByLabel('Email').fill('kkavyasri881+aa@gmail.com');
    await page.getByLabel('Password').fill('H1234');
    await page.getByRole('button', {name: 'Log in'}).click();

    await expect(page.getByText(/Incorrect username or password/i)).toBeVisible();
})