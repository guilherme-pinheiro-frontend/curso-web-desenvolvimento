// This fora de uma função aponta para exports
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// This dentro de uma função muda de referência para GLOBAL
function logThis() {
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === module.exports)
  console.log(this === global)

  this.perigo = '...'
}

logThis()

// Tomar cuidado com o this em arrow functions, pois ele aponta para global, porém retornam um objeto vazio.