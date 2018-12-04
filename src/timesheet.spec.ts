import { browser, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { config } from './conf';

describe('Timesheet Automation', () => {
    it('should fill out timesheet', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://rev2.force.com/revature/s/login/?startURL=%2Frevature%2Fs%2F&ec=302');
        const until = browser.ExpectedConditions;

        // Get username and password fields
        const usernameField = element(by.id('51:2;a'));
        browser.wait(until.presenceOf(usernameField), browser.getPageTimeout, 'Username field is taking too long to load').then(() => {
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
        browser.wait(until.presenceOf(openTimesheetBtn), browser.timeoutTime, 'Button taking too long to load').then(() => {
            openTimesheetBtn.click();
        });
        
        expect(browser.getTitle()).toEqual('Timesheet');

        // Fill in 8 hours for each day
        const mondayHoursField = element(by.id('66:230;a'));
        const tuesdayHoursField = element(by.id('78:230;a'));
        const wednesdayHoursField = element(by.id('90:230;a'));
        const thursdayHoursField = element(by.id('102:230;a'));
        const fridayHoursField = element(by.id('114:230;a'));
        browser.wait(until.presenceOf(mondayHoursField), browser.timeoutTime, 'Field taking too long to load.');

        mondayHoursField.clear().then(() =>  {
            mondayHoursField.sendKeys('8.00');
        });
        tuesdayHoursField.clear().then(() =>  {
            tuesdayHoursField.sendKeys('8.00');
        });
        wednesdayHoursField.clear().then(() =>  {
            wednesdayHoursField.sendKeys('8.00');
        });
        thursdayHoursField.clear().then(() =>  {
            thursdayHoursField.sendKeys('8.00');
        });
        fridayHoursField.clear().then(() =>  {
            fridayHoursField.sendKeys('8.00');
        });

        const saveButton = element(by.buttonText('Save'));
        browser.wait(until.presenceOf(saveButton), browser.timeoutTime, 'Button taking too long to load.')
            .then(() => {
                saveButton.click();
        });

        const timesheetHours = element.all(by.css('.cTimesheetTotalHour')).last();
        expect(timesheetHours.getText()).toEqual('40.00');
    });
});
