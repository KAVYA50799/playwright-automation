import { test, expect } from '@playwright/test';

test('RESTORE-2267 - Verify Due Date cannot be more than two days in the past', async ({ page }) => {

  
  await page.goto('https://uat.v2.restoreforretail.com/login');

  await page.getByLabel('Email').fill('kkavyasri881+ss@gmail.com');
  await page.getByLabel('Password').fill('Hello!23');

  await page.getByRole('button', { name: 'Log in' }).click();

  
  await page.getByRole('link', { name: 'My Projects', exact: true }).click();
  await page.getByText('General Operations Regression', { exact: true }).click();

  
  await page.getByRole('link', { name: 'Tasks', exact: true }).click();

  
  await page.getByText('Create Task', { exact: true }).click();

  
  
const dueDate = page.getByTestId('due-date-input');

await dueDate.click();

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() - 3);

const dateText = targetDate.toLocaleDateString('en-US', {
  month: 'long',
  day: '2-digit',
  year: 'numeric'
});

await dueDate.fill(dateText);
await dueDate.press('Enter');

});