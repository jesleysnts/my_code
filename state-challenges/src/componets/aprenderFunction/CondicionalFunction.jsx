import React, {useState} from "react";

export default function CondicionalFunction (props) {
    
    const [item, setItem] = useState(false)

    function primeiro () {
        setItem(true)
    }

    function segundo () {
        setItem(false)
    } 

    let div
    if (item) {
      div =  <div>Primeiro</div>
    } else {
        div = <div>Segundo</div>
    }


    return (
        <div>
            {div}
            <button onClick={primeiro}>Primeiro</button>
            <button onClick={segundo}>segundo</button>
        </div>
    )
}

//Props é um objeto, que é criado na chamada do filho no componente pai
