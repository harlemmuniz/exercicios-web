function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // A diferença pro while sozinho é que pode entrar com a variável já falsa, pois só vai executar o while e seguir em frente depois de fazer todas as tentativas

console.log('Até a próxima!')