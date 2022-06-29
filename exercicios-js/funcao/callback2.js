const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.8]

//Sem callback
const notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}

console.log(notasBaixas1)

//Com callback
//função FILTER funciona para filtrar e criar um novo array baseando-se em critérios declarados por nós.
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas2)

// a mesma função só que com arrowfunction

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

