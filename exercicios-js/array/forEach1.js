const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// A função forEach irá percorrer cada elemento do array declarado e para que ela retorne algo, precisamos necessariamente que ela seja seguida de uma função callback, que terá como parâmetros padrões, caso sejam declarados, nessa ordem: ELEMENTO, ÍNDICE E ARRAY COMPLETO. Sendo assim, podemos criar diversas opções para utilizar o forEach.

aprovados.forEach(function (nome, indice) {
  console.log(`${indice}) ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(nome, indice)) // agora com arrow function.

// Caso seja necessário, também podemos armazenar essa função callback em uma variável e chamá-la após o forEach
const exibirAprovados = aprovado => console.log(`${aprovado}. Utilizando callback armazenado em variável`)
aprovados.forEach(exibirAprovados)