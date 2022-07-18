estaEntre = (numero, minimo, maximo) => {
  if (numero >= minimo && numero <= maximo) {
    return true
  } else {
    return false
  }
}

console.log(estaEntre(10, 2, 20))
console.log(estaEntre(2, 10, 20))
console.log(estaEntre(10, 10, 20))