receberPrimeiroEUltimoElemento = (e1, ...e3) => {
  const ultimoElemento = e3.pop()

  return [e1, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento(1, 'String', 'Concatena ai'))
console.log(receberPrimeiroEUltimoElemento('Começo de', 'Uma jornada', 'Uma loucura'))