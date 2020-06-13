let nTermos = 10
let valor = 10
let razao = 15

function progressaoAritmetica() {
    for (let i = 0; i < nTermos; i++) {
        console.log(nTermos + razao*i)
    }
    console.log('Soma: ' + (nTermos * (valor + (valor + ((nTermos-1)*razao))))/2)
}
function progressaoGeometrica() {
    for (let i = 0; i < nTermos; i++) {
        console.log(nTermos*(razao**i))
    }
    console.log('Soma: ' + (valor * ((razao**nTermos)-1))/(razao-1))
}

progressaoAritmetica(nTermos, valor, razao)
console.log('--------------')
progressaoGeometrica(nTermos, valor, razao)