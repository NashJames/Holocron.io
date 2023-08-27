import { expect, test } from '@playwright/test'

test.beforeEach(({ page }) => page.goto('/'))

test.describe('Components', () => {
  test('AppHeader - Data Archives Link', async ({ page }) => {
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('button', { name: 'Data Archives' }).click(),
    ])
    await expect(popup).toHaveURL('https://github.com/Juriy/swapi/tree/master/resources/fixtures')
  })

  test('AppHeader - GitHub Link', async ({ page }) => {
    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      page.getByRole('button', { name: 'GitHub Repository' }).click(),
    ])
    await expect(popup).toHaveURL('https://github.com/nashjames/holocron.io')
  })
})
