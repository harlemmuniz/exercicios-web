const sequencia ={
    _valor: 1, // convenção (ser acessada apenas internamente no objeto sequencia)
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor 
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // ta chamando os 2, metodo get e set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // ignorou pois tentou atribuir um valor menor do que o já tinha (1000)