const saudacao = 'Opa' // Contexto Léxico 1

function exec() {
    const saudacao = 'Falaaa' // Contexto Léxico 2
    return saudacao
}

// Objetos são grupos alinhas de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)