contarCaractere = (caractere, str) => {
  let resultado = 0
  const strSeparada = str.split('')

  for (let i in strSeparada) {
    if (strSeparada[i] === caractere) {
      resultado++
    }
  }
  return resultado
}

console.log(contarCaractere('r', "A sorte favorece os audazes"))
console.log(contarCaractere('c', "Conhece-te a ti mesmo"))