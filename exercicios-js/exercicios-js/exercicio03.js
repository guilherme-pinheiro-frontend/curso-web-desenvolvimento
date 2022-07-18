function calcularSalario(horasTrabalhadas, valeHora) {
  let salarioBruto = horasTrabalhadas * valeHora
  let imposto = 30 / 100
  let salarioLiquido = salarioBruto - (salarioBruto * imposto)
  let salarioEmReal = numberParaReal(salarioLiquido)

  console.log(`Salário bruto igual a R$ ${salarioBruto}`)
  console.log(`Salário líquido igual a R$ ${salarioEmReal}`)
}

function numberParaReal(number) {
  let formatado = number.toFixed(2).replace(".", ",")
  return formatado
}

calcularSalario(150, 40.5)