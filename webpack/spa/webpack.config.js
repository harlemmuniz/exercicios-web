// modoDev é diferente de produto
// se estiver 'production' no principal.js, ativa o plugin cross-env

const modoDev = process.env.NODE_ENV !== 'production' // setando variavel no NODE "build"
    // modo development: $ npm start
    // modo production: $ npm run build

const webpack = require('webpack')

// todos os plugins no JSON temos que importar
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //               $ npm start  : $ npm run build
    mode: modoDev ? 'development' : 'production', // existe modo de desenvolvimento e produção
    entry: './src/principal.js', // arquivo de entrada do projeto
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9001
    },
    optimization: {
        minimizer: [
            new optimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'estilo.css',
        }),
        new TerserPlugin({ // substituiu o Uglify porque o ECMA6 não suporta Uglify
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtractPlugin.loader,
                //'style-loader', // Adiciona CSS à DOM injetando a tag <style>
                'css-loader', // Interpreta @import, url()...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    esModule: false
                }
            }]
        }]
    }
}