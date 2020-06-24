import $ from 'jquery'

// para executar funções dentro de páginas abertas via AJAX
const loadHtmlSuccessCallbacks = [] // atribuiu à uma variável o array de funções (no nosso caso botões filtro)

export function onLoadHtmlSuccess(callback) { // ao ter sucesso ao carregar todo o html, executa uma callback
    if(!loadHtmlSuccessCallbacks.includes(callback)) { //se a call back não estiver dentro do array loadHtmlSuccessCallbacks
        loadHtmlSuccessCallbacks.push(callback) // adicione
    }
}

// Incluir via AJAX as páginas
function loadIncludes(parent) {
    if(!parent) parent = 'body' // Se não existir um parent, o parent será o body
    $(parent).find('[wm-include]').each(function(i, e) { // procure em cada parent cada elemento que tiver um wm-include e execute uma função
        const url = $(e).attr('wm-include') // quando encontra, adicione o atributo no elemento encontrado e armazene em url
        $.ajax({ // fazendo a requisição via AJAX e jQuery
            url, // recebe a url (caminho da página) com o atributo (wm-include) armazenado
            success(data) { // e se sucesso, carrega o conteúdo (data)
                $(e).html(data) // adiciona o conteúdo na página
                $(e).removeAttr('wm-include') // e remove o wm-include para não chamar mais vezes

                // invocando cada uma das funções callbacks (que há nos htmls) quando carregar os html com sucesso
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e) // executa a função de incluir
            }
        })
    })
}

loadIncludes()