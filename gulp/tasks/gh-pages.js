import gulp from 'gulp';
import ghPages from 'gh-pages';
import paths from '../utils/paths';

gulp.task('gh-publish', (cb) => ghPages.publish(`${paths.ghPagesDir}`, {depth: 0, dotfiles: true}, cb));

gulp.task('gh-pages', gulp.series('webpack-gh-pages', 'gh-publish'));
