const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
const { appHtml } = require('./app')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}
// qualquer mudança realizada nos documentos, atualizar tudo
function monitorarArquivos(cb) {
    // watch monitora o que foi alterado, e ao invés de atualizar tudo, atualiza só onde houve mudança
    watch('src/**/*.html', () => gulp.series('appHtml')())
    watch('src/**/*.scss', () => gulp.series('appCss')())
    watch('src/**/*.js', () => gulp.series('appJs')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appImg')())

    return cb()
}

module.exports = {
    servidor,
    monitorarArquivos
}