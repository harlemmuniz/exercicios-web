// forIn intera acima de indice, forOf intera acima de valor

for (let letra of "Cod3r") { // acessa os valores em palavra (letra)
    console.log(letra) // vai mostrar as letras da String
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // acessa o indice em assuntosEcma
    console.log(i) // mostra o indice
}

for (let assunto of assuntosEcma) { // acessa os valores em assuntosEcma
    console.log(assunto) // mostra os valores
}

const assuntosMap = new Map([ // criou uma estrutura map e atribuiu chaves e valores
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) { // acessando os elementos
    console.log(assunto) // mostrando os elementos
}

for (let assunto of assuntosMap.keys()) { // acessando as chaves da estrutura
    console.log(assunto) // mostrando as chaves da estrutura
}

for (let assunto of assuntosMap.values()) { // acessando os valores da estrutura
    console.log(assunto) // mostrando os valores da estrutura
}

for (let [ch, vl] of assuntosMap.entries()) { // "[ch, vl]" vai desestruturar (tirar do array) e mostrar as entradas
    console.log(ch, vl) // mostra chave e valor separado ao invés de juntos em um array
}