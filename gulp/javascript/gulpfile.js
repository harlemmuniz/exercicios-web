const gulp = require('gulp')
const { series, parallel } = require('gulp')

const concat = require('gulp-concat') // juntar tudo em apenas um arquivo
const uglify = require('gulp-uglify') // minificar o código (tirar espaços, colocar em uma linha, etc)
const babel = require('gulp-babel') // compilar da versão mais atual pra uma aceitavel em todos os browsers

function transformacaoJS(cb) {
    return gulp.src('src/**/*js')
        .pipe(babel({ // transformar, babel
            comments: false, // sem levar os comentarios
            presets: ["env"], // ultima versao
        }))
        .pipe(uglify()) // transformar, uglify
        .on('error', err => console.log(err)) // tratar erro
        .pipe(concat('codigoCalculadora.min.js')) // tranformar, concat em um arquivo
        .pipe(gulp.dest('build')) // destino
}

function fim(cb) {
    console.log('Fim!')
    return cb()
}

exports.default = series(transformacaoJS, fim)