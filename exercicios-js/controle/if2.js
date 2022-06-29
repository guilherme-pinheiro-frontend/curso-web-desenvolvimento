function teste1(num) {
    if(num > 7)
        console.log(num) /*Podemos até declarar um IF sem chamar os colchetes depois, porém ele só irá considerar a próxima linha de código, como neste caso. Apesar de não haver separação, somente foi considerada a próxima linha. Como se a linha que sobrou, fosse declarada somente para o resto da função, tipo um DEFAULT
        PS: Sempre usar os colchetes para melhor visualização e desenvolvimento do código*/

    console.log('Final')
}

teste1(8)
teste1(6)

function teste2(num) {
    if(num > 7); { //Essa função meio que não funcionou do jeito que "deveria", por conta do ponto e vírgula, tomar bastante cuidado para usar esse caracter. Cuidado.
        console.log(num)
    }
}

teste2(6)
teste2(8)