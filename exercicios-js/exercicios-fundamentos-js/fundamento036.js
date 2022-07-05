/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function multiplicacaoEntreVetores(vetor, multiplicador) {
  let resultado = []
  vetor.forEach(elemento => {
    resultado.push(elemento * multiplicador)
  })
  return resultado
}

console.log(multiplicacaoEntreVetores(vetor1, 3))

function multiplicacaoEntreVetoresMaiorQue5(vetor, multiplicador) {
  let resultado = []
      vetor.forEach(elemento => {
        if (elemento > 5) {
        resultado.push(elemento * multiplicador)
        }
      })
  return resultado
}

console.log(multiplicacaoEntreVetoresMaiorQue5(vetor1, 3))