const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

/*app.use((req, res, next) => {
  res.send({ nome: 'Notebook', preco: 123.45}) // Converter para JSON
})
Podemos usar o .use para que as requisições sejam atendidas sem passar a url completa. .use passa a ser atendido para todas as requisições.*/

app.use(bodyParser.urlencoded({ extended: true })) // Função utilizada com a extensão body-parser para que possamos postar as strings corretamente no servidor. Utilizando o .use dessa forma, todo e qualquer informe para realizar o post passará por esse .use

app.get('/produtos',(req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
    id: req.params.id
  })
  res.send(produto) // JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.deletarProduto(req.params.id)
  res.send(produto) // JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})

// Realizamos o CRUD (Create, Read, Update e Delete)