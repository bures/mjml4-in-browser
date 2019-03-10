const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        "mjml": ['./index'],
    },
    output: {
        library: 'mjml',
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        alias: {
            'mjml-core/lib': path.resolve(__dirname, './mjml/packages/mjml-core/src'),
            'mjml-accordion': path.resolve(__dirname, './mjml/packages/mjml-accordion/src'),
            'mjml-body': path.resolve(__dirname, './mjml/packages/mjml-body/src'),
            'mjml-button': path.resolve(__dirname, './mjml/packages/mjml-button/src'),
            'mjml-carousel': path.resolve(__dirname, './mjml/packages/mjml-carousel/src'),
            'mjml-cli': path.resolve(__dirname, './mjml/packages/mjml-cli/src'),
            'mjml-column': path.resolve(__dirname, './mjml/packages/mjml-column/src'),
            'mjml-core': path.resolve(__dirname, './mjml/packages/mjml-core/src'),
            'mjml-divider': path.resolve(__dirname, './mjml/packages/mjml-divider/src'),
            'mjml-group': path.resolve(__dirname, './mjml/packages/mjml-group/src'),
            'mjml-head': path.resolve(__dirname, './mjml/packages/mjml-head/src'),
            'mjml-head-attributes': path.resolve(__dirname, './mjml/packages/mjml-head-attributes/src'),
            'mjml-head-breakpoint': path.resolve(__dirname, './mjml/packages/mjml-head-breakpoint/src'),
            'mjml-head-font': path.resolve(__dirname, './mjml/packages/mjml-head-font/src'),
            'mjml-head-preview': path.resolve(__dirname, './mjml/packages/mjml-head-preview/src'),
            'mjml-head-style': path.resolve(__dirname, './mjml/packages/mjml-head-style/src'),
            'mjml-head-title': path.resolve(__dirname, './mjml/packages/mjml-head-title/src'),
            'mjml-hero': path.resolve(__dirname, './mjml/packages/mjml-hero/src'),
            'mjml-image': path.resolve(__dirname, './mjml/packages/mjml-image/src'),
            'mjml-migrate': path.resolve(__dirname, './mjml/packages/mjml-migrate/src/migrate.js'),
            'mjml-navbar': path.resolve(__dirname, './mjml/packages/mjml-navbar/src'),
            'mjml-raw': path.resolve(__dirname, './mjml/packages/mjml-raw/src'),
            'mjml-section': path.resolve(__dirname, './mjml/packages/mjml-section/src'),
            'mjml-social': path.resolve(__dirname, './mjml/packages/mjml-social/src'),
            'mjml-spacer': path.resolve(__dirname, './mjml/packages/mjml-spacer/src'),
            'mjml-table': path.resolve(__dirname, './mjml/packages/mjml-table/src'),
            'mjml-text': path.resolve(__dirname, './mjml/packages/mjml-text/src'),
            'mjml-validator': path.resolve(__dirname, './mjml/packages/mjml-validator/src'),
            'mjml-wrapper': path.resolve(__dirname, './mjml/packages/mjml-wrapper/src'),
            'mjml-parser-xml': path.resolve(__dirname, './mjml/packages/mjml-parser-xml/src'),
            'fs': path.resolve(__dirname, 'mocks/fs'),
            'uglify-js': path.resolve(__dirname, 'mocks/uglify-js'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: {
                                        "chrome": "58",
                                        "edge": "15",
                                        "firefox": "55",
                                        "ios": "10"
                                    }
                                }]
                            ],
                            plugins: [
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                                ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                                "@babel/plugin-proposal-function-bind",
                                "@babel/plugin-proposal-export-default-from"
                            ],
                            babelrc: false
                        }
                    }
                ]
            }
		]
    },
    plugins: [
    ],
    watchOptions: {
        ignored: 'node_modules/',
        poll: 2000
    }
};
