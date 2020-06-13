console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Carlos', 'Ana') // Criou um array que pode ser alterado(let) através do new
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Alterou para a função literal
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adiciona elemento à próxima posição [4]
console.log(aprovados.length)

aprovados[9] = 'Rafael' // Adicionou elemento de indice 9, e preencheu os entre 4 e 9 com "undefined"
console.log(aprovados.length) // Tem 10 indices mas 4 vazios, 5, 6, 7 e 8
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Reorganiza o array, como é tudo String, ordem alfabetica
console.log(aprovados)

delete aprovados[1] // Deletou apenas o elemento 1 de aprovados, ou seja, tornou o elemento 1 (Carlos) undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2') // Consegue excluir e adicionar parametros (primeiro parametro é o indice onde vai alterar, segundo é a quantidade de parametros que ira deletar, e terceiro o(s) parametros que ira adicionar)
console.log(aprovados)