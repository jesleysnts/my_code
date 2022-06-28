import React from "react";

//1. Challenges

export default class ComponentDidMount extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contador: 0
        }
    }

    mudarNumero= () => {
        this.setState({
            contador: 1
        })
    }

    componentDidMount () {
        this.setState({
            contador:5
        }) 
    }

    render() {
        return(
            <div>
                <h2>Mudar Número (Classes)</h2>
                <p>{this.state.contador}</p>
                <button onClick={this.mudarNumero}>Mudar Número</button>
            </div>
        )
    }
}