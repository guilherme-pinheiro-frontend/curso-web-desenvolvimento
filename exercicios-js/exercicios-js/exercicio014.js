const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

function objParaArray(pessoa) {
  const chaves = Object.keys(pessoa)
  const resultado = chaves.map(chave => [chave, pessoa[chave]])

  return resultado
}

console.log(objParaArray(pessoa))