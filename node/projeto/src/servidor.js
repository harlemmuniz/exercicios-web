const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // para qualquer requisição fizer, o midua chamado body-parser vai fazer a requisição em objeto

app.get('/produtos', (req, res, next) => { // mostrar o objeto
    res.send(bancoDeDados.getProdutos()) // Mostrar todos os produtos
})

app.get('/produtos/:id', (req, res, next) => { // mostrar o objeto
    res.send(bancoDeDados.getProduto(req.params.id)) // Mostrar apenas o produto através da id
})

app.post('/produtos', (req, res, next) => { // Criar um novo produto
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => { // Modificar um produto
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id, // atraves do ID como parametro (na url)
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => { // Deletar um produto
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})