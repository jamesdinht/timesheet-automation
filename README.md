# Timesheet Automation

[![Build Status](https://travis-ci.org/jamesdinht/timesheet-automation.svg?branch=master)](https://travis-ci.org/jamesdinht/timesheet-automation)

Automate filling out your Revature timesheet with 8 hours Monday-Friday, giving you a 40 hour work week.

## Requirements

- Reasonable Internet connection
  - The timeout time can be changed by setting a different value for `getPageTimeout` and `defaultDefaultTimeoutInterval` in `conf.ts`
- [Node.js](https://nodejs.org/en/) - 8.12.0+
- [Protractor](http://www.protractortest.org/#/) - 5.4.1+
- [Yarn](https://yarnpkg.com/en/) - 1.3.2+
- [Java](https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html) (for running Selenium) - 1.8.0_191+
- [Google Chrome](https://www.google.com/chrome/) (currently, the tests run only on Chrome)

## To Use

Clone this repository

`git clone https://github.com/jamesdinht/timesheet-automation.git`

Setup protractor on your machine by following the instructions on their website [here](https://www.protractortest.org/#/tutorial)

Run the script

- Navigate to the directory
  - `cd timesheet-automation`
- Install packages
  - `yarn`
- Run the script (don't forget to set your username and password, use single quotes if your password contains special characters)
  - `protractor conf.js --params.login.username=test@example.com --params.login.password='password'`
- Alternatively, change the `params.username` and `params.password` in `conf.js` to use your email and password and run:
  - `protractor conf.js` or
  - `yarn timesheet`

## Comments

### **Avoid clicking on the UI while it logs you in. Otherwise, you redirect the cursor away from the username and password input fields, causing it the stop inputting values and fail to login.**

*Currently, this automation is assumed to be run on Fridays and previous timesheets are also submitted on Friday.*

Since the automation is technically a test, some test cases are written in to make sure that everything is going correctly. If an assertion fails, the tests will fail, aborting the rest of the automated task. Check the output to find out what is wrong and attempt to solve the problem. If there are any issues, please record them [here](https://github.com/jamesdinht/timesheet-automation/issues).

If there are no errors, it worked. The window will close after the tests finish. Please double check that your timesheet has been recorded with 40.00 hours.

## Features

- Signs in to the Revature Timesheet Portal using credentials provided.
- Opens the current timesheet.
- Fills in 8.00 hours Monday through Friday.
- Saves after 40 hours has been entered.

## Future features

- Attach file to the timesheet
- Send email
- Fill out timesheet on days other than Friday
- Save credentials in a separate file that can be read from `conf.ts` or `conf.js`

## Contributing

Please see [how to contribute](CONTRIBUTING.md).