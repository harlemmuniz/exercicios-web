Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < aprovados.length; i++){
        callback(this[i], i, this) // Callback chamando valor atual (this[i]), o indice (i) e o array (this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})