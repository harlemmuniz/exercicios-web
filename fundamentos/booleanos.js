let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...') // que resolvem para verdadeiro
console.log(!!3) // números
console.log(!!-1) // números negativos
console.log(!!' ') // espaço em branco
console.log(!!'texto') // texto
console.log(!![]) // array
console.log(!!{}) // literal
console.log(!!Infinity) // infinito
console.log(!!(isAtivo = true)) // o resultado da atribuição é resolvido para verdadeiro

console.log('Os falsos...')
console.log(!!0) // 0
console.log(!!'') // sem nada preenchido nas aspas simples
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // Retorna true se tiver pelo menos um valor verdadeiro (' ')
console.log(('' || null || 0 || 'epa')) // Retorna pel menos o primeiro valor verdadeiro

let nome = ''

console.log(nome || 'Desconhecido') // Retorna o segundo valor se o primeiro for false

nome = 'Lucas'

console.log(nome || 'Desconhecido') // Retorna o primeiro valor se ele for true