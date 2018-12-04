import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
    },
    params: {
        login: {
            username: 'ENTER USERNAME HERE',
            password: 'ENTER PASSWORD HERE'
        }
    },
    getPageTimeout: 5000,
    specs: ['*.spec.ts'],
};
