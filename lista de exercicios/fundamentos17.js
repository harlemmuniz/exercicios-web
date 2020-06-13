function aumentoSalarial (salario, plano) {
    switch(plano) {
        case 'Plano A':
            console.log(`O colaborador um aumento de 10%, com seu salário passando de ${salario}, para ${salario * 1.1}`)
            break
        case 'Plano B':
            console.log(`O colaborador um aumento de 20%, com seu salário passando de ${salario}, para ${salario * 1.2}`)
            break
        case 'Plano C':
            console.log(`O colaborador um aumento de 30%, com seu salário passando de ${salario}, para ${salario * 1.3}`)
            break
    }
}

aumentoSalarial(1000, 'Plano A')
aumentoSalarial(1000, 'Plano B')
aumentoSalarial(1000, 'Plano C')