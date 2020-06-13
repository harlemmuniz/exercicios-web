const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ff3',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
    
}

document.querySelectorAll('.tag').forEach(elemento => { // em documento vai selecionar todos os elementos com a tag .tag, e vai receber uma função com o parametro elemento
    const tagName = elemento.tagName.toLowerCase() // criou uma const tagName que muda o elemento para caixa baixa

    elemento.style.borderColor = colors.get(tagName) // adicionou um fundo ao elemento

    if (!elemento.classList.contains('nolabel')) { // se o elemento em sua classe de lista conter 'nolabel'
        const label = document.createElement('label') // vai adicionar dentro do elemento um label (etiqueta)
        label.style.backgroundColor = colors.get(tagName) // etiqueta que tem o fundo
        label.innerHTML = tagName // muda de label para a tagName
        elemento.insertBefore(label, elemento.childNodes[0]) /* uma tag pai podem ter varios filhos, e ai vai inserir essa label antes da primeira tag, primeiro filho*/
    }
})