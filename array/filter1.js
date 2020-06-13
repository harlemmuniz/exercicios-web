const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

console.log(produtos.filter(function(p) {
    return p.preco > 500 & p.fragil == true
}))

const acimaQuinhentos = produtos => produtos.preco >= 500
const apenasFragil = produtos => produtos.fragil //== true, não precisa

resultado = produtos.filter(acimaQuinhentos).filter(apenasFragil)
console.log(resultado)