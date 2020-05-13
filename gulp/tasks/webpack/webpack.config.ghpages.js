import HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from '../../utils/paths';
import common from './webpack.config.common';

export default {
    entry: {
        'playground-demo': ['./src/playground/demo/playground-demo']
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
        noEmitOnErrors: true
    },
    output: {
        filename: '[name].js',
        path: paths.ghPagesDir,
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/playground/demo/playground-demo.ejs',
            title: 'Emails Input Playground Demo'
        })
    ],
    resolve: common.resolve
};
