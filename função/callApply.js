function getPreco(imposto = 0, moeda = 'R$') { // Criou função preço e atribuiu valores ao escopo global
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}` // Adicionar this apenas parametros fora do escopo global
}

const produto = {
    nome: 'Notebook', // Parametros fora do escopo global, sendo acessados pela função através do this
    preco: 4589, // Atribuiu parâmetro para preço no escopo produto
    desc: 0.15, // Atribuiu parâmetro para desconto no escopo produto
    getPreco // Criou atributo getPreco no escopo produto e associou ao getPreco da função
}

global.preco = 20 // Atribuiu parâmetros para preço no escopo global
global.desc = 0.1 // Atribuiu parâmetros para desconto no escopo global
console.log(getPreco()) // Imprime a funcao getPreco preço com os valores inseridos no escopo global
console.log(produto.getPreco()) // Imprime a funcao getPreco preço com os valores inseridos no escopo produto

const carro = { preco: 49990, desc: 0.20 } // Criou um outro objeto chamado carro, e atribuiu valores preco e desconto, o getPreco do objeto produto já está associado à função
console.log(getPreco.call(carro)) // Imprime o preço do carro utilizando os valores padrões através do call
console.log(getPreco.apply(carro)) // Imprime o preço do carro utilizando os valores padrões através do apply

console.log(getPreco.call(carro, 0.17, '$')) // Imprime o preço do carro utilizando atribuindo outros valores ao invés dos padrões através do call
console.log(getPreco.apply(carro, [0.17, '$'])) // Imprime o preço do carro utilizando atribuindo outros valores ao invés dos padrões através do call