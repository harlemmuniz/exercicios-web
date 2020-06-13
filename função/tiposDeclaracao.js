console.log(soma(3, 4))

// function declaration - Ness método, o javascript já leu a função e executa
function soma(x, y) {
    return x + y
}

// function expression - Não pode chamar a função antes de  estar declarada
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression - Não pode chamar a função antes de  estar declarada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))