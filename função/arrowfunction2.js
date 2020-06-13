function Pessoa () {
    this.idade = 0

    setInterval(()=> { // Na função arrow, o this não varia como na function
        this.idade++
        console.log(this.idade)
    }, 1000) // Como na função arrow, o this não varia como na function, não é necessário o bind pra amarrar
}

new Pessoa