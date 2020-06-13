// Estratégia 1 para gerar valor padrão

function soma1(a, b, c) {
    a = a || 1 // Estratégia 1: assume o valor de a ou 1, se o valor de a for falso (não for número), assume valor padrão 1
    b = b || 1 // Estratégia 1: assume o valor de b ou 1, se o valor de b for falso (não for número), assume valor padrão 1
    c = c || 1 // Estratégia 1: assume o valor de c ou 1, se o valor de c for falso (não for número), assume valor padrão 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // O valor 0 é falso, portanto assumou o valor padrão 1 para todos na última soma

// Estratégias 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Estrategia 2: Se o valor de a for extritamente diferente(!==) de undefined, foi usado um operador ternário(?), ele assume como a, se não for, como valor padrão 1
    b = 1 in arguments ? b : 1 // Estrategia 3: Acessa o índice 1(b) em arguments, se existir pega o valor de b, se não, valor padrão 1
    c = isNaN(c) ? 1 : c // Estrategia 4: Se o c não for um número, assume o valor de 1, se for, assume o valor padrão de c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Estrategia de valor padrão ES2015
function soma3(a = 1, b = 1, c = 1) { // Se não for passado os valores futuramente, a função recebe esses valores padrões
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))