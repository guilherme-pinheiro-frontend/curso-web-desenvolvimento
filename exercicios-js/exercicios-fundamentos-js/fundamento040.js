/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

let vetor = [1.2, 5.6, 7, 8.8, 9, 10]

function classificacaoNotas(vetor) {
  let conceitos = []
  for (let i = 0; vetor.length; i++) {
    if (vetor[i] >= 0 && vetor[i] <= 4.9) {
      conceitos.push('D')
    } else if (vetor[i] > 5 && vetor[i] <= 6.9) {
      conceitos.push('C')
    } else if (vetor[i] > 7 && vetor[i] <= 8.9) {
      conceitos.push('B')
    } else if (vetor[i] > 9 && vetor[i] <= 10) {
      conceitos.push('A')
    }
  }
  return conceitos
}

let vetorConceitos = classificacaoNotas(vetor)

console.log(vetorConceitos)
