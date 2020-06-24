//import React from 'react'
import React, { Fragment } from 'react'

// Para criar duas tags (h1 e h2) é  necessário:

// 1. Envolver todas as tags dentro de uma, uma div por exemplo
// export default props =>
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

// 2. Tag React.Fragment, ou importo o Fragment(linha 2) e uso apenas Fragment
export default props =>
    <Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Até breve!</h2>
    </Fragment>

// 3. Dentro de um array, usando o key para não dar erro no console (lista de linha em tabelas)
// export default props => [
//    <h1 key='h1'>Bom dia {props.nome}!</h1>,
//    <h2 key='h2'>Até breve!</h2>
//]