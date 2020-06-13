function trocaVetores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return'Vetores são de tamanhos diferentes'
    }

    console.log('O novo vetor A é: ' + vetorA)    
    console.log('O novo vetor B é: ' + vetorB)
}

let vetorA =  [1, 2, 3]
let vetorB =  [4, 5, 6]

trocaVetores(vetorA, vetorB)