function teste1(num) {
    if(num > 7)
    console.log(num) // Apenas essa sentença está associada ao bloco if
    console.log('Final') // Não está associada ao bloco if, sempre vai aparecer
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num >= 7); { // cuidado com o ';', não usar com as estruturas de controle
        console.log(num) // vai executar os dois testes, pois não está no bloco if
    }
}

teste2(6)
teste2(8)