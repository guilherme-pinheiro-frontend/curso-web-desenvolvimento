/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function conselhoDeClasse(codAluno, nota1, nota2, nota3) {
  let mediaPonderada = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / (4 + 3 + 3)
  if (mediaPonderada >= 5) {
    return `Notas do aluno com o código de número ${codAluno}: ${nota1}, ${nota2} e ${nota3}. Está APROVADO `
  } else {
    return `Notas do aluno com o código de número ${codAluno}: ${nota1}, ${nota2} e ${nota3}. Está REPROVADO `
  }
}

console.log(conselhoDeClasse(10, 8, 2, 3))
console.log(conselhoDeClasse(15, 8, 7, 6))