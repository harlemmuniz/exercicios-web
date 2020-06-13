function contInvervalo (vetorNumeros) {
    let qtdIntervalo = 0
    let qtdForaInvervalo = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20) {
            qtdIntervalo++
        } else {
            qtdForaInvervalo++
        }
    }
    console.log(`${qtdIntervalo} dentro do invervalo e ${qtdForaInvervalo} fora do invervalo.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
contInvervalo(vetor)