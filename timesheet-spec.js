describe('Timesheet Automation', function() {
    it('should fill out timesheet', function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://mv.force.com/revature/reLogin');

        var logoSource = element(by.css('.imageCenter')).getAttribute('src');
        expect(logoSource).toEqual('https://mv.force.com/revature/resource/1479749399000/RevatureLogo');

        // Login
        var usernameField = element(by.id('j_id0:j_id6:username'));
        var passwordField = element(by.id('j_id0:j_id6:password'));
        
        usernameField.clear().then(function(){
            sendKeys(browser.params.login.email);
        });
        passwordField.clear().then(function(){
            sendKeys(browser.params.login.password);
        });
        element(by.name('j_id0:j_id6:j_id14')).click();

        expect(browser.getTitle()).toEqual('Revature Timesheet Portal');

        // Open current timesheet and fill it out
        var openTimesheetBtn = element(by.name('j_id0:j_id10:j_id30:j_id34:j_id35:j_id36'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(openTimesheetBtn), browser.timeoutTime, 'Button taking too long to load');
        openTimesheetBtn.click();

        // Fill in 8 hours for each day
        var untilField = protractor.ExpectedConditions;
        var mondayHoursField = element(by.id('pageID:formID:pBlockID:pbTableID:1:j_id98:0:entryHrsID'));
        var tuesdayHoursField = element(by.id('pageID:formID:pBlockID:pbTableID:2:j_id98:0:entryHrsID'));
        var wednesdayHoursField = element(by.id('pageID:formID:pBlockID:pbTableID:3:j_id98:0:entryHrsID'));
        var thursdayHoursField = element(by.id('pageID:formID:pBlockID:pbTableID:4:j_id98:0:entryHrsID'));
        var fridayHoursField = element(by.id('pageID:formID:pBlockID:pbTableID:5:j_id98:0:entryHrsID'));
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

        element(by.name('pageID:formID:pBlockID:j_id48:bottom:j_id49')).click();

        var saveButton = element(by.id('saveButtonID'));
        browser.wait(until.presenceOf(saveButton), browser.timeoutTime, 'Button taking too long to load.');
        element(by.id('saveButtonID')).click();

        var timesheetHours = element(by.css('.timeSheetTotalCls'));
        browser.wait(until.presenceOf(timesheetHours), browser.timeoutTime, 'Span taking too long to load');
        expect(timesheetHours.getText()).toEqual('40.00');
    });
});