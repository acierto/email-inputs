/* eslint-disable */
var os = require('os');

var AsciiTable = require('ascii-table');
var DEFAULT_TIMEOUT = 30000;
var DEFAULT_EXPECTATION_TIMEOUT = 2000;
var ScreenShotReporter = require('protractor-screenshot-reporter');

var browserName = process.env.SELENIUM_TEST_BROWSER || 'chrome';
var platform = (process.env.SELENIUM_TEST_PLATFORM || 'any');
var platformName = (process.env.SELENIUM_TEST_PLATFORM_NAME || 'any').toLowerCase();

var seleniumVersions = require('../../../gulp/tasks/selenium/selenium-versions.json');

var hostname = require('../../../gulp/utils/hostname');
var port = require('../../../gulp/utils/port');

var browserWidth = 1024;
var browserHeight = 768;

function propOr(defaultValue, propName, obj) {
    if (obj.hasOwnProperty(propName)) {
        return obj[propName];
    }
    return defaultValue;
}

function printBanner() {
    var table = new AsciiTable('Configuration');
    table
        .addRow('Host', propOr('localhost', 'SELENIUM_TEST_ADDR', process.env))
        .addRow('Browser', propOr(`Not set. Using default. (${browserName})`, 'SELENIUM_TEST_BROWSER', process.env))
        .addRow('Platform', propOr(`Not set. Using local: (${os.platform()})`, 'SELENIUM_TEST_PLATFORM', process.env))
        .addRow('Platform name', propOr(`Not set. Using local: (${os.platform()})`, 'SELENIUM_TEST_PLATFORM_NAME', process.env));
    console.log(table.toString());
}

exports.config = {
    allScriptsTimeout: DEFAULT_TIMEOUT,
    baseUrl: 'http://' + hostname + ':' + port + '/',
    capabilities: {
        browserName,
        platform,
        platformName,
        ...browserName === 'chrome' ? {
            chromeOptions: {
                args: ['--window-size=' + browserWidth + ',' + (browserHeight + 120)]
            }
        } : {},
        'se:ieOptions': {requireWindowFocus: true}
    },
    framework: 'jasmine2',
    troubleshoot: true,
    getPageTimeout: DEFAULT_TIMEOUT,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: DEFAULT_TIMEOUT,
        print: function () {
        }
    },
    rootElement: 'body',
    seleniumAddress: (process.env.SELENIUM_TEST_ADDR || null),
    suites: {
        'component': '../scenario/component/**/*.js'
    },
    onPrepare: function () {
        require('@babel/register')({
            presets: [
                '@babel/preset-env'
            ]
        });

        global.appHost = hostname;
        global.appPort = port;
        global.defaultExpectationTimeout = DEFAULT_EXPECTATION_TIMEOUT;
        global.defaultBrowserWidth = browserWidth;
        global.defaultBrowserHeight = browserHeight;

        var reporters = require('jasmine-reporters');
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
            consolidateAll: false,
            savePath: 'build/test-results/protractor'
        }));

        jasmine.getEnv().addReporter(new ScreenShotReporter({
            baseDirectory: 'build/screenshots'
        }));

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'build/reports/e2e/',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));

        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true
            },
            spec: {
                displayErrorMessages: true,
                displayStacktrace: 'pretty',
                displaySuccessful: true,
                displayFailed: true,
                displayPending: true,
                displayDuration: true
            }
        }));

        var failFast = require('jasmine-fail-fast');
        jasmine.getEnv().addReporter(failFast.init());

        del = require('del');
        del.sync('build/reports', {force: true});

        function addFolder(folderName) {
            var files = require('glob').sync('../dsl/' + folderName + '/**/*.js', {cwd: __dirname});
            files.forEach(require);
        }

        addFolder('component');

        return browser.waitForAngularEnabled(false)
            .then(function () {
                if (browserName === 'firefox') {
                    return browser.manage().window().setSize(global.defaultBrowserWidth, global.defaultBrowserHeight);
                }
            }).then(function () {
                browser.driver.get(`http://${appHost}:${appPort}/`);
            }).then(function () {
                return browser.manage().timeouts().setScriptTimeout(DEFAULT_TIMEOUT);
            });
    },
    params: {
        propertiesFn: function () {
            return {
                browser: browserName,
                os: platformName
            };
        }
    },
    jvmArgs: ['-Dwebdriver.gecko.driver=./node_modules/webdriver-manager/selenium/geckodriver-' + seleniumVersions.geckodriver],
    debug: true
};
