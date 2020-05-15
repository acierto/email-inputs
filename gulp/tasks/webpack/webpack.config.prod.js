import webpack from 'webpack';
import paths from '../../utils/paths';
import common from './webpack.config.common';

const mode = 'production';

export default {
    entry: {
        index: ['./src/component/emails-input/emails-input-component.ts']
    },
    mode,
    module: {
        rules: [
            {
                include: /node_modules/,
                loaders: ['strip-sourcemap-loader'],
                test: /\.ts/
            },
            ...common.rulesConfig
        ]
    },
    optimization: {minimize: true},
    output: {
        filename: `emails-input.js`,
        globalObject: 'window',
        libraryTarget: 'umd',
        path: paths.distDir,
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(mode)}),
        ...common.plugins
    ],
    resolve: common.resolve
};
