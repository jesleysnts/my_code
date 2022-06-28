import React from 'react' 

export default class RenderCondicionalClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            item: true
        }
    }

        primeiro = () => {
            this.setState({
                item:false
            })
        }

        segundo = () => {
            this.setState({
                item:true
            })
        }
        
    render() {
        const item = this.state.item;
        let div;
        if (item) {
            div = <div>Primeiro</div>
        } else {
            div = <div>Segundo</div>
        }
        
        return (
            <div>
                
                <h2>Renderização Condicional (Classes) </h2>
                {div}
                <button onClick={this.segundo}>Primeiro</button>
                <button onClick={this.primeiro}>Segundo</button>
                
            </div>
        )
    }
}