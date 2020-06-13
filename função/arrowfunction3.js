// This altera utilizando a função function tradicional
let comparaComThis = function(param) { // Criou variavél que recebe uma função com param
    console.log(this === param) // Chama a função e realiza a comparação se o this é extritamente igual ao parâmetro que será definido posteriormente
}

comparaComThis(global) // Definiu parametro como 'global' e comparou com this

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Amarrou a função comparaComThis apenas com a constante obj, portanto o this equivale ao obj
comparaComThis(global) // Como não tem bind, não amarrou ao obj, portanto o this equivale ao escopo global e não ao obj
comparaComThis(obj) // O parâmetro foi obj, isso que o this equivale ao obj


// This não altera utilizando a função arrow
let comparaComThisArrow = param => console.log(this === param) // Compara se o this é igual ao param utilizando arrow ao invés de function
comparaComThisArrow(global) // O this na função arrow, o this não varia conforme a chamada, ele será sempre associado na função definida
comparaComThisArrow(module.exports) 

comparaComThisArrow = comparaComThisArrow.bind(obj) // Tentou amarrar o comparaComThisArrow ao obj na linha 7
comparaComThisArrow(obj) // Não altera numa função arrow, ele permanece no que foi atribuido na função
comparaComThisArrow(module.exports)