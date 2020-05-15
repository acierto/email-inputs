import env from 'gulp-env';
import gulp from 'gulp';
import {runProtractor} from './protractor';

const seleniumHubPort = 4444;
const seleniumLinuxAddr = ''; // use existing selenium grid for Linux slaves
const seleniumWinAddr = ''; // use existing selenium grid for Windows slaves

const getSeleniumAddress = (platform) => ['windows', 'WIN10'].indexOf(platform) !== -1 ? seleniumWinAddr : seleniumLinuxAddr;

const runLocalProtractor = (browser) => (cb) => runProtractor(cb, env.set({SELENIUM_TEST_BROWSER: browser}));

const runProtractorOnGrid = (browser, platformName, platform) => (cb) => runProtractor(cb, env.set({
    SELENIUM_TEST_ADDR: `http://${getSeleniumAddress(platformName)}:${seleniumHubPort}/wd/hub`,
    SELENIUM_TEST_BROWSER: browser,
    SELENIUM_TEST_PLATFORM: platform,
    SELENIUM_TEST_PLATFORM_NAME: platformName
}));

gulp.task('ie-grid', runProtractorOnGrid('internet explorer', 'windows', 'VISTA'));
gulp.task('win-chrome-grid', runProtractorOnGrid('chrome', 'windows', 'VISTA'));
gulp.task('win-firefox-grid', runProtractorOnGrid('firefox', 'windows', 'VISTA'));

gulp.task('linux-chrome-grid', runProtractorOnGrid('chrome', 'linux', 'linux'));
gulp.task('linux-firefox-grid', runProtractorOnGrid('firefox', 'linux', 'linux'));

gulp.task('local-chrome', runLocalProtractor('chrome'));
gulp.task('local-firefox', runLocalProtractor('firefox'));
