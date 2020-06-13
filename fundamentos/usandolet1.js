// Let tem escopo global, escopo de função e escopo de bloco
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // Mostra no console o valor do escopo de dentro (com alteração pois o let altera, dando preferencia pro escopo menor)
}
console.log('fora =', numero) // Mostra no console o valor do escopo de fora