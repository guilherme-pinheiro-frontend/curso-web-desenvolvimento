despesasTotais = prods => {
  let resultado = 0
  for (let i = 0; i < prods.length; i++) {
    let c = prods[i].preco
    resultado += c
  }
  let transformandoEmReal = resultado.toFixed(2).replace('.', ',')
  return `R$ ${transformandoEmReal}`
}

const array1 = [
  { nome: 'Jornal Online', categoria: 'Informação', preco: 89.99 },
  { nome: 'Cinema', categoria: 'Entreterimento', preco: 150 }
]

const array2 = [
  { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
  { nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90 }
]

console.log(despesasTotais(array1))
console.log(despesasTotais(array2))

/*
Também podemos utilizar esta forma para resolver o problema:
function despesasTotais(itens) {
  return itens
  .map(item => item.preco)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual)
}*/


