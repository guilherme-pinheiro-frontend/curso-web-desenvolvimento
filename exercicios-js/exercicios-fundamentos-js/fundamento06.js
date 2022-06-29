/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const capital = 5000
const juros = 0.12
const tempo = 2
function jurosSimples() {
  let totalFinal = capital * juros * tempo + capital
  console.log(`Um capital de ${capital.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}, investidos por ${tempo} anos, sobre juros simples de ${juros} por ano, se tornou ${totalFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
}

jurosSimples()

function jurosCompostos() {
  let totalFinal = capital * Math.pow((1 + juros), tempo)
  console.log(`Já se esse valor fosse aplicado utilizando os juros compostos, utilizando os mesmos dados, o valor total acumulado seria de ${totalFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`)
}

jurosCompostos()