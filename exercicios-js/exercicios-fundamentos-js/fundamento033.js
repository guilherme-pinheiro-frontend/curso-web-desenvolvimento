/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

let vetorString = ['a', 'b', 'c', 'd', 'e']
let vetorInteiro = [1, 2, 3, 4, 5]
let vetorDouble = [0.1, 0.2, 0.3, 0.4, 0.5]

function exibindoTodos(...args) {
  resultado = []
  for (let i = 0; i < arguments.length; i++) {
    resultado = resultado.concat(arguments[i])
  }
  return resultado;
}

console.log(exibindoTodos(vetorInteiro, vetorDouble))
console.log(exibindoTodos(vetorDouble, vetorString))