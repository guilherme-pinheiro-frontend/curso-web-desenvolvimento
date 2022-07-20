removerVogais = str => {
  const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

  vogais.forEach(vogal => str = str.replace(vogal, ''))
  return str
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Guilherme'))
console.log(removerVogais('Maria'))