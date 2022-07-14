console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o array original, o deixando em ordem alfabética.
console.log(aprovados)

delete aprovados[1] // o array não é reordenado, o item deletado fica como undefined
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // desta forma, a partir do indice 1, ira deletar o a string que ocupa o indice 1.
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // desta forma, a partir do indice 1, voce exclui dois elementos e depois adiciona os elementos declarados.
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento2-1', 'Elemento2-2')
console.log(aprovados)