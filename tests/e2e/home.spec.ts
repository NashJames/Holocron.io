import { test, expect } from '@playwright/test'

// prettier-ignore
const SKYWALKER_JSON = `{ "name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "19BBY", "gender": "male", "homeworld": "https://swapi.dev/api/planets/1/", "films": [ "https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/" ], "species": [], "vehicles": [ "https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/" ], "starships": [ "https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/" ], "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "url": "https://swapi.dev/api/people/1/"}`
const HELPER_TEXT = 'Requests must be a valid URL beginning with: https://swapi.dev/api/'

test.beforeEach(({ page }) => page.goto('/'))

test.describe('Fetch API', () => {
  test('Search - Button Click', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://swapi.dev/api/people/1')
    await page.getByRole('button', { name: "Click here or press the 'Enter' key" }).click()
    await expect(page.getByText(HELPER_TEXT)).toBeHidden()
    await expect(page.getByRole('textbox')).toContainText(SKYWALKER_JSON)
  })

  test('Search - Keyboard Press', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://swapi.dev/api/people/1')
    await page.keyboard.press('Enter')
    await expect(page.getByText(HELPER_TEXT)).toBeHidden()
    await expect(page.getByRole('textbox')).toContainText(SKYWALKER_JSON)
  })

  test('Invalid Request', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://swapi.dev/api/invalid')
    await page.keyboard.press('Enter')
    await expect(page.getByText(HELPER_TEXT)).toBeHidden()

    // Status Text: Firefox = 'Not Found' | Webkit = 'NOT FOUND' | Chromium = n/a
    await expect(page.getByRole('textbox')).toContainText(
      /{ {2}"status": "404 ((Not Found)|(NOT FOUND))?"}/g
    )
  })

  test('Invalid Search', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://invalid.url/api/people/1')
    await page.getByRole('button', { name: "Click here or press the 'Enter' key" }).click()
    await expect(page.getByText(HELPER_TEXT)).toBeVisible()
  })
})
