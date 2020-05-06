import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevConfig from './webpack/webpack.config.dev';

import serverPort from '../utils/port';

gulp.task('dev-server', () => {
    return new Promise((resolve) => {
        const webpackInstance = webpack(webpackDevConfig);
        webpackInstance.hooks.done.tap('Dev Server', () => resolve());
        const server = new WebpackDevServer(webpackInstance, {
            disableHostCheck: true,
            historyApiFallback: true,
            hot: true,
            lazy: false,
            noInfo: false,
            publicPath: webpackDevConfig.output.publicPath,
            quiet: false,
            stats: {colors: true}
        });
        server.listen(serverPort);
    });
});
