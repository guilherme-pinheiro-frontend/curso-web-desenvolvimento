// JSON - JAVASCRIPT OBJECT NOTATION
// Json é um formato exclusivamente textual que é muito utilizado por sua facilidade de implementação.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // exibindo um obj como json

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }')) // exibindo um json em forma de obj 
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // mostrando os caracteres que são suportados para essa transação de json para obj