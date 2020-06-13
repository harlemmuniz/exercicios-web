function meuObjeto() {}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // Todos objetos criados com o new a partir de uma mesma função construtora apontam para o mesmo objeto
console.log(meuObjeto.prototype === obj1.__proto__) // Função cria a partir de uma função construtora, o __proto__ aponta pro função.prototype

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo:
console.log((new meuObjeto).__proto__ === meuObjeto.prototype) // (new meuObjeto) é um objeto que aponta aponta pra Object.prototype
console.log(meuObjeto.__proto__ === Function.prototype) // meuObjeto é uma função que aponta para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) // O prototipo do prototipo da função aponta para o Object.prototype
console.log(Object.prototype.__proto__) // é Null pois depois do Object.prototype não tem mais nada