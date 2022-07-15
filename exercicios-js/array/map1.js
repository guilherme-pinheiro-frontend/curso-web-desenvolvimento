// O método Map sempre vai retornar um array paralelo ao original, irá percorrer cada elemento do array e realizar o que determinarmos com uma função callback. Assim como o forEach, por padrão o Map retorna 3 três elementos, que são respectivamente: ELEMENTO, ÍNDICE E O ARRAY

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function (e) {
  return e * 2
})

console.log(resultado)

// Podemos passar mais de uma função e realizar mais de uma alteração para o mesmo array do map

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // Todas essas funções somente para transformar o valor padrão em dinheiro.

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)