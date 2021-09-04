import merge from 'webpack-merge';
import common from './webpack.common';

import Webpack from 'webpack';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

import MiniCSSExtractPlugin from 'mini-css-extract-plugin';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `production`,

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCSSExtractPlugin.loader, `css-loader`, `sass-loader`]
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, `../dist`),
        filename: `static/js/[name].[contenthash:8].js`,
        chunkFilename: `static/js/[name].[contenthash:8].chunk.js`
    },

    optimization: {
        splitChunks: {
            chunks: `all`,
            name: false
        },

        runtimeChunk: {
            name: (entrypoint: Webpack.RuntimeModule): string => `runtime-${entrypoint.name}`
        },

        minimizer: [
            `...`,
            new CSSMinimizerPlugin({
                minimizerOptions: {
                    preset: [`default`, { discardComments: { removeAll: true } }]
                }
            })
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, `../public/index.html`),
            favicon: `./public/assets/img/logos/favicon.png`,

            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new WebpackManifestPlugin({}),
        new MiniCSSExtractPlugin()
    ]
});

export default config;
