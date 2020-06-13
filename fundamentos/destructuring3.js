function rand({ min = 0, max = 1000} ={}) {  // Criada uma função chamada rand que retorna um valor aleatório dentro de um operador desestructuring (com a intenção de retirar para fora desta função)
    const valor = Math.random() * (max - min) + min // Criou uma função valor e atribuiu uma função Math que da um intervalo entre max e min
    return Math.floor(valor) // Retorna o número inteiro arredondando pra baixo (ceil arredonda pra cima)
} 

const obj = { max: 50, min: 40 } // Criou um objeto e definiu o max e o min
console.log(rand(obj)) // Mostra qualquer valor entre 50 e 40 da linha acima
console.log(rand({ min: 955})) // Mostra valor entre 955 e 1000 (definido na primeira linha e nesta pelo operador desestructuring)
console.log(rand({})) // Mostra qualquer valor entre 0 e 1000 (definido na primeira linha e nesta pelo operador desestructuring)
console.log(rand()) // Não mostra nada pois não tem o o operador destructuring e nem o objeto definido