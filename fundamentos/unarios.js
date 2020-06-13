let num1 = 1
let num2 = 2

num1++ // soma 1 unidade ao valor
console.log(num1)
--num1 // subtrai 1 unidade do valor
console.log(num1)

console.log(++num1 === num2--) // Primeiro somou 1 ao num1 = 2, depois comparou com o num2 = 2 dando assim true, e só depois subtraiu 1 do num 2 =1, seguiu a ordem da operação
console.log(num1 === num2) // num1 = 2 != num2 = 1