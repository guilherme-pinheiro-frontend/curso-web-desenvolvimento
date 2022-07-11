// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' //  evitar de editar o prototype principal da aplicação

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' } // o atributo __proto__ direciona para quem o objeto deve apontar como seu pai, será sua referência.
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // shadowing - sombreamento - o atributo declarado por último sobrepõe o outro, quando eles conseguem se acessar.
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro) // estabelece a função de prototype para um objeto com o outro, neste caso, carro é o prototype de ferrari, eles mantêm uma relação de herança.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(400)
console.log(ferrari.status())