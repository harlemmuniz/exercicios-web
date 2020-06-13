const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // Escrever arquivo, onde passou o diretorio, o nome do arquivo, converteu pra produto de objeto pra JSON, e passou a call back que recebe como resposta apenas o erro
    console.log(err || 'Arquivo salvo!') // Se erro for falso, mostra 'Arquivo salvo'
})