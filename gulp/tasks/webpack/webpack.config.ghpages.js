import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from '../../utils/paths';
import common from './webpack.config.common';

export default {
    entry: {
        main: ['./src/index']
    },
    mode: 'development',
    module: {
        rules: [
            {
                exclude: /(node_modules|tmp)/,
                loader: 'babel-loader',
                test: /\.js$/
            },
            ...common.rulesConfig
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/
                },
                default: false
            }
        }
    },
    output: {
        filename: '[name].js',
        path: paths.ghPagesDir,
        publicPath: ''
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.ejs',
            title: 'Email Inputs'
        })
    ]
};
