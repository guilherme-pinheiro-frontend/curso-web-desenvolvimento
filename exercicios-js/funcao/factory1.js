//Função factory serve para realmente criar objetos novos sem precisar declarar tudo na forma padrão.
//Factory simples
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())