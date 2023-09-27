const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/ns-crypto.ts',
    output: {
        path: path.resolve(__dirname, 'dist/cjs'),
        filename: 'ns-crypto.js',
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-typescript'],
                        ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
                    ],
                },
            },
        ],
    },
    plugins: [
        new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        }),
    ],
};