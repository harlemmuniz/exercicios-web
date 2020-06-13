let contador = 1 // i começa com 1
while( contador <= 10) { // enquanto for menor ou igual a 10
    console.log(`Contador = ${contador}`)
    contador++ // adiciona 1
}

for(let i = 1; i <= 10; i++) { // i começa com 1 e vai adicionar 1 até enquanto ser menor ou igual a 10
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i=0; i < notas.length; i++) { // i começa na posição zero, e vai adicionar 1 até chegar na última posição do array, let adicionado pra não pode executar fora do escopo
    console.log(`nota = ${notas[i]}`) // Mostra o valor de i no array notas
}