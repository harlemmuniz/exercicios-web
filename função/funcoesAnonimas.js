const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { // Recebeu os parâmetros a e b e um terceiro parâmetro que é uma operação padrão (caso não seja passado nada) como soma, que vai trabalhar em cima dos dois primeiros
    console.log(operacao(a, b)) // Imprime a funcão operação que foi definida (soma) do parâmetros a e b
}

imprimirResultado(3, 4) // Atribuiu os valores 3 e 4 para x e y e como não passou o terceiro parâmetro, já assumiu "operacao = soma"
imprimirResultado(3, 4, soma) // Atribuiu os valores 3 e 4 e um terceiro parâmetro explicitamente soma (não era necessário pois já havia sido predefinido)
imprimirResultado(3, 4, function(x, y){ // Atribuiu os valores 3 e 4 e um terceiro paramêtro que é uma função que vai trabalhar em cima dos dois (alterando totalmente a já predefinica soma)
    return x - y // Agora retorna uma subtração dos dois valores
})
imprimirResultado(3, 4, (x, y) => x * y) // Atribuiu os valores 3 e 4 e um terceiro paramêtro que é uma função arrow que vai trabalhar em cima dos dois (alterando totalmente a já predefinica soma), onde agora retorna uma multiplicação dos dois valores

const pessoa = {
    falar: function () { // Criou uma função onde não foi predefinido o que faz
        console.log('Opa') // Atribuiu definição como uma string para a função falar
    }
}

pessoa.falar() // Mostra a função falar para o objeto pessoa