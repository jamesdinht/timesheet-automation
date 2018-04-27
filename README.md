# Timesheet Automation
Automate filling out your Revature timesheet with 8 hours Monday-Friday, giving you a 40 hour work week.

# Requirements
- Reasonable Internet connection (The automated tests waits up to 5 seconds for a page to load, before aborting)
    - The timeout time can be changed by changing `timeoutTime` in `conf.js`
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
- Start the selenium server
    - `webdriver-manager start`
- Run the script in a separate window (don't forget to set your username and password)
    - `protractor conf.js --params.login.email=test@example.com -- params.login.password='password'`
- Alternatively, change the `params.email` and `params.password` in `conf.js` to use your email and password and run:
    - `protractor conf.js`

## Comments
If there are no errors, it worked. The window will close after the tests finish. Please double check that your timesheet has been recorded with 40.00 hours.