const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // Cria um objeto e já define pai como prototype (Object.create)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { // Criou um objeto filha 2, atribuiu pai como prototype
    nome: { value: 'Bia', writable: false, enumerable: true} // atribuiu nome e propriedades como writable: false (não pode ser alterado), enumerable: true(pode ser mostrado)
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // mostra o nome de filha2 (atribuido) e de corCabelo (mostrou do prototipo pai)

console.log(Object.keys(filha1)) // mostra os atributos próprios de filha 1
console.log(Object.keys(filha2)) // mostra os atributos próprios de filha 2

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Se(?) filha tem a propria propriedade
    console.log (key) : console.log(`Por herança: ${key}`) // mostra a propriedade(nome), se não (:) mostra as que recebeu de herança(corCabelo)
}