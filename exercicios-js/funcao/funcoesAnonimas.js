// simplesmente uma função sem nome.
// Uma arrow function sempre vai ser uma função anonima, já a função declarada de modo tradicional pode ou não ser anonima
const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
  return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
  falar: function () {
    console.log('Opa')
  }
}

pessoa.falar()