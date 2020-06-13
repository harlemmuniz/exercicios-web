const imprimirResultado = function(nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // "Parar" função e executar a próxima, se não colocar, executa a primeira e mostra todas sem executar
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // Se não cair em nenhum dos casos, mostra Nota invalida (else)
            console.log('Nota inválida')   

    }console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.5)
imprimirResultado(4.5)
imprimirResultado(2.1)
imprimirResultado(11)
imprimirResultado(-1)