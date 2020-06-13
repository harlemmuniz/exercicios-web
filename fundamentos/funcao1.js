// Função sem retorno
function imprimirSoma(a, b) { // Definiu os parâmetros a e b
    console.log(a + b) // Puxou os parâmetros e realiza a função soma, se for string vai concatenar e se for number vai somar
}

imprimirSoma(2, 3) // Atribuiu 2 à a e 3 à b aos parâmetrose somou
imprimirSoma(2) // Parâmetro b não atribuído (undefined), logo Not a Number
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // Atribuiu 2 à a e 3 à b e somou, o restante não eram inputs e foram ignorados

// Funcao com retorno
function soma(a, b = 1) { // Chamada da função, parâmetros a e por padrão a variável b = 0, o valor não foi passado na chamada da função
    return a + b // Retornando o valor em resposta à chamada da função
}

console.log(soma(2, 3)) // Atribuiu valor apenas para a, e b
console.log(soma(2)) // Atribuiu valor para a, mas realizou a soma pois b tinha um valor padrão caso não fosse atribuído
console.log() // Tentou somar um undefined (a) com 1 (b)