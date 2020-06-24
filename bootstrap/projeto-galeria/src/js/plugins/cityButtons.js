import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 100

function filterByCity(city) { // função filtrar por cidade recebe cidade
    $('[wm-city]').each(function (i, e) { // vai procurar elementos que possuem o parametro wm-city e em cada um
        const isTarget = $(this).attr('wm-city') === city // O elemento recebe o atributo que será uma cidade
            || city === null // ou será nulo
        if (isTarget) { // se for uma das cidade ou null (Todas)
            $(this).parent().removeClass('d-none') // e remove a classe para reorganizar as fotos
            $(this).fadeIn(duration) // mostra os elementos com efeito fadeIn (escolho NY, mostra NY)
        } else { // e o que não for o alvo
            $(this).fadeOut(duration, () => { // esconde os elementos usando um fadeOut
                $(this).parent().addClass('d-none') // adiciona a classe d-none para reorganizar todas as fotos
            })
        }
    })
}

// Atribuindo CityButtons para jQuery
$.fn.cityButtons = function () {
    const cities = new Set // cidade vai criar um novo Set (Set não tem repetição)
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city')) // e adicionar ao Set cities, os valores do atributo wm-city dos elementos sem repetir (Rio de Janeiro, Florianópolis e New York) sem repetir (Set)
    })

    const btns = Array.from(cities).map(city => { // botões vai receber o Set de cities, converter pra Array, e vai fazer um map pra transformar o array em outro
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city) // vai adicionar as classes btn e btn-info(criar um botão) e o conteudo de city ao botão
        btn.click(e => filterByCity(city)) // ao clicar no botão, atribui a cidade ao FilterByCity e executa o fadeIn
        return btn // e retorna o botao
    })

    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas') // botão Todas (as cidades) foi criado, recebendo classes e estando sempre ativo
    btnAll.click(e => filterByCity(null)) // ao clicar atribui ao filterByCity null, com isso executa o fadeOut
    btns.push(btnAll) // adiciona no fim o botão Todas

    const btnGroup = $('<div>').addClass(['btn-group']) // grupo de botões criado dentro de uma div que recebe a classe btn-group
    btnGroup.append(btns) // adicionou botões dentro da div

    $(this).html(btnGroup)
    return this
}
//
onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons()
})
