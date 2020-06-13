const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovados, indice) => console.log(1 + indice, aprovados)
aprovados.forEach(exibirAprovados)
