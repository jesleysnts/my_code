import React, {useState}from "react";


export default function Contador (props) {
    
    const [cont, setCont] = useState(0)

    function mudarNum () {
        setCont(1)
    }
    
    return (
    <div>
        <h2> Contador (Função)</h2>
        {cont}
        <button onClick={mudarNum}>Mudar Número</button>
    </div>
    )
}