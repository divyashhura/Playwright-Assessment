module.exports = {
  testDir: './playwright-framework/tests',
  timeout: 120000, // Wait for 2 minutes
  use: {
    headless: false, // Browser will be visible (headed mode)
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
  },
  reporter: 'html',
}
