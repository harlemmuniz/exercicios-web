console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Toda função tem o atributo .prototype
String.prototype.reverse = function () { // Reverter uma String
    return this.split('').reverse().join('') // (split)Vai quebrar a string (acessando a string através da função this) em cada uma das letras, gerar um array tendo todas as letras, espaços da string, (reverse)inverter os elementos da array, (join) vai juntar novamente todos elementos na string
}

console.log('Escola Cod3r')
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () { // vai criar uma função first
    return this[0] // Vai acessar o array através da função this e mostrar a posição 0
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou Tudo'
}

console.log(('Escola Cod3r').reverse())