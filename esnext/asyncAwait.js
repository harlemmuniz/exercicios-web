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

// Recurso do ESB
// Objetivo de simplificar o uso de promises

let obterAlunos = async () => { // criar uma função e marcar ela como async (para funcionar o await)
    const turmaA = await getTurma('A') // função await é disponível para Promise, onde atribuiu o resultado a turmaA, e só chamará o then após isso
    const turmaB = await getTurma('B') // onde atribuiu o resultado a turmaB, e só chamará o then após isso
    const turmaC = await getTurma('C') // onde atribuiu o resultado a turmaC, e só chamará o then após isso
    return [].concat(turmaA, turmaB, turmaC) // retornou um away onde concatenou todas turmas juntas
} // retorna um objeto asyncFunction e aí sim chama o then

obterAlunos() // chama a função obterAlunos e só aí o then
    .then(alunos => alunos.map(aluno => aluno.nome))// vai em aluno por aluno e pegar apenas os nomes
    .then(nomes => console.log(nomes)) // após o processo anterior, mostra os nomes
    .catch(e => console.log(e.message)) // tratativa de possível erro