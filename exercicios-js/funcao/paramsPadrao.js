// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

// as variáveis irão assumir o valor que for declarado para função, mas caso não va nenhum valor, elas irão assumir o valor padrão

console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) // temos um problema quando formos utilizar os valores '0', poque eles são considerados falsos, sendo assim, as variaveis irão assumir o valor padrão.

//estrategia 2, 3 e 4  para gerar valor padrão.
function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))


// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))