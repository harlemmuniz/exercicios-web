// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa // "Retira" da estrutura os atributos nome e idade do objeto pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Substitui nome do atributo por letras para simplificar
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // Tentou acessar 2 atributos, o primeiro não foi definido e o segundo como true
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // "Retira" 3 atributos da constante endereco, que fica dentro da constante pessoa, cep não definido, sai como undefined
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa // Tentou retirar atributos que não foram criados, logo null ou undefined
console.log(ag,num)