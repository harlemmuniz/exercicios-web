const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`) // Resolve a função apenas dentro da função $

const up = texto => texto.toUpperCase() // Passar o texto para maiúsculo
console.log(`Ei... ${up('cuidado')}!`) // Passa o texto dentro da operação $ para maiúsculo