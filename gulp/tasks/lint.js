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

gulp.task('lint', gulp.series('add-linters', () => lesshintSteam(gulp.src(`${paths.srcDir}/**/*.less`))));

gulp.task('watch-lint', () => {
    const watch = (glob, taskName) => gulp.watch(glob, gulp.parallel(taskName));
    watch(`${paths.srcDir}/**/*.less`, 'lint');
});
