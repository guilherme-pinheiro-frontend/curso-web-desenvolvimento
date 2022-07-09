// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Guilherme'
console.log(pessoa)

// apesar dos objetos terem sido declarados em uma constante, eu ainda posso alterá-los, pois estarei alterando um atributo dele, e não o nome do objeto em si.

Object.freeze(pessoa)

pessoa.end = 'Rua ABC'
pessoa.nome = 'Maria'
console.log(pessoa.nome)
console.log(pessoa.end)