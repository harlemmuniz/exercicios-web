// Cadeita de protótipos (prototype chain)
Object.prototype.attr0 ='0'
const avo = {attr1: 'A'} // prototipo do avo é Object.prototype
const pai = {__proto__: avo, attr2: 'B'} // prototipo do pai é o avo
const filho = {__proto__: pai, attr3: 'C'} // prototipo do filho é o pai
console.log(filho.attr0, filho.attr1, filho.attr2) // vai iniciar a procura dos attr iniciando pelo filho

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) { // o this vai permitir que essa função seja acessada fora desse escopo
            this.velAtual += delta
        } else {
            return this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo}: ${super.status()}` // função this permite atributo ser acessado fora do escopo e super acessa atributo do objeto no prototipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(200)
console.log(ferrari.status())