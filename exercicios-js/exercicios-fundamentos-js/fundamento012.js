/*12) Faça um algoritmo que calcule o fatorial de um número*/

const fatorial = n => {
  if (n > 1) {
    return n * fatorial(n - 1)
  }
  return n
}

console.log(fatorial(6))
console.log(fatorial(5))
console.log(fatorial(4))
console.log(fatorial(3))
console.log(fatorial(2))