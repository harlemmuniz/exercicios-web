function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU (Uma das opções satisfazer)
    const comprarTv50 = trabalho1 && trabalho2 // E (Os dois tem que satisfazer)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Os dois tem que ser diferentes
    const manterSaudavel = !comprarSorvete // operador unário, não pode satisfazer, negação

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))