const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas = [] // Criou um array vazio que será preenchido com teste lógico abaixo
for (let i in notas) { // Para a posição i no array notas
    if (notas[i] < 7) { // Executa teste lógico
        notasBaixas.push(notas[i]) // Preenche array com base no teste lógico
    }
}

console.log(notasBaixas) // Imprime os valores

// Com callback
const notasBaixas2 = notas.filter(function (nota) { // Criou uma constante que recebe uma operação filter, que vai filtrar dentro do array notas com base na função
    return nota < 7 // A função retorna os valores menores que 7
})

console.log(notasBaixas2)

// Utilizando arrow
const notasBaixas3 = notas.filter(nota => nota < 7) // O mesmo que a de cima utilizando a função arrow

console.log(notasBaixas3)

// Utilizando arrow 2
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)