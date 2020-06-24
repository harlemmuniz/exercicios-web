import React, { Component } from 'react'

export default class Saudacao extends Component {
    
    // tipo e nome (states) recebem as propriedades passadas no index.js
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    // cria uma função construtora que vai externar para o super o this.setTipo e setNome
    constructor(props) {
        super(props)
        
        // bind vai fazer o this.setTipo dos inputs no render apontar para Saudacao
        // Pois constructor é uma instancia de Saudacao
        this.setTipo = this.setTipo.bind(this)
        
    }

    // ao alterar os states, altera os componentes com setTipo e setNome
    setTipo(e) {
        // this aponta para o componente atual )constructor (props)
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    // vai renderizar na pagina as informações
    render() {

        // tipo e nome recebem os estados passados no index.js
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo}, {nome}!</h1>
                <hr/>
                {/* Desse modo, precisa fazer o this apontar para saudação (constructor) */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                {/* Desse modo vai executar a função setNome para alterar o componente, e a função já aponta para saudacao */}
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}