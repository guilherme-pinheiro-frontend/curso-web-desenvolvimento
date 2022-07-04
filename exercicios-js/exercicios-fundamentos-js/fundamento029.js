/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

vetor = [11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 25, 30, 50]

function acharIntervalo(vetor) {
  let dentroDoIntervalo = 0
  let foraDoIntervalo = 0
  let i = 0
  while (i < vetor.length) {
    if (vetor[i] >= 10 && vetor[i] <= 20) {
      dentroDoIntervalo++
    } else {
      foraDoIntervalo++
    }
    i++
  }
  console.log(`${dentroDoIntervalo} números estão dentro do intervalo e ${foraDoIntervalo} números estão fora do intervalo`)
}

acharIntervalo(vetor)
