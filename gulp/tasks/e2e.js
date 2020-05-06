import env from 'gulp-env';
import gulp from 'gulp';
import {runProtractor} from './protractor';

const seleniumHubPort = 4444;
const seleniumWinAddr = ''; // use existing selenium grid

const getSeleniumAddress = (platform) => ['windows', 'WIN10'].includes(platform) ? seleniumWinAddr : seleniumLinuxAddr;

const runLocalProtractor = (browser) => (cb) => runProtractor(cb, env.set({SELENIUM_TEST_BROWSER: browser}));

const runProtractorOnGrid = (browser, platformName, platform) => (cb) => runProtractor(cb, env.set({
    SELENIUM_TEST_ADDR: `http://${getSeleniumAddress(platformName)}:${seleniumHubPort}/wd/hub`,
    SELENIUM_TEST_BROWSER: browser,
    SELENIUM_TEST_PLATFORM: platform,
    SELENIUM_TEST_PLATFORM_NAME: platformName
}));

gulp.task('ie-grid', runProtractorOnGrid('internet explorer', 'windows', 'VISTA'));

gulp.task('local-chrome', runLocalProtractor('chrome'));
gulp.task('local-firefox', runLocalProtractor('firefox'));
