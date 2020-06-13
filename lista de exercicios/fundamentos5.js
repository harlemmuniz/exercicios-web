function dinheiro (V1, V2) {
    valorTotal = V1 + V2
    valorFormatado = `R$${valorTotal.toFixed(2).replace(".",",")}`
    console.log(valorFormatado)
}
dinheiro(2.785, 3.32)