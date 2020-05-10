import del from 'del';
import gulp from 'gulp';
import ghPages from 'gh-pages';
import paths from '../utils/paths';

gulp.task('gh-clean', () => del(paths.ghPagesDir, {force: true}));

gulp.task('gh-copy-assets', () =>
    gulp.src(`${paths.distDir}/**/*.js`)
        .pipe(gulp.dest(`${paths.ghPagesDir}`)));

gulp.task('gh-publish', (cb) => ghPages.publish(`${paths.ghPagesDir}`, {depth: 0, dotfiles: true}, cb));

gulp.task('gh-pages', gulp.series('gh-clean', 'gh-copy-assets', 'webpack-gh-pages', 'gh-publish'));
