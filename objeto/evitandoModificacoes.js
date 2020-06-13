// Object.preventExtensions

const produto = Object.preventExtensions({ // É possível alterar o objeto, deletar mas não adicionar
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borra escolar branca'
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) // É possível alterar o objeto, mas não deletar e nem adicionar
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

// Object.freeze = Não é possível alterar nenhum dado, selado + valores constantes