const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheresChinesas = funcionarios => {
  if (funcionarios.pais === 'China' && funcionarios.genero === 'F') {
    return true
  }
}

const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  //console.log(funcionarios)

  // mulher chinesa com menor salário?
  const func = funcionarios.filter(mulheresChinesas).reduce(menorSalario)

  console.log(func)
})