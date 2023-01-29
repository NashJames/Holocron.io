import { test, expect } from '@playwright/test'

// test.beforeEach(async ({ page }) => {
//   await page.goto('http://localhost:1234')
// })

test.describe('Components', () => {
  test('AppHeader - Data Archives Link', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('button', { name: 'Data Archives' }).click()
    const popup = await popupPromise
    await popup.waitForLoadState()
    await expect(popup).toHaveURL('https://github.com/Juriy/swapi/tree/master/resources/fixtures')
  })

  test('AppHeader - GitHub Link', async ({ page, context }) => {
    const waitForButtonClick = context.waitForEvent('page')
    await page.getByRole('button', { name: 'GitHub Repository' }).click()
    const externalPage = await waitForButtonClick
    await externalPage.waitForLoadState()
    await expect(externalPage).toHaveURL('https://github.com/nashjames/holocron.io')
  })
})
