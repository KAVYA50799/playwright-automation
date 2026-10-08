import { test, expect } from '@playwright/test';

test('Verify login button is displayed for first-time users', async ({ page }) => {
  await page.goto('https://uat.v2.restoreforretail.com/login');

  await expect(
    page.getByRole('button', { name: 'Log in' })
  ).toBeVisible();
});