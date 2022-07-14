const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // deleta o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona ao último elemento do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona o elemento que for citado, como primeiro elemento do array
console.log(pilotos)

// o método splice pode tanto adicionar quanto remover elementos do array


// adicionar
pilotos.splice(1, 0, 'Ayrton Senna', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(0, 1)
console.log(pilotos)

// método slice - cria um novo array a partir do elemento e/ou dentro de um intervalo informado 
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // utilizando um intervalo, o índice informado para encerrar o array não está incluindo neste.
console.log(algunsPilotos2)

