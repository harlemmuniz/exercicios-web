const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // O break age no bloco mais próximo for, while ou switch, parou o fluxo do for quando posição era a 5
    }
    console.log(`x ou posição ${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue // // O break age no bloco mais próximo for, while ou switch, interrompeu a quando y == 5 (acabou pulando) e continuou
    }
    console.log(`${y} = ${nums[y]}`)
}