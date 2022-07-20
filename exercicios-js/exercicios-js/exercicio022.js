funcaoDaSorte = num => {
  const min = 0
  const max = 11
  let numAleatorio = Math.floor(Math.random() * (max - min)) + min
  if (numAleatorio == num) {
    return `Parabéns! o número sorteado foi o ${numAleatorio}`
  } else {
    return `Que pena! O número sorteado foi o ${numAleatorio}`
  }
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(10))
