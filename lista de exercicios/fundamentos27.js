function criancas (altA, taxA, altB, taxB) {
    if (altA == altB) {
        if (taxA > taxB) {
            return 'A criança A ultrapassará a criança B'
        } else if (taxA < taxB) {
            return 'A criança B ultrapassará a criança A'
        } else {
            return 'As duas crianças tem mesma altura e crescimento'
        }
    } else {
        if (altA > altB) {
            if (taxA >= taxB) {
                return 'A criança menor não ultrapassará a menor'
            } else {
                return calcularTempo(altB, taxB, altA, taxA)
            }
        } else {
            if (taxB >= taxA) {
                return 'A criança menor não ultrapassará a menor'
            } else {
                return calcularTempo(altA, taxA, altB, taxB)
            }
        }
    }
}

function calcularTempo(altMenor, taxAltMenor, altMaior, taxAltMaior) {
    let qtdAnos = 0
    while (altMenor < altMaior) {
        altMenor += taxAltMenor
        altMaior += taxAltMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}
console.log(criancas(150, 2, 130, 4))