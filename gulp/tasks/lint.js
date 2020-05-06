import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import paths from '../utils/paths';
import lesshint from 'gulp-lesshint';

gulp.task('add-linters', () =>
    gulp
        .src('lint/custom-linters/**')
        .pipe(babel({
            plugins: [
                'add-module-exports'
            ],
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/linters')));

const lesshintSteam = (stream) => stream
    .pipe(lesshint({maxWarnings: 0}))
    .pipe(lesshint.reporter())
    .pipe(lesshint.failOnError());

const lintStream = (stream) => stream
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

gulp.task('lint-less', gulp.series('add-linters', () => lesshintSteam(gulp.src(`${paths.srcDir}/**/*.less`))));

gulp.task('lint', () => lintStream(gulp.src(`${paths.srcDir}/**/*.js`)));

gulp.task('lint-tests', () => lintStream(gulp.src(`${paths.testsDir}/**/*.js`)));

gulp.task('lint-all', gulp.series('lint-less', 'lint', 'lint-tests'));

gulp.task('watch-lint', () => {
    const watch = (glob, taskName) => gulp.watch(glob, gulp.parallel(taskName)).on('error', (err) => console.log(err));

    watch(`${paths.srcDir}/**/*.less`, 'lint-less');
    watch(`${paths.srcDir}/**/*.js`, 'lint');
    watch(`${paths.testsDir}/**/*.js`, 'lint-tests');
});
