// Método Concat é utilizado quando desejamos concatenar arrays e/ou elementos. Ele cria um array paralelo aos originais para realizar a junção, conforme solicitado.

const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Guilherme')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]] )) // Array passados como matriz ficam como se fosse um array padrão dentro do retorno da função concat.

