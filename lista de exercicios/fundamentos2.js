function triangulo (L1, L2, L3) {
    if(L1 === L2 && L2 === L3){
        return 'Equilátero'
    } else if (L1 == L2 || L2 == L3 || L1 == L3) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulo(2, 2, 3))
console.log(triangulo(1, 2, 3))
console.log(triangulo(2, 2, 2))