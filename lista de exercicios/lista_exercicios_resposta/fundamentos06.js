function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(`O montante final calculado através do juros simples é de R$${jurosSimples(1000, 10/100, 2).toFixed(2)}.`);
console.log(`O montante final calculado através do juros simples é de R$${jurosCompostos(1000, 10/100, 2).toFixed(2)}.`);
