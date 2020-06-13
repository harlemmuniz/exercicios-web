const escola = 'Cod3r'

console.log(escola.charAt(4)) // Retorna o valor de posição 4 (começa pela 0)
console.log(escola.charAt(5)) // Retorna o valor de posição 5, como não há, o javascript retorna em branco
console.log(escola.charCodeAt(3)) // Retorna o código do caracter 3
console.log(escola.indexOf('3')) // Retorna o indice do caracter 3

console.log(escola.substring(1)) // Retorna passando o indice inicial (1)
console.log(escola.substring(0, 3)) // Retorna passando o indice inicial (1) e final (3)

console.log('Escola '.concat(escola).concat(" é show").concat("!")) // Concaterar literal, valor da constante escola, literal e literal
console.log('Escola ' + escola + ' é show' + '!') // Versão de cima simplificada
console.log(escola.replace(3, 'e')) // Substitui o primeiro valor (3) pelo segundo (e)

console.log('Ana,Maria,Pedro'.split(',')) // Quebra a string usando um separador especifico (,) e retorna como array