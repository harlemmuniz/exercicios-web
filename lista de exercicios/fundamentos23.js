function notaAluno(codAluno, notaA, notaB, notaC) {
    pesoMaior = 4
    pesoMenor = 3
    if (notaA > notaB && notaA > notaC) {
        maiorNota = notaA
        menorNota = notaB + notaC;
    } else if 
        (notaB > notaA && notaB > notaC) {
            maiorNota = notaB
            menorNota = notaA + notaC;
    } else if
        (notaC > notaA && notaC > notaB) {
            maiorNota = notaC
            menorNota = NotaA + NotaB;
      }

      mediaFinal = ((maiorNota * pesoMaior + menorNota * pesoMenor)/(pesoMaior + pesoMenor))
      console.log(`O aluno do código ${codAluno} recebeu as notas ${notaA}, ${notaB}, ${notaC}, e obteve uma média de ${mediaFinal} e foi ${mediaFinal < 5 ? 'reprovado.' : 'aprovado.'}`)

} 

notaAluno(200, 3, 7, 1)