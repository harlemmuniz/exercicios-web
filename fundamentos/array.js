const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // Retorna os valores de 0 a 3
console.log(valores[4]) // Retorna o valor de indice 4

valores[4] = 10 // Adiciona um valor ao indice 4
console.log(valores) // Retorna os valores iniciais com o indice 4 adicionado
console.log(valores.length) // Retorna o número de elementos

valores.push({id: 3}, false, null, 'teste') // Adiciona elementos à array
console.log(valores)

console.log(valores.pop()) // Retorna apenas o último valor

delete valores[0] // Deleta o valor em determinado indice (0)
console.log(valores)

console.log(typeof valores) // Mostra de que tipo é "valores"