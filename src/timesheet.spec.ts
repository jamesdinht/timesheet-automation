import { browser } from "protractor";
import { protractor } from "protractor/built/ptor";

describe('Timesheet Automation', () => {
    it('should fill out timesheet', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://rev2.force.com/revature/s/login/?startURL=%2Frevature%2Fs%2F&ec=302');
        const until = protractor.ExpectedConditions;
        expect(browser.getTitle()).toBe('Login');
    });
});
