let dobro = function(a) {
    return 2 * a
}

dobro = (a) => { // Com o objeto de reduzir, a seta (função arrow) substituiu a palavra function
    return 2 * a // Se colocar bloco (chaves) o return é obrigatório
}

dobro = a => 2 * a // Retira  os parêntes do a caso seja apenas 1 parâmetro, o corpo da função e com isso o retorno já é chamado (para funções de apenas 1 linha, realiza apenas 1 trabalho)
console.log(dobro(Math.PI)) // Atribuiu o valor PI (precisa usar o Math, que é usado pra representar PI e outras simbologias matematicas) à variável a e multiplicou por 2

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // () função com 1 ou mais parâmetros
ola = _ => 'Olá' // _ função com 1 único parâmetro
console.log(ola())