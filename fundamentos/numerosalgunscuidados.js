console.log(7 / 0) // Qualquer número dividido por 0 vai dar Infinity
console.log("10" / 2) // O programa reconhece e converte em número e faz a operação
console.log("3" + 2) // Junta 3 e 2, pois o + também tem sentido de concatenação, e o string tem preferência em relação ao número
console.log("3" - 2) // Realiza a subtração pois o - não tem sentido de concateção como o +
console.log("Show!" * 2) // Texto o programa não faz a operação (Not a Number)
console.log(0.1 + 0.7) // Gera imprecisão, tomar cuidado
// console.log(10.toString(2)) O literal diretamente não consegue chamar . a função
console.log((10.345).toFixed(2)) // Mas entre parentêses consegue sem ter que armazenar em uma variável/constante