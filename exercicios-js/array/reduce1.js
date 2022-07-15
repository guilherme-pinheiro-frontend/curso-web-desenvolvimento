// Método Reduce é um método em que retorna, diferente das outras funções, um valor acumulativo. Por padrão, ao ser chamada, a função retorna respectivamente: Acumulador, Valor Atual, Índice, Array. O mesmo pega um valor inicial e vai adicionando o valor declarado até chegar a um resultado final, conforme função callback passada.

const alunos = [
  { nome: 'João', nota: 7.3 },
  { nome: 'Maria', nota: 9.2 },
  { nome: 'Pedro', nota: 9.8 },
  { nome: 'Ana', nota: 8.7 }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
  return acumulador + atual
}, 0 /*Nesta área, pode ser passado também o valor inicial da somatória*/)

console.log(resultado)
