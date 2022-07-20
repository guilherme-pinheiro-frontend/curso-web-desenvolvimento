const array1 = [38, 2, 365, 10, 125, 11]

filtrarPorQuantidadeDeDigitos = (array, qtdDeAlgarismos) => {
  let resultado = []

  for (numero of array) {
    const quantidadeDeDigitos = String(numero).length

    if (quantidadeDeDigitos === qtdDeAlgarismos) {
      resultado.push(numero)
    }
  }
  return resultado
}

console.log(filtrarPorQuantidadeDeDigitos(array1, 2))