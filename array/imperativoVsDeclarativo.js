const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2}
]

// Imperativa
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota // getNota vai percorrer aluno.nota
const soma = (total, atual) => total + atual // soma recebe um total, e o atual, e faz a soma

const total2 = alunos.map(getNota).reduce(soma) // Map vai mapear a constante getNota, que mapeia aluno.nota, e reduce vai somar todos os elementos de nota em um só
console.log(total2 / alunos.length)

// select codigo, nome, email from clients where ativo = 1
