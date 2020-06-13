let vetorInteiro = [1, 2, 3, 4]
let vetorString = ["Um", "Dois", "Três", "Quatro"]
let vetorDouble = [0.1, 0.2, 0.3, 0.4]

function concatenar (...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}
console.log(concatenar(vetorInteiro, vetorString, vetorDouble))
console.log(concatenar(vetorString,vetorDouble))