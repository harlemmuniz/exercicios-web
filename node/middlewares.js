// middleware patern (chain of responsabilities)

const passo1 = (ctx, next) => { // ctx = objeto, e next é uma função
    ctx.valor1 = 'midi1' // atribuiu valor 'midi1' para contexto
    next() // e chamou a função next, que chama o próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'midi2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'midi3' // não tem o next, pois não quer disparar o next, colocando só o objeto

const exec = (ctx, ...middlewares) => { // função exec recebe objeto contexto e uma array com varias funções chamada middlewares
    const execPassos = indice => { // criou uma outra função  praexecutar passos recebe um indice que quer executar
        middlewares && indice < middlewares.length && // verifica se o array foi setado E se o indice passado for menor que o array
        middlewares[indice](ctx, () => execPassos(indice + 1)) // Executa a função passando o indice do array, e depois chama a função passando o contexto e a função next passando indice mais um, ou seja, se executou o indice 0, quando chegar chama o indice 1, depois 2, depois 3 etc.
    }
    execPassos(0) // Executou a função executar passos e o indice 0
}

const ctx = {} // criou um contexto, objeto vazio
exec(ctx, passo1, passo2, passo3) // chamou a função exec, passando o contexto e os passos, vai pegar os 3 parametros, juntar em um array
console.log(ctx)