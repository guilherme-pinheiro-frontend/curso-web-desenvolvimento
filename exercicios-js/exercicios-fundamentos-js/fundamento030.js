/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor*/



vetor = [1, 2, 3, 4, 60, 70, 100, 12, 53]

function maiorEMenor(vetor) {
  let min = Math.min(...vetor)
  let max = Math.max(...vetor)
  return [min, max]
}

console.log(maiorEMenor(vetor))

//Jeito mais difícil:
/*function maiorMenor(vetor) {
  let maior
  let menor
  for (let i = 0; i < vetor.length; i++) {
    if (maior === undefined && menor === undefined) {
      maior = vetor[i]
      menor = vetor[i]
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i]
      }
      if (vetor[i] < menor) {
        menor = vetor[i]
      }
    }
  }
  return [maior, menor]
}

console.log(maiorMenor(vetor))*/