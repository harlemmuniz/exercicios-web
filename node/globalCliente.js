require('./global')

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!' // Não vai alterar pois congelei o objeto no arquivo global.js
console.log(minhaApp.nome)