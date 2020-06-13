// let e const
{
    var a = 2 // var é declarado no escopo global
    let b = 3 // let só é declarado dentro do bloco
    console.log(b)
}
console.log(a)

// template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = 'Cod3r' // (...tras) vai criar uma nova array com os elementos não declarados um a um
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // ignorando o segundo elemento, deixa espaço vazio
console.log(x, y)

const {idade: i, nome: n} = { nome: 'Ana', idade: '9' } // destructuring elementos de um objeto {}
console.log(i, n)
