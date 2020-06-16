const { series, parallel } = require('gulp')
const gulp = require('gulp')

// importação dos arquivos e suas funções
const { appHtml, appCss, appJs, appImg } = require('./gulpTasks/app')
const { depsCss, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/server')

// startando a aplicação
// após realizar a construção da aplicação(em serie) e das dependencias(em serie) em paralelo
// startou em serie o servidor e depois monitorarArquivos
module.exports.default = series(
    parallel(
        series(appHtml, appCss, appJs, appImg),
        series(depsCss, depsFonts)
    ),
    servidor,
    monitorarArquivos
)