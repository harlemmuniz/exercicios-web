const gulp = require('gulp')
const { series, parallel, src } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt') // vai copiar todos os arquivos dentro da pasta pastaA, e todos os arquivos txt dentro de uma subpasta (teste)
        .pipe(gulp.dest('pastaB')) // pasta de destino
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)