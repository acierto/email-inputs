import webpack from 'webpack';
import paths from '../../utils/paths';
import common from './webpack.config.common';
import {version} from '../../../package.json';

const mode = 'production';

export default {
    entry: {
        index: ['./src/component/email-inputs/email-inputs.js']
    },
    mode,
    module: {
        rules: [
            {
                include: /node_modules/,
                loaders: ['strip-sourcemap-loader'],
                test: /\.js$/
            },
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                test: /\.js?$/
            },
            ...common.rulesConfig
        ]
    },
    optimization: {minimize: true},
    output: {
        filename: `email-inputs-${version}.js`,
        globalObject: 'window',
        libraryTarget: 'umd',
        path: paths.distDir,
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(mode)})
    ]
};
