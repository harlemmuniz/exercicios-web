function valorConvenio (idade) {
    if (idade < 10) {
        console.log(`O valor a ser pago é de R$${(100+80).toFixed(2).replace(".", ",")}.`)
    } else if (idade < 30) {
        console.log(`O valor a ser pago é de R$${(100+50).toFixed(2).replace(".", ",")}.`)
    } else if (idade < 60) {
        console.log(`O valor a ser pago é de R$${(100+95).toFixed(2).replace(".", ",")}.`)
    } else {
        console.log(`O valor a ser pago é de R$${(100+130).toFixed(2).replace(".", ",")}.`)
    }
}

valorConvenio(-1)
valorConvenio(7)
valorConvenio(20)
valorConvenio(50)
valorConvenio(60)