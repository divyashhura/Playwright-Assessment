import { test, expect } from '@playwright/test'
import { userCredentials } from '../constants/users'

test.describe('Login Tests', () => {
    test('should show error message with invalid credentials', async ({ page }) => {
      await page.goto('https://qa-app-01.qventus.com')
      await page.waitForSelector('input[type="text"]')
      await page.waitForSelector('input[type="password"]')
      await page.fill('input[type="text"]', userCredentials.username);
      await page.fill('input[type="password"]', userCredentials.password)
      await page.click('button:has-text("Sign in to Qventus")')
      const errorMessage = await page.waitForSelector('.error-message')
      const errorText = await errorMessage.innerText()
      expect(errorText).toContain('Invalid username or password')
    })
  })