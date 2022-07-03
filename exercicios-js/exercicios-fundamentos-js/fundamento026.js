/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function encontrandoPares() {
  let i = 1
  let pares = []
  while (i <= 100) {
    if (i % 2 == 0) {
      pares.push(i)
    }
    i++
  }
  console.log(pares)
}

encontrandoPares()