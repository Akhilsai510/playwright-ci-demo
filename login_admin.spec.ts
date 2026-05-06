import { test, expect} from '@playwright/test'

// Admin Login Test - UHG Portal
// Author: Akhil

test('admin should login with valid credentials', async ({ page }) => {
  await page.goto('https://uhg-portal.com');
  await page.fill('#username', 'admin@uhg.com');
  await page.fill('#password', 'Admin@123');
  await page.click('#loginBtn');
  await expect(page).toHaveURL('/dashboard');
});