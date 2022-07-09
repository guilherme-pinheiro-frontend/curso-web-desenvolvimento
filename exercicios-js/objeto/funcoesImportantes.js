const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) //retorna somente as chaves
console.log(Object.values(pessoa)) // retorna somente os valores
console.log(Object.entries(pessoa)) // retorna chave e valor, porém em um array com os dois, separando do resto do obj

Object.entries(pessoa).forEach(([chave, valor]) => { //desestruturação
  console.log(`${chave}: ${valor}`)
})


// retorna a possibilidade de podermos editar melhor a propriedade do obj.
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, //enumerável na lista de chaves
  writable: false, //editável
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // concatena todos os atributos/obj declarados dentro do primeiro obj declarado, e caso algum valor seja sobrescrito, o valor retornado será o último.
console.log(obj)
Object.freeze(obj)
obj.c = 1234
console.log(obj)

