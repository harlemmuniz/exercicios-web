function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // Se o mínimo for maior que o máximo, inverte as variaveis min e max
    const valor = Math.random() * (max - min) + min // Criou uma função valor e atribuiu uma função Math que da um intervalo entre max e min
    return Math.floor(valor) // Retorna o número inteiro arredondando pra baixo (ceil arredonda pra cima)
}

console.log(rand([50, 40])) // Array atribuiu o máximo 50 e minimo 40
console.log(rand([992])) // Como não tem uma virgula, assumiu que o 992 é o primeiro número e logo o minimo
console.log(rand([, 10])) // Como tem a virgula, assumiu que é o segundo número e logo o máximo
console.log(rand([])) // Como não atribuiu valor, mostra qualquer um entre 0 e 1000
console.log(rand()) // Como não é uma array, não está puxando da estrutura, e sim de algum objeto não criado (null ou undefined)