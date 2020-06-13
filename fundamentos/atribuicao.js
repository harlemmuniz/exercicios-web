const a = 7 // Criou a constante a e já criou a atribuição '7'
let b = 3 // Criou uma variável usando let e já criou a atribuição  '3'

b += a // b = b + a (b recebe b + a, b = 3 + 7 == 10)
console.log(b)

b -= 4 // b = b - 4 (b recebe b - a, b = 10(da anterior) - 4 == 6)
console.log(b)

b *= 2 // b = b * 2 (b recebe b * a, b = 6(da anterior) * 2 == 12)
console.log(b)

b /= 2 // b = b / 2 (b recebe b / a, b = 12(da anterior) * 2 == 6)
console.log(b)

b %= 2 // b = b % 2 (Resto da divisão b / 2, se o resto for par, mostra 0, se for impar, 1)
console.log(b)