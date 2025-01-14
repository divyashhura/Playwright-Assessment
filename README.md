# Playwright-Assessment

Playwright Automation for "Login with Bad Username" Scenario
This automation script uses Playwright and JavaScript to test the "Login with Bad Username" scenario.

**Prerequisites**: 
Node.js (>= 14.x)
Playwright installed via npm.

**Steps to Run:**

1. Clone this repository or download the code files.
2. Install the required dependencies: **npm install playwright**
3. Run the test: **npm test**

**Test Flow**: 

1. Open the Browser: Launches the browser and navigates to the login page.
2. Enter Username: Enters the bad username ("BadUser").
3. Enter Password: Enters the bad password ("BadPassword").
4. Click "Sign in" Button: Submits the login form.
5. Assert the Error: Verifies the error message displayed due to invalid credentials.


**Timeout Configuration**:

A global timeout of 2 minutes is set for the entire test run to ensure the test does not run indefinitely in case of any issues.
