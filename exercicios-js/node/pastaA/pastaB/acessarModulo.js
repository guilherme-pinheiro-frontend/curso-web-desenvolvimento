const moduloA = require('../../moduloA')
console.log(moduloA.ola)


//Também podemos acessar os módulos que estão dentro de outras pastas informando somente o nome da pasta, sendo assim, ele exibirá o que consta no arquivo padrão "index.js"
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

/*const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)*/
