// Object.values (pega os valores) e Object.entries (que da um array com chave e valor)
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) // retorna um array com atributos
console.log(Object.values(obj)) // retorna um array com os valores
console.log(Object.entries(obj)) // retorna uma matriz, com os (chave)atributos e valores criados em array

// Melhorias em notação literal
const nome = 'Carla' // criou uma constante com o nome Carla
const pessoa = { // criou um objeto pessoa
    nome, // dentro do objeto pessoa criou um atributo nome e por padrão Carla foi atribuido
    ola() { // facilitou na criação de funções, não precisando colocar function
        return 'Oi gente!' // e já colocando direto o que precisa ser retornado
    }
}
console.log(pessoa.nome,':', pessoa.ola())

// Class -- classe internamente é convertida pra função
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar()) // criou um novo objeto construtor () chamado cachorro que vai executar a função falar
