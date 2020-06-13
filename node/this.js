console.log(this === global) // No escopo global, this não aponta pro global
console.log(this === module) // No escopo global, this não aponta pr module

console.log(this === module.exports) // No escopo global, this apota pro module.exports
console.log(this === exports) // // No escopo global, this aponta pro exports

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // Dentro de uma função this não aponta pra exports
    console.log(this === module.exports) // Dentro de uma função this não aponta pro module.exports
    console.log(this === global) // Dentro de uma função this aponta pro global

    //this.perigo = '...' - aponta pro global
}
logThis()
// this.perigo - aponta pro module exports