// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

//Contexto léxico em ação!

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
//Neste caso a string declarada é a LOCAL pois o closure está agindo, ou seja, ele vai camada por camada tentando achar a variável que a gente indicou para ele declarar.