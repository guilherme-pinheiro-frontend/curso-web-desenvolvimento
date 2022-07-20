menorNumero = nums => {
  let menor = nums[0]

  for (let i in nums) {
    if (nums[i] < menor) {
      menor = nums[i]
    }
  }
  return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))