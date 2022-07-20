contarPalavras = str => {
  resultado = str.split(" ")
  return resultado.length
}

console.log(contarPalavras('Sou uma frase'))
console.log(contarPalavras('Me divirto aprendendo a programar'))