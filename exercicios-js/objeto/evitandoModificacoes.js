// Object.preventExtesions - Evitar que sejam adicionados novos atributos no obj, podemos editar e excluir atributos, mas não adicionar.

const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - não conseguimos adicionar nem excluir, somente modificar os atributos já existentes

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes. Não consigo alterar, excluir e nem adicionar nenhum novo elemento

const carro = { modelo: 'F40', velMax: 320, cor: 'Vermelho' }
Object.freeze(carro)
carro.modelo = 'F200'
carro.cor = 'Azul'
delete carro.velMax
console.log(carro)