const bodyParser = require('body-parser') // Habilitando o body parser em nosso servidor
const express = require('express')
const app = express() // Executando o express

app.use(express.static('.')) // Se não startar os arquivos statics, ele não vai apresentar nada
app.use(bodyParser.urlencoded({ extended: true })) // Vai fazer o bodyParser de todo submit que vier
app.use(bodyParser.json()) // Fazer o bodyParser de toda requisição json que aparecer


const multer = require('multer') // para interpretar o arquivo que vem no upload

const storage = multer.diskStorage({ // disStorage serve para configurar o arquivo e personalizar nome etc
    destination: function(req, file, callback) { // selecionou o destino do arquivo
        callback(null, './upload')
    },
    filename: function(req, file, callback) { // para o arquivo não sobrescrever o existente, insere um data atual antes
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') // upload associa o objeto storage ao construtor multer e identificando o input com name arquivo no arquivo html

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => { // vai tratar o recebimento do formulário
    res.send({ // vai retornar os mesmo dados que vieram
        ...req.body, // usou o spread (tudo que veio na resposta) vai jogar no objeto body
        id: 1 // e inserir um id
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body - requisção no corpo
    // req.query - requisição na consulta, na url "?numero=2"
    // req.params - requisição diretamente na url, :numero, /2 por exemplo
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

// app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log("Executando..."))