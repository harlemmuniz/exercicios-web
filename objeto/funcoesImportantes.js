const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // imprime as chaves: ['nome', 'idade', 'peso']
console.log(Object.values(pessoa)) // imprime os valores das chaves: ['Rebeca', 2, 13]
console.log(Object.entries(pessoa)) // imprime as chaves e valores em um array separados: ['nome', 'Rebeca'], ['idade', 2], ['peso', 13]

Object.entries(pessoa).forEach(([chave, valor]) => { // Desestruturou os elementos de um array (tirou do array e mostrou cada um deles)
    console.log(`${chave}: ${valor}`) // Mostra os valores
})

Object.defineProperty(pessoa, 'dataNascimento', { // Criou uma propriedade ao objeto pessoa chamado data de nascimento(tem que ser dento de aspas, ou o programa interpreta que dataNascimento já foi declarado)
    enumerable: true, // Ela vai ser listada? true = sim
    writable: false, // Essa propriedade vai aceitar ser modificada? false = não = freeze
    value: '01/01/2019' // Atribuiu valor
}) 

pessoa.dataNascimento = '01/01/2017' // não writable, então não vai assumir este valor
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // Mostra que a propriedade dataNascimento foi criada

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

const obj = Object.assign(dest, o1, o2) // Vai concatenar todas as constantes (o1 e o2) à constante de referencia (dest), se houver falor pra sobescrever (a: 1 -> 4) ele vai sobescrevendo e deixando o último valor

console.log(obj)
obj.c = 1234 // alterou o valor da propriedade c do obj
console.log(obj)
Object.freeze(obj) // congelou o obj
obj.c = 3 // tentou alterar novamente o valor da propriedade c, sem sucesso pois foi congelado
console.log(obj)