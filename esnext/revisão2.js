// Arrow function
const soma1 = (a, b) => a + b // Arrow é sempre uma função anonima, não pode ter nome já tem o return implicito
console.log(soma1(2, 3))

const soma2 = (a, b) => { // Se colocar um corpo {}, tem que inserir o return senão o resultado é undefined
    return a + b
} 
console.log(soma2(2, 3))

// função Arrow (this) - this na função arrow aponta pro local em que a função foi escrita
const lexico1 = () => console.log(this === exports) // como que ela foi escrita dentro de um modulo(arquivo) do node, o this sempre vai apontar pra exports
const lexico2 = lexico1.bind({}) // criou uma outra função bind dizendo pra ele apontar pra um outro objeto criado, em outro contexto, não é permitido
lexico1() // onde o this aqui aponta pra exports
lexico2() // onde o this aqui aponta pra exports também

// parametro default
function log(texto = 'Node') { // Declara um valor padrão, caso declare depois algum que sobreponha, vai sobrepor
    console.log(texto)
}
log() // vazio não sobrepõe, ficando o default
log(undefined) // undefined não sobrepõe, ficando o default
log(null) // null é null
log('Sou mais forte') // Qualquer outro valor vai sobrepor

// operador rest
function total(...numeros) { // ira criar um array (...numeros)
    let total = 0 // criou uma variavel total, atribuindo 0 como valor inicial
    numeros.forEach(n => total += n) // pra cara valor recebido(declarado), vai somar à variavel total
    return total // retornar a variavel total
}
console.log(total(2, 3, 4, 5)) // declarou de forma espalhada e a função rest agrupa em um array