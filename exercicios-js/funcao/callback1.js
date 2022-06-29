const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

// a função FOR EACH percorre cada item do array e realiza a ação que declaramos, neste caso, utiliza a função callback IMPRIMIR
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))