// O método filter é um método em que você, baseado no array original, cria um array novo que estará contido neste e exibirá, conforme a função callback informada, os elementos que retornarão verdadeiro e os que não, estarão excluídos. Assim como as outras funções que interagem com o Array, o método Filter retorna respectivamente: ELEMENTO, INDICE E ARRAY.

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

let resultado = produtos.filter(produtosFrageis).filter(produtosAcima500)
console.log(resultado)