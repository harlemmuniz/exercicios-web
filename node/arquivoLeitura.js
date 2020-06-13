const fs = require('fs') // referencia do file system, primeiramente procura na parte nativa

const caminho = __dirname + '/arquivo.json' // __dirname representa o diretorio (pasta) no qual o arquivo se encontra, + '/arquivo.json' é o arquivo em especifico

// sincrono... não recomendado, pois se for arquivo muito grande pode travar o event loop
const conteudo = fs.readFileSync(caminho, 'utf-8') // readFileSyc, ler o arquivo de forma sincrona, definido o caminho(caminho) e o enconding(utf-8)
console.log(conteudo)

// assincrona... passando uma callback pra ser chamada quando o arquivo for carregado
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // passou o caminho, o encode, e uma callback pra quando ler o arquivo, fazer o tratamento em cima dos arquivos, onde primeiro elemento é o erro e conteudo
    const config = JSON.parse(conteudo) // criou arquivo config que recebe conteduo, JSON.parse para passar de JSON para objeto, pois JSON é String
    console.log( `${config.db.host}: ${config.db.port}`) // Esse método não abre string, e só objeto, por isso a conversão anterior
})

// Ler o arquivo já convertendo em objeto
const config = require('./arquivo.json') // Tem que especificar o .json, pois por padrão o JS procura um arquivo de extensão JS, e já devolveu arquivo em objeto
console.log(config.db) // Esse foi carregado antes pois é carregado de forma sincrona, por isso foi antes que o da linha 12

// Ler um diretório e retornou um array de todos os arquivos, podendo acessar qualquer um
fs.readdir(__dirname, (err, arquivos) => { // file system.ler diretorio, especificou caminho diretorio atual(__dirname), e depois especificou erro e depois o conteudo(arquivos))
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})