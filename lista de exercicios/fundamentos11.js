function anoBissexto (ano){
    if (ano <= 0) {
        console.log(`O ano ${ano} não é um ano Bissexto`)
    } else if ( ano % 400 == 0 ) {
        console.log(`O ano ${ano} é um ano Bissexto`)
    } else if ( ano % 100 == 0) {
        console.log(`O ano ${ano} não é um ano Bissexto`)
    } else if ( ano % 4 == 0 ) {
        console.log(`O ano ${ano} é um ano Bissexto`)
    } else {
        console.log(`O ano ${ano} não é um ano Bissexto`)
    }
}
anoBissexto(0)
anoBissexto(4)
anoBissexto(100)
anoBissexto(400)
anoBissexto(2000)
anoBissexto(2020)
anoBissexto(2021)