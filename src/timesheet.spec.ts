import { browser, element, by } from 'protractor';
import { config } from './conf';

describe('Timesheet Automation', () => {
  it('should fill out timesheet', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://rev2.force.com/revature/s/login/?startURL=%2Frevature%2Fs%2F&ec=302');
    const until = browser.ExpectedConditions;

    // Get username and password fields
    const usernameField = element(by.id('51:2;a'));
    browser.wait(until.presenceOf(usernameField), config.getPageTimeout, 'Username field is taking too long to load')
      .then(() => {
        usernameField.clear().then(() => {
          usernameField.sendKeys(config.params.login.username);
        });
      });

    const passwordField = element(by.id('63:2;a'));
    passwordField.clear().then(() => {
      passwordField.sendKeys(config.params.login.password);
    });

    element(by.css('.loginButton')).click();

    expect(browser.getTitle()).toEqual('Login');

    // Open current timesheet and fill it out
    const openTimesheetBtn = element(by.css('button[title="Open Current Timesheet"]'));
    browser.wait(until.presenceOf(openTimesheetBtn), config.getPageTimeout, 'Button taking too long to load')
      .then(() => {
        openTimesheetBtn.click();
      });

    expect(browser.getTitle()).toEqual('Timesheet');

    // Fill in 8 hours for each day
    const mondayHoursField = element(by.id('66:230;a'));
    const tuesdayHoursField = element(by.id('78:230;a'));
    const wednesdayHoursField = element(by.id('90:230;a'));
    const thursdayHoursField = element(by.id('102:230;a'));
    const fridayHoursField = element(by.id('114:230;a'));
    browser.wait(until.presenceOf(mondayHoursField), config.getPageTimeout, 'Field taking too long to load.')
      .then(() => {
        mondayHoursField.clear().then(() => {
          mondayHoursField.sendKeys('8.00');
        });
      });

    tuesdayHoursField.clear().then(() => {
      tuesdayHoursField.sendKeys('8.00');
    });
    wednesdayHoursField.clear().then(() => {
      wednesdayHoursField.sendKeys('8.00');
    });
    thursdayHoursField.clear().then(() => {
      thursdayHoursField.sendKeys('8.00');
    });
    fridayHoursField.clear().then(() => {
      fridayHoursField.sendKeys('8.00');
    });

    const saveButton = element(by.buttonText('Save'));
    browser.wait(until.presenceOf(saveButton), config.getPageTimeout, 'Button taking too long to load.')
      .then(() => {
        saveButton.click();
      });

    const timesheetHours = element.all(by.css('.cTimesheetTotalHour')).last();
    expect(timesheetHours.getText()).toEqual('40.00');

    const path = require('path');
    const remote = require('selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());

    const attachFileButton = element(by.buttonText('1 File Attached'));
    browser.wait(until.presenceOf(attachFileButton), config.getPageTimeout, 'Attack file Button took too long to load.')
      .then(() => {
        attachFileButton.click();
      });

    const fileUploadInput = element(by.css('input[type="file"'));
    const uploadFileButton = element(by.buttonText('Upload'));
    browser.wait(until.visibilityOf(uploadFileButton), config.getPageTimeout, 'Upload button taking too long to load.')
      .then(() => {
        expect(uploadFileButton.isDisplayed()).toBe(true);
        fileUploadInput.sendKeys(path.resolve(__dirname, config.uploadFile))
          .then(() => {
            uploadFileButton.click().then(() => {
              const uploadDoneButton = element(by.buttonText('Done'));
              browser.wait(until.visibilityOf(uploadDoneButton), config.getPageTimeout, 'Done button taking too long to load.')
                .then(() => {
                  uploadDoneButton.click();
                });
            });
          });
      });
  });
});
