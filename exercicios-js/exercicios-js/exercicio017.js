somarNumeros = array => {
  const teste = array.reduce(function (acumulador, indice) {
    return acumulador + indice
  }, 0)
  return teste
}
const array = [1, 2, 3]
const array2 = [15, 15, 15]

console.log(somarNumeros(array))
console.log(somarNumeros(array2))