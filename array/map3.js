Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0 ; i < this.length ; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }'
]

const paraObjeto = json => JSON.parse(json) // Converteu o texto (atributos) para objeto (recebe um json e converte para JSON.parse)
const apenasPreco = produto => produto.preco // função apenas preço recebe a função produto que recebe apenas produto.preco
const apenasNome = produto => produto.nome

// Retorna um array com apenas preços

resultado = carrinho.map2(paraObjeto).map2(apenasPreco) // Resultado converte os valores da array de carrinho para objeto e mostra apenas o preço
console.log(resultado)