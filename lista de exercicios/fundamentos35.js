let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetorInicial, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorInicial.push(vetorAdiciona[i])
    }
    console.log('Vetor adicionado: ' + vetorAdiciona)
    console.log('Vetor resultado: ' +vetorInicial)
}

adicionarVetor(vetorPilha, vetorAdiciona)