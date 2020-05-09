import gulp from 'gulp';

gulp.task('build-gh-pages', gulp.series('lint-all', 'add-linters', 'webpack-gh-pages'));

gulp.task('build-development', gulp.series('lint-all', 'add-linters', 'webpack-development'));

gulp.task('build-production', gulp.series('lint-all', 'webpack-production'));
