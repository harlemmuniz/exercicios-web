const tecnologias = new Map() // instanciou map e a partir daí criar estruturas com valor(literal, função, número, objeto) e chave
tecnologias.set('react', { framework: false }) // criou um estrutura com valor sendo uma string
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // jeito incorreto de acessar a chave
console.log(tecnologias.get('react')) // jeito correto de acessar a chave react
console.log(tecnologias.get('react').framework) // acessando o valor

const chavesVariadas = new Map ([ // Criando Map já atribuindo elementos a partir de uma matriz de arrays
    [function() {}, 'Função'], // Chave é uma função, valor string
    [{}, 'Objeto'], // Chave literal, valor string
    [123, 'Número'] // Chave númerica, valor string
])

chavesVariadas.forEach((valor, chave) => { // forEach acessa valor e chave respectivamente
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123)) // verifica se há o elemento 123 no map chavesVariadas
console.log(chavesVariadas.size) // verifica quantos elementos há no map chavesVariadas
chavesVariadas.delete(123) // deleta o elemento 123
console.log(chavesVariadas.has(123)) // verifica se há o elemento 123 no map chavesVariadas
console.log(chavesVariadas.size) // verifica quantos elementos há no map chavesVariadas

chavesVariadas.set(123, 'a') // criou uma chave (123) e valor (a)
chavesVariadas.set(123, 'b') // como não pode duplicar chave, sobescreveu o valor
console.log(chavesVariadas)
chavesVariadas.set(456, 'b') // chave não foi duplicada, mas valor pode ser duplicado
console.log(chavesVariadas)
