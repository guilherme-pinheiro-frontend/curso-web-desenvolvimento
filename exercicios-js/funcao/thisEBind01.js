const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar(this.saudacao)
// falar() ---- conflito entre paradigmas: funcional e OO

//solucionando o problema
//Utilizando a função BIND, o 'this' se fixa onde vc indicar.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()