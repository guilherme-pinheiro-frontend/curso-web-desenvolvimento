/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function dividePorTres(num) {
  if (num % 3 === 0) {
    return true
  } else {
    return false
  }
}

console.log(dividePorTres(30))
console.log(dividePorTres(50))
console.log(dividePorTres(100))
console.log(dividePorTres(42))