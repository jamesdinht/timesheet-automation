exports.config = {
    params: {
        login: {
            email: 'SECRET',
            password: 'SECRET'
        }
    },
    timeoutTime: 5000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['timesheet-spec.js']
}
