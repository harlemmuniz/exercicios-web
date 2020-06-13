// tagged template - processa uma template String dentro de uma função
function tag(partes, ...valores) {
    console.log(partes) // Se no console.log colocar tag, vamos ter um Array pra tudo é aquilo que não faz parte do que foi interpolado
    console.log(valores) // E vamos ter outro Array pra tudo é o que está interpolado dentro da String(... valores)
    return 'Outra String' // Vai gerar outra String que não tem a ver com partes ou valores
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
console.log( `${aluno} está ${situacao}.` )