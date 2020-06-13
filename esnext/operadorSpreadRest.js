// operador ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario} // criou um objeto clone que vai contar "ativo" e os valores de funcionario espalhados

console.log(funcionario)
console.log(clone) // clone não afeta o objeto funcionario

// usar spread com array
const grupoA = [ 'João', 'Pedro', 'Gloria' ]
const grupoFinal = [ 'Maria', 'Rafaela', ...grupoA]

console.log(grupoFinal) // mostra um novo array com Maria, Rafaela e os atributos de grupoA
console.log(grupoFinal.sort()) // e ainda pode colocar em ordem alfabetica