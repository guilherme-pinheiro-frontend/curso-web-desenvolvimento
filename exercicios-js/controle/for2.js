const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

// Resumindo é um jeito muito mais fácil de declarar o FOR. Não precisamos declarar todo o caminho que ele tem que percorrer, ele automaticamente já vai percorrer todos itens do array/objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa}`)
}