// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) { 
    console.log('O evento ocorreu!')
}

// document é a referência dentro do browser, que é a página
// vai acessar os elementos através de uma tag 'body', e a resposta é um array [], vai acessar o 0 porque é o primeiro 'body',
// e vai executar a função quando clicar 'onclick'