import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:1234')
})

test.describe('Home', () => {
  test('FullPage', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true, scale: 'css' })
  })

  test('Title contents exist?', async ({ page }) => {
    await expect(page).toHaveTitle('Holocron.io')

    await expect(page.locator('h1')).toContainText('A modern API for the Jedi Archives')
    await expect(page.getByAltText('Jedi Holocron SVG')).toHaveCount(6)
  })
})
