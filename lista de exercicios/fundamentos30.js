function maiorMenor (vetorNumeros) {
    let maior
    let menor
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (maior === undefined && menor == undefined) {
        menor = vetorNumeros[i]
        maior = vetorNumeros[i]
        } else {
            if (vetorNumeros[i] > maior) {
                maior = vetorNumeros[i]
            } 
            if (vetorNumeros[i] < menor) {
                    menor = vetorNumeros[i]
            }
        }
    }    
    return [maior, menor]
}
vetorNumeros = [12, 15, 6, 17, 4, 6, 19, 1, 2, 3]
console.log(maiorMenor(vetorNumeros))