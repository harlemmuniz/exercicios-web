// sem promise
const http = require('http') // vai fazer um require em cima de http e obter um resultado de 3 arquivos JSON

const getTurma = (letra, callback) => { // função get turma vai receber a letra que muda na url e uma callback pra quando o arquivo estiver todo carregado
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json` // montou a const url, onde a variavel é a letra
    http.get(url, res => { // a constante http, onde recebe a url e recebe uma função callback que vai receber os resultados
        let resultado = '' // resultados vão chegar em uma string

        res.on('data', dados => { // interceptar o evento de resposta chamado res.on('data') e cada um dos dados que chegarem
            resultado += dados // vai ser somados à resultado (string são concatenadas)
        })

        res.on('end', () => { // quando o evento finalizar, chamar todos os arquivos
            callback(JSON.parse(resultado)) // vai chamar uma callback que vai transformar tudo de JSON para objeto
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`)) // vai percorrer cada aluno da turma, pegar os nomes e concatenar
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
})