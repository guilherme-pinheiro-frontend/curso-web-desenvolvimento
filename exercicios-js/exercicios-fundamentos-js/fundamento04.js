/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/
function divisao(dividendo, divisor) {
  let result = dividendo / divisor
  let resto = dividendo % divisor
  console.log(`Esse é o resultado da divisão ${result}`)
  console.log(`Esse é o resto da divisão ${resto}`)
}

divisao(10, 5)
divisao(11, 5)