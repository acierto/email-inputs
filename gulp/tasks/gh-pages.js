import del from 'del';
import gulp from 'gulp';
import ghPages from 'gh-pages';
import './clean';
import paths from '../utils/paths';

gulp.task('gh-clean', () => del(paths.ghPagesDir, {force: true}));

gulp.task('gh-copy-assets', (cb) => {
    gulp.src(`${paths.distDir}/**/*.js`)
        .pipe(gulp.dest(`${paths.ghPagesDir}`));

    gulp.src(`${paths.srcDir}/playground/vanilla-demo/**`)
        .pipe(gulp.dest(`${paths.ghPagesDir}`));

    gulp.src(`${paths.srcDir}/assets/fonts/**`)
        .pipe(gulp.dest(`${paths.ghPagesDir}`));
    cb();
});

gulp.task('gh-publish', (cb) => ghPages.publish(`${paths.ghPagesDir}`, {depth: 0, dotfiles: true}, cb));

gulp.task('gh-pages', gulp.series('dist-clean',
    'gh-clean', 'webpack-production', 'gh-copy-assets', 'webpack-gh-pages', 'gh-publish'));
