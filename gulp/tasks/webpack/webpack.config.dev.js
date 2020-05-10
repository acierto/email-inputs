import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from '../../utils/paths';
import serverPort from '../../utils/port';
import hostname from '../../utils/hostname';
import common from './webpack.config.common';

export default {
    devServer: {
        contentBase: '/devDist/',
        hot: true,
        port: serverPort,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    entry: {
        main: [
            `webpack-dev-server/client?http://${hostname}:${serverPort}`,
            'webpack/hot/only-dev-server',
            './src/playground/development/playground-development'
        ]
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ya?ml$/,
                use: 'raw-loader'
            },
            {
                exclude: /(node_modules|tmp)/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                test: /\.js$/
            },
            ...common.rulesConfig
        ]
    },
    node: {module: 'empty'},
    optimization: {
        noEmitOnErrors: true
    },
    output: {
        filename: '[name]-[hash].js',
        path: paths.devDistDir,
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/playground/development/playground-development.ejs',
            title: 'Email Inputs Playground Development'
        })
    ]
};
