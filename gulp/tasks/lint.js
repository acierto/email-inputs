import gulp from 'gulp';
import eslint from 'gulp-eslint';
import paths from '../utils/paths';

const lintStream = (stream) => stream
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

gulp.task('lint-e2e-tests', () => lintStream(gulp.src(`${paths.testsDir}/e2e/**/*.js`)));

gulp.task('watch-lint', () => {
    const watch = (glob, taskName) => gulp.watch(glob, gulp.parallel(taskName));
    watch(`${paths.testsDir}/e2e/**/*.js`, 'lint-e2e-tests');
});
