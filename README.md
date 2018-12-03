# Timesheet Automation

Automate filling out your Revature timesheet with 8 hours Monday-Friday, giving you a 40 hour work week.

# Requirements

- Reasonable Internet connection (The automated tests waits up to 5 seconds for a page to load, before aborting)
  - The timeout time can be changed by setting a different value for `timeoutTime` in `conf.js`
- [Node.js](https://nodejs.org/en/)
- [Protractor](http://www.protractortest.org/#/)
- [Google Chrome](https://www.google.com/chrome/) (currently, the tests run only on Chrome)

# To Use

Clone this repository

`git clone https://github.com/jamesdinht/timesheet-automation.git`

Setup [protractor](http://www.protractortest.org/#/) on your machine by following the instructions on their website

Run the script

- Navigate to the directory
  - `cd timesheet-automation`
- Run the script (don't forget to set your username and password, use single quotes if your password contains special characters)
  - `protractor conf.js --params.login.username=test@example.com --params.login.password='password'`
- Alternatively, change the `params.username` and `params.password` in `conf.js` to use your email and password and run:
  - `protractor conf.js`

## Comments

### **Avoid clicking on the UI while it logs you in. Otherwise, you redirect the cursor away from the username and password input fields, causing it the stop inputting values and fail to login.**

Since the automation is technically a test, some test cases are written in to make sure that everything is going correctly. If an assertion fails, the tests will fail, aborting the rest of the automated task. Check the output to find out what is wrong and attempt to solve the problem. If there are any issues, please record them [here](https://github.com/jamesdinht/timesheet-automation/issues).

If there are no errors, it worked. The window will close after the tests finish. Please double check that your timesheet has been recorded with 40.00 hours.