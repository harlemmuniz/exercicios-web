const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 // resto, se for par = 0, impar = 1
const exp = a ** b // potencia a^b
let exp2 = 2
exp2 **= 3 // valor armazenado na base exp2 elevado à 3
let exp3 = 3
exp3 **= -3 // valor armazenado na base exp2 elevado à -3

console.log(soma, subtracao, multiplicacao, divisao, modulo, exp, exp2, exp3.toFixed(2))
