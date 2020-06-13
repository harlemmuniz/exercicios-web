// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'} // o objeto pessoa é constante e não será alterado ({nome: 'João'})
pessoa.nome = 'Pedro' // atribuiu um parametro chamado nome à constante pessoa
console.log(pessoa.nome)
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // freeze congela a constante pessoa e nada pode ser alterado ou deletado

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'}) // já cria o objeto congelado sem poder receber alterações

console.log(pessoaConstante)
pessoa.nome = 'Maria'
console.log(pessoaConstante)