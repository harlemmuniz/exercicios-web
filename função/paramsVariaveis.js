function soma() { // Não recebeu nenhum parâmetro
    let soma = 0
    for (i in arguments) { // Vai pegar o índice i em cada elemento do array arguments
        soma += arguments[i] // Soma recebe uma atribuição aditiva (elemento), a uma array interna, onde todos os argumentos serão passados
    }
    return soma
}

console.log(soma()) // Somou o 0 que foi atribuido em let com nada
console.log(soma(1)) // Valor atribuido 1 
console.log(soma(1.1, 2.2, 3.3)) // Somou todos os valores atríbuidos
console.log(soma(1.1, 2.2, "Teste")) // Somou os valores que são números (com uma pequena imprecisão) e concatenou com Teste
console.log(soma('a', 'b', 'c')) // Contatenou o número passado inicialmente (0) com a+b+c