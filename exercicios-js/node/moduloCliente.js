// Importando os módulos

const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) // Mesmo o módulo não tendo sido declarado como obj, a variável completa é exibida como obj. Ele exibe o 'this' de cada módulo, que no começo é um obj vazio.

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)