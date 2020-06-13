function investimento (C, J, A) {
    jurosSimples = C * (1 + (J * A))
    jurosComposto = C * Math.pow(1 + J, A)
    console.log(`O montante final calculado através do juros simples é de R$${jurosSimples.toFixed(2).replace(".",",")}.`)
    console.log(`O montante final calculado através do juros simples é de R$${jurosComposto.toFixed(2).replace(".",",")}.`)
}

investimento(10000, 0.1, 6)