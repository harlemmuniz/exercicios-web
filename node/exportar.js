console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null // alterar objeto não funciona com exports apenas
console.log(module.exports)

exports = { // alterar objeto não funciona com exports apenas
    nome: 'Teste'
}
console.log(module.exports)

module.exports = { publico: true} // pra criar um novo objeto tem que usar module.exports
