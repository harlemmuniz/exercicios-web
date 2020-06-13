const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // this faz acessar faz acessar o atributo saudacao do objeto dono dessa funcao (pessoa)
    }
}

pessoa.falar() // sem o this no escopo não vai mostrar o valor da saudação
const falar = pessoa.falar // Não amarrou (sem usar bind) à função falar do objeto pessoa, logo undefined, pois esse não tem uma saudacao armazenada
falar() // conflito entre paradgimas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind vai amarrar a função falar ao objeto pessoa
falarDePessoa()

const falar2 = pessoa.falar // Não amarrou (sem usar bind) à função falar do objeto pessoa, logo undefined, pois esse não tem uma saudacao armazenada
falar2()