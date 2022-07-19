checarAnoBissexto = ano => {
  if (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0) {
    return true
  } else if (ano % 4 !== 0) {
    return `O ano não é divisível por 4`
  } else if (ano % 100 == 0) {
    return 'O ano é divisível por 100'
  } else if (ano % 400 !== 0) {
    return 'O ano não é divisível por 400'
  }
}
console.log(checarAnoBissexto(2024))
console.log(checarAnoBissexto(2022))