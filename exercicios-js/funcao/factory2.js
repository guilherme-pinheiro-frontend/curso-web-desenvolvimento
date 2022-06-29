// Se eu colocar o mesmo atributo para ser passado como parametro, como neste caso o 'nome', não preciso declarar o obj dentro, por exemplo: nome: 'Ana'.
function criarProduto(nome, preco, codigo = 1) {
  return {
    nome,
    preco,
    desconto: 0.1,
    codigo
  }
}

console.log(criarProduto('Notebook', 4122.11, 2))
console.log(criarProduto('iPad', 982.11, 52))