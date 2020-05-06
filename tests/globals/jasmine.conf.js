/* eslint-disable */
beforeEach(() => {
    jasmine.addMatchers(require('jasmine-object-matchers-jest')['2.0']);
});

require('jasmine-collection-matchers');

const path = require('path');
const reporters = require('jasmine-reporters');
const reporter = new reporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: path.resolve(__dirname, '..', '..', 'build', 'test-results', 'jest'),
});
jasmine.getEnv().addReporter(reporter);

require('console-error-throws-error');
/* eslint-enable */
