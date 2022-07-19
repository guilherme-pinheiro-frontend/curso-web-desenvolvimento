filtrarNumeros = array => {
  let resultado = []
  let adicionando = array.forEach(function(e) {
    const tipo = typeof e
    if (tipo == 'number') {
      resultado.push(e)
    }
  })
  return resultado
}

console.log(filtrarNumeros([1, 2, 'e', 15, 'ue']))