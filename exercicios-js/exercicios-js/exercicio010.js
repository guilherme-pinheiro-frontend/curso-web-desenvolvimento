simboloMais = numRepeticao => {
  let resultado = ""
  for (let i = 0; i < numRepeticao; i++) {
    resultado += "+"
  }
  return resultado
}

console.log(simboloMais(5))
console.log(simboloMais(10))