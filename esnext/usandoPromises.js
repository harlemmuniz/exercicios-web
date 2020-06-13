// com promise
const http = require('http') // vai fazer um require em cima de http e obter um resultado de 3 arquivos JSON

const getTurma = letra => { // função get turma vai receber a letra que muda na url
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => { // vai retornar uma nova promise que vai receber duas função callback resolve e reject
        http.get(url, res => { // a constante http, onde recebe a url e recebe uma função callback que vai receber os resultados
            let resultado = '' // resultados vão chegar em uma string
    
            res.on('data', dados => { // interceptar o evento de resposta chamado res.on('data') e cada um dos dados que chegarem
                resultado += dados // vai ser somados à resultado (string são concatenadas)
            })
    
            res.on('end', () => { // quando o evento finalizar, chamar todos os arquivos
                try { // se conseguir fazer o parse
                    resolve(JSON.parse(resultado)) // vai resolver e executar o parse para converter em objeto
                } catch(e) { // caso dê algum problema, caso tente fazer um parse de algo que não é JSON
                    reject(e) // mostra a mensagem de erro
                }
            })
        })
    })
}

//let nomes = []
//getTurma('A').then(alunos => {
//    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
//    getTurma('B').then(alunos => {
//        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
//        getTurma('C').then(alunos => {
//            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
//            console.log(nomes)
//        })
//    })
//})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // vai passar varias proximas e quando todas (all) forem resolvidas, chama os then
    .then(turmas => [].concat(...turmas)) // assim que forem resolvidas (recebidas), vai concatenar as turmas em um array
    .then(alunos => alunos.map(aluno => aluno.nome)) // após concatenar, vai em aluno por aluno e pegar apenas os nomes
    .then(nomes => console.log(nomes)) // após os 2 processos anteriores, mostra os nomes
    .catch(e => console.log(e.message)) // tratativa do erro

getTurma('D').catch(e => console.log(e.message)) // vai dar erro pois não há turma D 