function atribuirConceitos(notas) {
    for (i = 0; i < notas.length; i++){
        if (notas[i] >= 0 && notas[i] <= 4.9) {
            console.log('Conceito D')
        } else if (notas[i] >= 5 && notas[i] <= 6.9) {
            console.log('Conceito C')
        } else if (notas[i] >= 7 && notas[i] <= 8.9) {
            console.log('Conceito B')
        } else if (notas[i] >= 9 && notas[i] <= 10) {
            console.log('Conceito A')
        } else
        console.log('Notas permitidas somente entre 0 e 10')
    }
}    
notas = [0, 5, 7, 9, 11]
atribuirConceitos(notas)