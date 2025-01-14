import { test, expect } from '@playwright/test'
import { userCredentials } from '../constants/users'

test.describe('Login Tests', () => {
    test('should show error message with invalid credentials', async ({ page }) => {
      await page.goto('https://qa-app-01.qventus.com')
      await page.fill('input[type="text"]', userCredentials.username) //enter username
      await page.fill('input[type="password"]', userCredentials.password) //enter password
      await page.click('button:has-text("Sign in to Qventus")') //Verify text and click on Sign in button
      const errorMessage = page.locator('p', { text: 'Invalid username and/or password!' })
      await expect(errorMessage).toBeVisible() //Verify the error message is displayed
    })
  })