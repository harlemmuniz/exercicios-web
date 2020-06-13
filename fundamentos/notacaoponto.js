console.log(Math.ceil(6.1)) // Math um objeto que possui operações, usa a notação ponto para acessar a função ceil dentro deste objeto = arredondar para cima

const obj1 = {} // Foi criada uma constante
obj1.nome = 'Bola' // Criou um atributo dentro de um objeto usando a notação ponto
obj1['nome'] = 'Bola2' // Vai sobescrever a primeira, pois os dois modos estão corretos
console.log(obj1.nome) // Vai mostrar o log no console através da notação .

function Obj(nome) { // Criou uma função chamada Obj e atribiu como parâmetro da função 'nome'
    this.nome = nome // O nome associado ao objeto desta (this) função, e a variação fica visivel pra fora do escopo
    this.exec = 'Exec...'
}

const obj2 = new Obj('Cadeira') // Criou um novo objeto como na linha 8, e lá foi definido que o parâmetro era nome, então 'Cadeira' é nome do obj2
const obj3 = new Obj('Mesa') // Criou um novo objeto como na linha 8, e lá foi definido que o parâmetro era nome, então 'Mesa' é nome do obj3
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec)