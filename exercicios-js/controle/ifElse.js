const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //cuidado. Linguagem fracamente tipada pode dar esses problemas, string sendo colocada no lugar de numero e não dar erro

function passouOuNao(nota) {
    if (nota >= 7.5) {
        console.log ('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

passouOuNao(9)
passouOuNao(7)