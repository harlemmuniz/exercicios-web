// criando a barreira (cano - obstaculo)

function novoElemento(tagName, className) { // a função novoElemento vai receber uma tag com nome e classe
    const elem = document.createElement(tagName) // constante elem vai criar um elemento com uma tag name
    elem.className = className // e vai atribuir ao elemento a classe informada
    return elem
}

function Barreira(reversa = false) { // a função barreira recebe parametro reversa se é falso ou não
    // a barreira será uma div no html que irá conter uma classe ('barreira')

    // o this será utilizado daqui pra frente pois usaremos as barreiras para setar a função de colisão do passaro com elas fora destes elementos
    this.elemento = novoElemento('div', 'barreira') // o elemento recebe uma tag (div) e uma classe (barreira)

    // o elemento criado vai receber dois elementos:
    const borda = novoElemento('div', 'borda') // a borda recebe uma tag (div) e uma classe (borda)
    const corpo = novoElemento('div', 'corpo') // o corpo recebe uma tag (div) e uma classe (corpo)

    // para cada elemento acima, é criado dois elementos filhos (corpo e borda) no html em uma ordem:
    this.elemento.appendChild(reversa ? corpo : borda) // na primeira chamada é falsa (reversa), cria corpo-borda (barreira de cima)
    this.elemento.appendChild(reversa ? borda : corpo) // e na segunda chamada vai ser true, borda-corpo (barreira de baixo)

    this.setAltura = altura => corpo.style.height = `${altura}px` // o elemento vai ter uma altura aleatoria, e que será alterada, onde só será alterado o height
}

// const b = new Barreira(true) // constante b executa a função barreira (criando a barreira) e setou true (na função validando o false), para ser reversa (corpo-borda) de cima
// b.setAltura(200) // definiu a altura de b (barreira) como 200
// document.querySelector('[wm-flappy]').appendChild(b.elemento) // foi no elemento do documento wm-flappy (área do jogo) e criou um filho chamado 

// criando o par-de-barreiras no elemento wm-flappy (área do jogo)
function ParDeBarreiras(altura, abertura, x) { // criou a função PardeBarreiras (onde vai atribuir altura, abertura e posição x)
    this.elemento = novoElemento('div', 'par-de-barreiras')

    // criando os elementos e definindo barreira de cima e barreira de baixo dentro do par-de-barreiras
    this.superior = new Barreira(true) // define a barreira de cima (se true, o reverso é falso, e a barreira é a superior)
    this.inferior = new Barreira(false) // define a barreira de baixo (como é falso, o reverso é true, e a barreira é a interior)

    this.elemento.appendChild(this.superior.elemento) // criou a barreira de cima
    this.elemento.appendChild(this.inferior.elemento) // criou a barreira de baixo

    // quando executar a função ParDeBarreira, vai executar a função sortear abertura
    this.sortearAbertura = () => {
        // a altura superior é calculada através de um número sorteado (de 0 a 1) que vai multiplicar pela diferença entre altura e abertura, tendo uma altura no jogo
        const alturaSuperior = Math.random() * (altura - abertura) // numero aleatorio (altura aleatoria) * (altura do jogo - abertura)
        const alturaInferior = altura - abertura - alturaSuperior // pega altura total, menos a abertura, menos a alturaSuperior, o que sobrar seta como a altura
        this.superior.setAltura(alturaSuperior) // atribuiu o calculo da altura superior no elemento superior (barreira de cima)
        this.inferior.setAltura(alturaInferior) // atribuiu o calculo da altura inferior no elemento inferior (barreira de baixo)
    }

    // vai definir onde a barreira vai ser colocada no eixo X
    // parseInt converte pra número inteiro
    // split adiciona uma posição (x em px) no conjunto de elementos ou barreiras (array)
    // pega a posição x
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) // vai alterar o estilo, ou css, a posição na esquerda
        // altera o x apartir da posição que foi passado
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x) // vai setar o x na função acima
}

// const b = new ParDeBarreiras(700, 300, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da área do jogo, vai enviar novamente para o inicio
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio &&
                par.getX() < meio
            if (cruzouOMeio) notificarPonto()
        })
    }
}

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 300, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left &&
        b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top &&
        b.top + b.height >= a.top
    return horizontal && vertical
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior) ||
                estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20)
    }
}

new FlappyBird().start()