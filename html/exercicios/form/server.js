const express = require('express') // const express vai importar o express
const app = express() // a constante app vai executar (instanciar) o express
const bodyParser = require('body-parser') // body Parser fará a leitura a requisição, irá fazer o parser e enviar para req.body, onde terá acesso a todos as requisições no body

app.use(bodyParser.urlencoded({ extended: true })) // vai fazer um bodyParser (ler o corpo da requisição (nome inserido)) do URL enconded (URL padrão informado no form) e criar um objeto já preenchido e ( tem que passar essa informação) extendido (true)
                                                   // sem isso não faz um bodyParser (o body não vai existir no request), pois o bodyParser não leu o corpo da requisição e não transformou os dados para ser interpratado pela aplicação a partir do req.body

app.post('/usuarios', (req, resp) => { // quer atender uma requisição do tipo post (conforme informado no arquivo POST) em /usuarios
    console.log(req.body) // mostrar no console o que foi enviado no body
    resp.send('<h1>Parabéns, usuário cadastrado!</h1>') // responder parabéns
})

app.post('/usuarios/:id', (req, resp) => { // quer atender uma requisição do tipo post (conforme informado no arquivo POST) em /usuarios
    console.log(req.params.id) // mostrar no console o que foi enviado no body
    console.log(req.body) // mostrar no console o que foi enviado no body
    resp.send('<h1>Parabéns, usuário alterado com sucesso!</h1>') // responder parabéns
})

app.listen(3003) // vai atender à consta app na porta 3003