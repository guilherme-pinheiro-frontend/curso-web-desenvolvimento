/*Transformar isso aqui em uma função construtora
[
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()*/

function Pessoa(nome) {
  this.nome = nome

  this.falar = () => {
    console.log(`Meu nome é ${nome}`)
  }
}

const joao = new Pessoa('Guilherme')
joao.falar()
console.log(joao.nome)
