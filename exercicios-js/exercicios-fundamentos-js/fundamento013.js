/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch*/

diaUtilOuNao = dia => {
  let diaMinusculo = dia.toLowerCase()
  switch (diaMinusculo) {
    case 'segunda-feira': case 'terça-feira': case 'quarta-feira': case 'quinta-feira': case 'sexta-feira':
      return 'Dia útil'
      break
    default:
      return 'Dia não útil'
  }
}

console.log(diaUtilOuNao("segunda-feira"))
console.log(diaUtilOuNao("terça-feira"))
console.log(diaUtilOuNao("sábado"))
console.log(diaUtilOuNao("quarta-feira"))
console.log(diaUtilOuNao("quinta-feira"))
console.log(diaUtilOuNao("sexta-feira"))