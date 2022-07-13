console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { //escrevendo desta forma eu adicionei ao método REVERSE, mais algumas funcionalidades.
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//sobrescrevendo uma função existente -- tentar evitar.
String.prototype.toString = function() {
  return 'Lascou tudo'
}

console.log('Escolar Cod3r'.reverse())