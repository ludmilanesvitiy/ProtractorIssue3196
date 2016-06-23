'use strict';
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://ds-dev-consumer.firebaseapp.com/',
    
    multiCapabilities: [
        {
            browserName: 'chrome',
            maxInstances: 4
        }
    ],
    useAllAngular2AppRoots: true,

    specs: ['test.e2e.ts'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000
    }
};