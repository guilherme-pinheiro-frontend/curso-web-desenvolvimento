// tentando criar o próprio método filter

Array.prototype.filter2 = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: true }
]

const produtosFrageis = p => p.fragil == true

const produtosAcima500 = p => {
  if (p.preco > 500) {
    return true
  }
}

let resultado = produtos.filter2(produtosFrageis).filter2(produtosAcima500)
console.log(resultado)