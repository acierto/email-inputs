import fs from 'fs';
import gulp from 'gulp';
import jest from 'gulp-jest-acierto';
import env from 'gulp-env';
import paths from '../utils/paths';
import packageJson from '../../package.json';

const capitalize = (s) => s.replace(/\b[a-z]/g, match => match.toUpperCase());

gulp.task('run-jest', () => {
    env.set({BABEL_ENV: 'test'});
    return gulp.src('.').pipe(jest(packageJson.jest));
});

const createMessage = (propName, total) =>
    `${capitalize(propName)} coverage is ${total[propName].pct} but threshold is ${global[propName]}`;

gulp.task('jest', gulp.series('run-jest', () => new Promise((resolve, reject) =>
    fs.readFile(`${paths.projectDir}/build/reports/coverage/coverage-summary.json`, (err, data) => {
        if (err) {
            reject(err);
        }
        const total = JSON.parse(data).total;
        const {coverageThreshold} = packageJson.jest;
        if (coverageThreshold) {
            const global = coverageThreshold.global;

            const checkThreshold = (propName) => {
                if (total[propName].pct < global[propName]) {
                    reject(createMessage(propName, total));
                }
            };

            ['lines', 'statements', 'functions', 'branches'].forEach((propName) => checkThreshold(propName));
        }
        resolve();
    })
)));
