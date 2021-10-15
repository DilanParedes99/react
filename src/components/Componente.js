import React, {Component} from 'react';


// componente basado en funciones expresadas
const Componente = (props) => <h2>{props.msg}</h2>


// componente basado en funcniones
/* function Componente(props) {
    return <h2>{props.msg}</h2>
} */


// componente basado en clases
/* class Componente extends Component {
    render() {
        return <h2>{this.props.msg}</h2>
    }
} */

export default Componente;