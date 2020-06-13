// não aceita repetição e não é indexada (não tem indice)

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times) // Mostra a estrutura set
console.log(times.size) // Mostra o tamanho, quantos elementos tem
console.log(times.has('vasco')) // Há "vasco"? Não, foi atribuido "Vasco"
console.log(times.has('Vasco')) // Há "Vasco"? Sim
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times)
console.log(times.size)

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // Lucas será ignorado pois não aceita repetição
const nomesSet = new Set(nomes)
console.log(nomesSet)