import { expect, test } from '@playwright/test'

const DATA_ARCHIVES_URL = 'https://github.com/Juriy/swapi/tree/master/resources/fixtures'
const GITHUB_REPOSITORY_URL = 'https://github.com/nashjames/holocron.io'

test.beforeEach(({ page }) => page.goto('/'))

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
