// Var tem escopo global e escopo de função

var numero = 1
console.log('fora e antes =', numero)
{
    var numero = 2
    console.log('dentro =', numero) // Mostra no console o valor do escopo de dentro (sem alterar, pois o var não altera)
}
console.log('fora =', numero) // Monstra no console o valor do escopo de fora 