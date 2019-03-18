exports.config = {
    port: 9515, // default
    path: '/',
    services: ['chromedriver'],
    chromeDriverArgs: ['--port=9515'], // default
    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: './allure-report/'
        }
    },
    runner: 'local',
    specs: [
        './test_script/AddComputer.js',
        './test_script/EditComputer.js',
        './test_script/DeleteComputer.js',
        './test_script/FilterAndListView.js'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://computer-database.herokuapp.com',
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 0,
        compilers: ['js:@babel/register']
    }

};
