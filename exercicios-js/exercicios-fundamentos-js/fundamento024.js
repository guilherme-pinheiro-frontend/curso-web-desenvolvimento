/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while*/

function repetindoFrase() {
  let nums = 0
  while (nums < 11) {
    nums++
    console.log(`${nums}. Hello World!`)
  }
}

repetindoFrase()