function feira (fruta) {
    switch (fruta) {
        case 'Maça':
            console.log('Não vendemos essa fruta aqui.')
            break
        case 'Kiwi': 
            console.log('Estamos com escassez de kiwi.')
            break
        case 'Melancia': 
            console.log('Aqui está, são 3 reais o quilo.')
            break
        default:
            console.log('Não existe essa fruta aqui.')
    }
}

feira('Maça')
feira('Kiwi')
feira('Melancia')
feira('Morango')