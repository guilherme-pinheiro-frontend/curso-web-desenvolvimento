// Desafio: retornar um array com apenas os preços de cada elemento.

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

/* Jeito que eu fiz.

let obj1 = JSON.parse('{ "nome": "Borracha", "preco": 3.45 }')
let obj2 = JSON.parse('{ "nome": "Caderno", "preco": 13.90 }')
let obj3 = JSON.parse('{ "nome": "Kit de Lapis", "preco": 41.22 }')
let obj4 = JSON.parse('{ "nome": "Caneta", "preco": 7.50 }')

let somentePrecoArray = []

somentePrecoArray.push(obj1.preco)
somentePrecoArray.push(obj2.preco)
somentePrecoArray.push(obj3.preco)
somentePrecoArray.push(obj4.preco)

console.log(somentePrecoArray)*/

// Jeito mais eficiente

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)