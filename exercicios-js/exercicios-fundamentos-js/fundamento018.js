/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function lerPorExtenso(num) {
  switch (num) {
    case 1:
      return 'Um'
    case 2:
      return 'Dois'
    case 3:
      return 'Três'
    case 4:
      return 'Quatro'
    case 5:
      return 'Cinco'
    case 6:
      return 'Seis'
    case 7:
      return 'Sete'
    case 8:
      return 'Oito'
    case 9:
      return 'Nove'
    case 10:
      return 'Dez'
    default: '[ERRO]; Número fora do intervalo'
  }
}

console.log(lerPorExtenso(1))
console.log(lerPorExtenso(2))
console.log(lerPorExtenso(3))
console.log(lerPorExtenso(4))
console.log(lerPorExtenso(5))
console.log(lerPorExtenso(6))
console.log(lerPorExtenso(7))
console.log(lerPorExtenso(8))
console.log(lerPorExtenso(9))
console.log(lerPorExtenso(10))