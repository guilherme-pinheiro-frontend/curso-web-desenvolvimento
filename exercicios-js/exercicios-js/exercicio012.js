const obj = {
  id: 20,
  nome: 'caneta',
  descricao: 'Não preenchido'
}

removerPropriedade = (obj, propriedadeObj) => {
  const objCopia = {...obj } // Utilizando uma cópia do obj principal
  delete objCopia[propriedadeObj]
  return objCopia
}

console.log(removerPropriedade(obj, 'id'))