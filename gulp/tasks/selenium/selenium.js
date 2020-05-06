import gulp from 'gulp';
import selenium from 'selenium-standalone';
import seleniumVersion from './selenium-versions.json';

gulp.task('selenium-install', (done) => {
    selenium.install({
        drivers: {
            chrome: {version: seleniumVersion.chromedriver},
            firefox: {version: seleniumVersion.geckodriver},
            ie: {version: seleniumVersion.iedriver}
        },
        logger: console.log,
        version: seleniumVersion.selenium
    }, done);
});
