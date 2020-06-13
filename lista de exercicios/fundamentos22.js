function anuidade (valor, mes) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        console.log(`Foi paga no mês ${mes}, e com o juros mensal a fatura é no valor de R$${(valor * Math.pow(1 + 0.05, atraso)).toFixed(2).replace(".", ",")}.`)
    }
}

anuidade(100, 4)