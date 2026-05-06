// Payment Cash Test
// Author: Akhil

test('user should complete payment with cash', async ({ page }) => {
  await page.goto('https://uhg-portal.com/payment');
  await page.click('#cashOption');
  await page.click('#confirmBtn');
  await expect(page.locator('#successMsg')).toBeVisible();
});