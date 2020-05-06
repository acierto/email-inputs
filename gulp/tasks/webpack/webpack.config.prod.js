import webpack from 'webpack';
import paths from '../../utils/paths';
import common from './webpack.config.common';

const mode = 'production';

export default {
    entry: {
        index: ['./app/component']
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
        chunkFilename: '[name].bundle.js',
        filename: '[name].js',
        library: 'email-inputs',
        libraryTarget: 'commonjs2',
        path: paths.distDir,
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(mode)}),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};
