function Pessoa() {
  this.idade = 0

  //utilizamos o this ou cria uma const, nesse caso a 'self' para ser o this da pagina e não ter problema.
  const self = this
  setInterval(function () {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 10000)
}

//new Pessoa