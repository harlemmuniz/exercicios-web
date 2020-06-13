const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas) { //let usado para não executar fora do escopo, in percorre todos as posições i em notas
    console.log(i, notas[i]) // Se não colocar o [i], não vai mostrar o valor naquela posição i, e sim o array inteiro
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {//let usado para não executar fora do escopo, in percorre todos os atributos em pessoas
    console.log(`${atributo} = ${pessoa[atributo]}`)
}