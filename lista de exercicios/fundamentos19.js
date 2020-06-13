function calculaPreco(codigo, quantidade) {
    switch (codigo) {
        case 100:
            console.log(`Cachorro quente R$3,00 a un., ${quantidade} un. da um total de R$${(quantidade * 3).toFixed(2).replace(".", ",")}.`)
        break
        case 200:
            console.log(`Hambúrguer simples R$4,00 a un., ${quantidade} un. da um total de R$${(quantidade * 4).toFixed(2).replace(".", ",")}.`)
        break
        case 300:
            console.log(`Cheeseburguer R$5,50 a un., ${quantidade} un. da um total de R$${(quantidade * 5.5).toFixed(2).replace(".", ",")}.`)
        break
        case 400:
            console.log(`Bauru R$7,50 a un., ${quantidade} un. da um total de R$${(quantidade * 7.5).toFixed(2).replace(".", ",")}.`)
        break
        case 500:
            console.log(`Refrigerante R$3,50 a un., ${quantidade} un. da um total de R$${(quantidade * 3.5).toFixed(2).replace(".", ",")}.`)
        break
        case 600:
            console.log(`Suco R$2,80 a un., ${quantidade} un. da um total de R$${(quantidade *2.8).toFixed(2).replace(".", ",")}.`)
        default:
            return 'Produto não existente.'
    }
}

calculaPreco(100, 3)
calculaPreco(200, 2)
calculaPreco(300, 5)
calculaPreco(400, 1)
calculaPreco(500, 2)
calculaPreco(600, 4)