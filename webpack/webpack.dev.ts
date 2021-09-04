import merge from 'webpack-merge';
import common from './webpack.common';

import HTMLWebpackPlugin from 'html-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `development`,
    devtool: `source-map`,

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    `style-loader`,
                    `css-loader`,
                    `sass-loader`
                ]
            },
            {
                test: /\.css$/,
                use: [`style-loader`, `css-loader`]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, `../public/index.html`),
            favicon: `./public/assets/img/logos/favicon.png`
        })
    ],

    output: {
        path: path.resolve(__dirname, `../dist`),
        filename: `bundle.min.js`
    },

    devServer: {
        devMiddleware: {
            publicPath: `http://localhost:3000`
        },
        static: {
            directory: path.resolve(__dirname, `../public`)
        },
        historyApiFallback: true,
        port: 3000,
        hot: `only`
    }
});

export default config;
