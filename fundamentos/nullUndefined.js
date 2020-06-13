let valor // não inicializada
console.log(valor)

valor = null // inicializada mas há ausencia de valor
console.log(valor)
// console.log(valor.toString()) // Erro, pois o valor esta null ou undefined!

const produto = {} // Nenhuma atribuição para o produto
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50 // Preço atribuido ao produto
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco) // Retorna falso pois é invalido (undefined)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco) // Retorna false porque é invalido (null)
console.log(produto)