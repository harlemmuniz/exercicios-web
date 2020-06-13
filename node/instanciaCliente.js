const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // require('./instanciaNova') retorna uma função e () retorna um objeto
const contadorD = require('./instanciaNova')()

contadorA.inc() // node faz cache dos objetos retornados, como é instancia única, o que fizer em contador A, o B vai fazer
contadorA.inc() 
console.log(contadorA.valor, contadorB.valor) 

contadorC.inc() // pois é criado uma nova instancia usando o factory, valor de D não foi alterado pois só mexeu no contador C
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)