repetir = (elemento, qtdDeRepeticao) => {
  let resultado = []
  for (let i = 0; i < qtdDeRepeticao; i++) {
    resultado.push(elemento)
  }
  return resultado
}

console.log(repetir(7, 5))