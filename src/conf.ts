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
    getPageTimeout: 30000,
    specs: ['*.spec.js'],
    uploadFile: '../../example.png',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
};
