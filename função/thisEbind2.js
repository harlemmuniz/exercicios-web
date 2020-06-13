function Pessoa() {
    this.idade = 0 // Idade recebe 0 para poder ser manipulada

    const self = this // Criar uma constante senf, e substituir o this abaixo no .idade++ e console.log por self, é uma forma de driblar isso
    setInterval(function() { // É um temporizador, vai definir de quanto em quanto tempo vai executar a função
        self.idade++ // Vai adicionar 1 pro atributo idade
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // bind amarraria à função this, objeto idade da função pessoa e definido em 1000 ms (1 segundo)
}

new Pessoa // Vai instanciar a partir da função pessoa, vai chamar a função e disparar o intervalo