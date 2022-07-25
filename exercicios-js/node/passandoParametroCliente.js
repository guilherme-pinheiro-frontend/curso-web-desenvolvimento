// Tendo como exports uma função, ao invocar a função em outro arquivo, podemos passar também os parâmetros desta.

const saudacoes = require('./passandoParametro')('Ana', 'Lucas', 'João')
console.log(saudacoes)