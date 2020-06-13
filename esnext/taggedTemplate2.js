
function real(partes, ...valores) { // função real vai converter valores declarados de número simples para real (R$XX,XX)
    const resultado = [] // vai gerar uma constante resultado que inicialmente vai ser um array para inserir os valores
    valores.forEach((valor, indice) => { // cada um dos valores vai receber valor e indice
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace(".", ",")}` 
        // (isNaN(valor) SE NÃO FOR VALOR NÚMERCO) (? RETORNA valor) (: SE FOR RETORNA `R$${valor.toFixed(2)}` )
        resultado.push(partes[indice], valor) // resultado vai puxar os indices de partes ('1'1 vez de'1' e 'ou 3 vezes de')
        // e valores (preco e parcela)
    })
    return resultado.join('') // join reconstrói a frase com os valores no array gerando uma String ''
}

const preco = 29.9 // 29.9 com a função real passa para R$29,90
const precoParcela = 11 // 11 com a função real passa para R$11,90
console.log(real `1 vez de ${preco} ou 3 vezes de ${precoParcela}` + `.`) // com o real, os valores serão passados pra reais