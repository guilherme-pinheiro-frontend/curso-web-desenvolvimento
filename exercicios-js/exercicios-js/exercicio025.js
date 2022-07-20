const array1 = ['programação', 'mobile', 'profissional']
const array2 = ['javascript', 'java', 'c++']

buscarPalavrasSemelhantes = (inicio, palavras) => {
  const resultado = []

  for (let palavra of palavras) {
    if (palavra.includes(inicio)) {
      resultado.push(palavra)
    }
  }
  return resultado
}

console.log(buscarPalavrasSemelhantes('pro', array1))