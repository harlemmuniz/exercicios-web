const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // removeu o ultimo elemento do array "Massa"
console.log(pilotos)

pilotos.push('Verstappen') // adicionou um elemento ao final do array "Verstappen"
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array "Vettel"
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um primeiro elemento ao array "Hamilton"
console.log(pilotos)

// splice adiciona e remove elementos

pilotos.splice(2, 0, 'Botas', 'Massa') // a partir do elementos 2, removendo 0 elementos, adicionou "Botas" e "Massa"
console.log(pilotos)

pilotos.splice(3, 1) // a partir do elemento 3, removeu 1 elemento do array "Massa"
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array partir do indice 2 (Botas)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // passou do indice 1(Alonso) e remove o indice 4 (Verstappen)
console.log(algunsPilotos2)