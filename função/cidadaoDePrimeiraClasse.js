// Função em JS é First-Class Objetct (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em uma array
const array = [function (a, b) { return a + b }, fun1, fun2] // posição 0 é uma função sendo declarada, e posição 1 e 2 são funções mas que foram declaradas anteriormente
console.log(array[0](2, 3)) // Mostra resultado da função array na posição 0, atribuindo 2 e 3 como parâmetros

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar()) // falar(), os parentêses chamam a função

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // atribuiu 2 e 3 pra primeira função (a e b) e 4 pra função que retornou c
const cincoMais = soma(2,3) // armazenou o resultado da soma em uma variável 
cincoMais(4) // atribuiu um parâmetro pra variável e somou com o resultado da anterior