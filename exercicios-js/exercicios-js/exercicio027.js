const obj = { a: 1, b: 2, c: 3 }

inverter = obj => {
  const objetoInvertido = {}

  Object.entries(obj).forEach(parChaveValor => {
    const chave = 0,
      valor = 1

    objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
  })
  return objetoInvertido
}

console.log(inverter(obj))