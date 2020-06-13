function Carro(velocidadeMaxima = 200, delta =5) { // A função Carro (mais a frente poderá criar outros) recebe valores padrões de velocidadeAtual e delta (aceleração)
    // atributo privado, apenas para o escopo da função Carro
    let velocidadeAtual = 0 // Adicionou variável let inicial, mas como pode variar, usou let, se não variasse, escolheria const

    // metodo publico dentro da função construtora Carro
    this.acelerar = function () { // Criando uma função this que vai acessar a função Carro, que vai executar a função acelerar
        if (velocidadeAtual + delta <= velocidadeMaxima) { // Se a velocidade maxima for maior que a velocidade + acelerar uma vez
            velocidadeAtual += delta // Acelera
        } else {
            velocidadeAtual = velocidadeMaxima // Se não for, a velocidade atual para na velocidade máxima
        }
    } 

    // metodo publico dentro da função construtora Carro
    this.getVelocidadeAtual = function () { // Função para acessar (this) a função construtora Carro, e pegar a velocidade atual (getVelocidadeAtual) que recebe uma função
        return velocidadeAtual // E essa função retorna a velocidade atual
    }
}
// Vai criar duas instancias diferentes (uno e ferrari) através da função construtora

const uno = new Carro // Função construtora, criou o uno, que é o Carro criado no inicio, como não atribuiu valor, assume os padrões (200, 5)
uno.acelerar () // Executa a função adicionar velocidade 5(delta) à velocidade do carro (velocidade atual)
console.log('A velocidade atual do Uno é', uno.getVelocidadeAtual(), 'km/h') // Mostra a velocidadeAtual do veículo

const ferrari = new Carro(350, 20) // Função construtora, criou o uno, que é o Carro criado no inicio, como e atribuiu valores, descartando os padrões 
ferrari.acelerar() // Executa a função adicionar velocidade 20(delta) à velocidade do carro (velocidade atual)
ferrari.acelerar()
ferrari.acelerar()
console.log('A velocidade atual da Ferrari é de', ferrari.getVelocidadeAtual(), 'km/h') // Mostra a velocidadeAtual do veículo