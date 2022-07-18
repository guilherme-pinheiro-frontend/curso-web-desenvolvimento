inverso = elemento => {
  const tipo = typeof elemento

  if (tipo == 'boolean') {
    if (elemento == true) {
      return false
    } else {
      return true
    }
  } else if (tipo == "number") {
    return -elemento
  } else {
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
  }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(2000))
console.log(inverso(-2000))