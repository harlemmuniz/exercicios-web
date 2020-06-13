// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) { // Constante 'imprimirSoma' recebe função sem nome criada e parâmetros atribuidos
    console.log(a + b) // Chama a função realizando a soma deles
}

imprimirSoma(2, 3) // Atribuí valores aos parâmetros da constante

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { // Arrow substitui o function neste caso, para reduzir
    return a + b // Retorna a soma dos parâmetros
}
console.log(soma(2, 3)) // Mostra o resultado retornado, atribuindo valores aos parâmetros da const 'soma'

// Retorno implícito
const subtracao = (a, b) => a - b // Função que tenha apenas uma sentença de código
console.log(subtracao(2, 3)) // Retorna no console o resultado da operação atribuindo valores para os parâmetros da const 'subtração'

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')