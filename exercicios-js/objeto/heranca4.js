function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // todos os obj criados a partir da mesma função construtora, apontam para o mesmo obj pai.
console.log(meuObjeto.prototype === obj1.__proto__) // quando vc cria um obj a partir de uma função construtora, eles acabam apontando para o mesmo obj pai.