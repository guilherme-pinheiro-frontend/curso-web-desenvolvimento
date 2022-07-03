/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

vetor = [1, 2, 3, 5, 7, 12, 0, 12354, 26, 78, 9, 33]

function paresEImpares(vetorNumeros) {
  let qtdPares = 0
  let qtdImpares = 0
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      qtdPares++
    } else {
      qtdImpares++
    }
  }
  console.log(`Temos ${qtdPares} números pares e ${qtdImpares} números impares`)
}

paresEImpares()