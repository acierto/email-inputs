import gulp from 'gulp';
import {protractor, webdriver_update} from 'gulp-protractor';
import env from 'gulp-env';
import del from 'del';
import './lint';
import {argv} from 'yargs';
import paths from '../utils/paths';
import seleniumVersion from './selenium/selenium-versions.json';

gulp.task('webdriver-cleanup', (cb) => {
    del.sync(`${paths.nodeModulesDir}/webdriver-manager/selenium`, {force: true});
    cb();
});

gulp.task('webdriver-update', gulp.series('webdriver-cleanup', (done) => {
    webdriver_update({
        browsers: ['chrome', 'gecko'],
        webdriverManagerArgs: [
            '--versions.standalone',
            seleniumVersion.selenium,
            '--versions.gecko',
            `v${seleniumVersion.geckodriver}`,
            '--versions.chrome',
            seleniumVersion.chromedriver
        ]
    }, done);
}));

gulp.task('webdriver-cleanup', (cb) => {
    del.sync(`${paths.nodeModulesDir}/webdriver-manager/selenium`, {force: true});
    cb();
});

export const runProtractor = (cb, envs) => {
    let protractorArgs = [];
    if (argv.suite) {
        protractorArgs = protractorArgs.concat(['--suite', argv.suite]);
    }
    console.log('starting protractor with arguments', protractorArgs);
    return gulp
        .src([`${paths.testsDir}/e2e/*.js`])
        .pipe(envs)
        .pipe(protractor({
            configFile: `${paths.testsDir}/e2e/config/protractor.conf.js`,
            args: protractorArgs
        }))
        .on('end', () => {
            cb();
            process.exit(0);
        })
        .on('error', (error) => {
            cb();
            throw error;
        });
};

gulp.task('protractor', (cb) => runProtractor(cb, env.set({})));

gulp.task('e2e', gulp.series('lint-tests', 'webdriver-update', 'dev-server', 'protractor'));
