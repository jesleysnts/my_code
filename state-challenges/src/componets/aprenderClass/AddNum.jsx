import React from "react";

//1. Challenges

export default class AddNum extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contador: 0
        }
    }

    mudarNumero= () => {
        this.setState({
            contador: this.state.contador +1
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