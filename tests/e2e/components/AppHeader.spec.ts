import { expect, test } from '@playwright/test'

const DATA_ARCHIVES_URL = 'https://github.com/Juriy/swapi/tree/master/resources/fixtures'
const GITHUB_REPOSITORY_URL = 'https://github.com/nashjames/holocron.io'

test.beforeEach(async ({ page }) => {
  page.goto('/')
  await page.waitForLoadState('domcontentloaded', { timeout: 15000 })
  await page.waitForLoadState('load', { timeout: 30000 })
  await page.waitForLoadState('networkidle', { timeout: 5000 })
})

test.describe('NavLinks', () => {
  test('Data Archives', async ({ context, page }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator(`a[href="${DATA_ARCHIVES_URL}"]`).click(),
    ])
    await newPage.waitForLoadState()
    await expect(newPage).toHaveURL(DATA_ARCHIVES_URL)
  })

  test('GitHub Repository', async ({ context, page }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator(`a[href="${GITHUB_REPOSITORY_URL}"]`).click(),
    ])
    await newPage.waitForLoadState()
    await expect(newPage).toHaveURL(GITHUB_REPOSITORY_URL)
  })
})
