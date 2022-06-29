// IIFE -> Immediately Invoked Function Expression
//Função que é invocada junto com a sua declaração
// Essas funções servem para quando vc nao deseja modificar algo no escopo global em seu navegador

(function() {
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente!')
})()