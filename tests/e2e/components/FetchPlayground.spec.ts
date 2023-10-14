import { expect, test } from '@playwright/test'

import { xWingAscii } from '../../../public/asciiArt/x-wing'

// prettier-ignore
const SKYWALKER_URL = 'https://swapi.dev/api/people/1'
const SKYWALKER_JSON = `{ "name": "Luke Skywalker", "height": "172", "mass": "77", "hair_color": "blond", "skin_color": "fair", "eye_color": "blue", "birth_year": "19BBY", "gender": "male", "homeworld": "https://swapi.dev/api/planets/1/", "films": [ "https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/" ], "species": [], "vehicles": [ "https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/" ], "starships": [ "https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/" ], "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "url": "https://swapi.dev/api/people/1/"}`
const HELPER_TEXT = 'Requests must be a valid URL beginning with: https://swapi.dev/api/'

// Status Text: Firefox = '404 Not Found' | Webkit = '404 NOT FOUND' | Chromium = '404'
const INVALID_RESPONSE = /{ {2}"status": "404 ((Not Found)|(NOT FOUND))?"}/

test.beforeEach(async ({ page }) => {
  page.goto('/')
  await page.waitForLoadState('domcontentloaded', { timeout: 15000 })
  await page.waitForLoadState('load', { timeout: 30000 })
  await page.waitForLoadState('networkidle', { timeout: 5000 })
})

test.describe('SearchBar', () => {
  test('Button Click', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill(SKYWALKER_URL)
    await page.getByRole('button', { name: 'SUBMIT' }).click()
    await expect(page.getByText(HELPER_TEXT)).toBeHidden()
    await expect(page.getByText(SKYWALKER_JSON)).toBeVisible()
  })

  test('Keyboard Press', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill(SKYWALKER_URL)
    await page.keyboard.press('Enter')
    await expect(page.getByText(HELPER_TEXT)).toBeHidden()
    await expect(page.getByText(SKYWALKER_JSON)).toBeVisible()
  })

  test('Invalid URL', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://invalid.url/api/people/1')
    await page.getByRole('button', { name: 'SUBMIT' }).click()
    await expect(page.getByText(HELPER_TEXT)).toBeVisible()
  })

  test('Invalid Request', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://swapi.dev/api/invalid')
    await page.keyboard.press('Enter')
    await expect(page.getByText(INVALID_RESPONSE, { exact: true })).toBeVisible()
  })
})

test.describe('Fetch Mirror', () => {
  test('Request Response Time', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill(SKYWALKER_URL)
    await page.keyboard.press('Enter')
    await expect(page.getByRole('button', { name: /\d+ms/ })).toBeVisible()
  })

  test('Copy Request URL', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill(SKYWALKER_URL)
    await page.keyboard.press('Enter')
    await expect(page.getByRole('button', { name: 'Copy URL' })).toBeVisible()
    // Browser clipboard permissions prevent us from testing the button functionality
  })

  test('Copy JSON', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill(SKYWALKER_URL)
    await page.keyboard.press('Enter')
    await expect(page.getByRole('button', { name: 'Copy JSON' })).toBeVisible()
    // Browser clipboard permissions prevent us from testing the button functionality
  })
})

test.describe('Easter Egg', () => {
  test('Render Ascii X-Wing', async ({ page }) => {
    page.on('console', async (console) => {
      expect(console.text().includes(xWingAscii)).toBeTruthy()
    })
  })

  test('Toast Hint Visible', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill('https://swapi.dev/api/starships/12')
    await page.keyboard.press('Enter')
    await expect(page.getByText('Psst!')).toBeVisible()
  })

  test('Toast Hint Invisible', async ({ page }) => {
    await page.getByPlaceholder('Search...').fill(SKYWALKER_URL)
    await page.keyboard.press('Enter')
    await expect(page.getByText('Psst!')).toBeHidden()
  })
})
