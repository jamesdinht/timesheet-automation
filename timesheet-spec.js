describe('Timesheet Automation', function() {
    it('should fill out timesheet', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://rev2.force.com/revature/s/login/?startURL=%2Frevature%2Fs%2F&ec=302');
        var until = protractor.ExpectedConditions;

        // Login
        var usernameField = element(by.id('51:2;a'));
        browser.wait(until.presenceOf(usernameField), browser.timeoutTime, 'Field taking too long to load.');

        var passwordField = element(by.id('63:2;a'));
        
        usernameField.clear().then(function() {
            usernameField.sendKeys(browser.params.login.username);
        });
        passwordField.clear().then(function() {
            passwordField.sendKeys(browser.params.login.password);
        });
        element(by.css('.loginButton')).click();

        expect(browser.getTitle()).toEqual('Login');

        // Open current timesheet and fill it out
        var openTimesheetBtn = element(by.css('button[title="Open Current Timesheet"]'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(openTimesheetBtn), browser.timeoutTime, 'Button taking too long to load');
        openTimesheetBtn.click();

        expect(browser.getTitle()).toEqual('Timesheet');

        // Fill in 8 hours for each day
        var mondayHoursField = element(by.id('66:230;a'));
        var tuesdayHoursField = element(by.id('78:230;a'));
        var wednesdayHoursField = element(by.id('90:230;a'));
        var thursdayHoursField = element(by.id('102:230;a'));
        var fridayHoursField = element(by.id('114:230;a'));
        browser.wait(until.presenceOf(mondayHoursField), browser.timeoutTime, 'Field taking too long to load.')

        mondayHoursField.clear().then(function() {
            mondayHoursField.sendKeys('8.00');
        });
        tuesdayHoursField.clear().then(function() {
            tuesdayHoursField.sendKeys('8.00');
        });
        wednesdayHoursField.clear().then(function() {
            wednesdayHoursField.sendKeys('8.00');
        });
        thursdayHoursField.clear().then(function() {
            thursdayHoursField.sendKeys('8.00');
        });
        fridayHoursField.clear().then(function() {
            fridayHoursField.sendKeys('8.00');
        });

        var saveButton = element(by.buttonText('Save'));
        browser.wait(until.presenceOf(saveButton), browser.timeoutTime, 'Button taking too long to load.')
            .then(() => {
                saveButton.click();
            });

        var timesheetHours = element.all(by.css('.cTimesheetTotalHour')).last();
        expect(timesheetHours.getText()).toEqual('40.00');
    });
});