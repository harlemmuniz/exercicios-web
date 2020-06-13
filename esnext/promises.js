// função promise, se for realizada chama a then, se for rejeitada chama catch

function falarDepoisDe(segundos, frase) { // criou uma função que recebe dois parametros (segundos e frase)
    return new Promise((resolve, reject) => { //função retorna uma promessa, que retorna uma callback caso seja resolvida e outra caso seja rejeitada
        setTimeout(() => { // criou uma função setTimeout para criar um delay
            resolve(frase) // quando a promessa for atentida chama a função resolve (só aceita um parâmetro)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Legal') // atribuiu à função 3 à segundos e legal à frase
    .then(frase => frase.concat('?!?')) // quando a promise for realizada chama a função then
    .then(outraFrase => console.log(outraFrase)) // const outraFrase mostra no console.log
    .catch(e => console.log(e)) // caso seja rejeitada chama função then