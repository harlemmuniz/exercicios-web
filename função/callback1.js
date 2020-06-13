const fabricantes = ["Mercedes", "Audi", "BMW", "Fiat"] // Definiu os parâmetros da array da constante fabricantes

function imprimir(nome, indice) { // A função imprimir recebe
    console.log(`${indice + 1}. ${nome}`) // Vai mostrar o indice + 1 (para quem é de fora, melhor iniciar com o 1), e o nome do fabricante
}

fabricantes.forEach(imprimir) // Vai chamar a função imprimir de volta e mostrar cada paramêtro(forEach) do array fabricantes
fabricantes.forEach(a => console.log(a)) // Vai imprimir os valores da constante
