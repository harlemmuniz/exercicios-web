const diaDaSemana = function(dia) {
    switch (dia) {
        case 7: case 1:
            console.log('Final de semana')
            break
        case 2: case 3: case 4: case 5: case 6: 
            console.log('Dia de semana')
            break
        default:
            console.log('Dia inválido')   
    }
}

diaDaSemana(8)
diaDaSemana(7)
diaDaSemana(6)
diaDaSemana(5)
diaDaSemana(4)
diaDaSemana(3)
diaDaSemana(2)
diaDaSemana(1)
diaDaSemana(0)