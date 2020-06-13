console.log('01)', '1' == 1) // Compara se o '1' é igual ao 1
console.log('02)', '1' === '') // Compara se são totalmente iguais ===, mas não pois '1' é string, e 1 é número
console.log('03)', '3' != 3) // Compara se '3' é diferente de 3
console.log('04)', '3' !== 3) // Compara Compara se são totalmente diferentes !==, e são, pois '3' é string, e 3 é número

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // Date 0 pega a data de referência do javascript que é 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)