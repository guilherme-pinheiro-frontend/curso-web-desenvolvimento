calcularMedia = nums => {
  qtdElementos = nums.length
  const somaTotal = nums.reduce((acumulador, e) =>
    acumulador + e
    , 0)
  resultado = somaTotal / qtdElementos
  return resultado
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))
