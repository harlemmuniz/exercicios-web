function classificaAluno(nota) {
    let corrigirNota = arredondar (nota)
    if (corrigirNota >= 40) {
        console.log(`Aprovado com nota ${corrigirNota}`);
    } else {
        console.log(`Reprovado com nota ${corrigirNota}`);
    }
}

function arredondar (nota) {
    if (nota % 5 >= 3) { // Se o resto da divisão do número divido por 5 for maior ou igual a 3
        return nota + (5 - (nota % 5)) // Adiciona ao número inicial a diferença entre 5 e o resto; ex: 88 % 5 = 3, 88 + (5 - 3) = 90.
    } else { // Se não for maior ou igual a 3 (menor que 3)
        return nota - (nota % 5) // Remove a diferença
    }    
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)