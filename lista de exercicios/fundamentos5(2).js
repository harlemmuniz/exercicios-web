function soma (x, y) {
    console.log(`R$${(x + y).toFixed(2).replace(".",",")}`)
}

soma(0.1, 0.2)