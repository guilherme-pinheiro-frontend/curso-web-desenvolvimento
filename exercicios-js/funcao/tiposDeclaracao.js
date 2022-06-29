// function declaration --- posso chamar essa função antes de declará-la.
console.log(soma(3, 4))
function soma(x, y) {
  return x + y
}

//function expression --- só posso chamar essa função depois de declarar ela.
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))

//named function expression --- só posso chamar essa função depois de declarar ela.
const mult = function mult(x, y) {
  return x * y
}