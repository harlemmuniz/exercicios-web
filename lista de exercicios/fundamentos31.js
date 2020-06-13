function numerosNegativos(vetor) {
    let qtdNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor [i] < 0)
        qtdNegativos++
    }
    return qtdNegativos
}
vetor = [-1, -2, 20, -10, -75, 53, 74, -6, -8]
console.log(numerosNegativos(vetor))