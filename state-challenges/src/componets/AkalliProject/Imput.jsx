import React, { useState } from "react";

//Criar imputs com E-mail, senha e um botão que ao adicionar os itens aparece dentro de uma lista

export default function Imput (props) {
    
    const [name, setName] = useState('Jesley')

    const [email, setEmail] = useState('Email@gmail.com')

    const jes = ['Pedro', 'Ana', 'Lucas', 'Mauro']

    const [list, setList] = useState(jes)
    
    const add = () => {
        setList([...list, name])
    }
   
    //fazer dius usestate um para o emial e outro para o nome o valor dele 

    return (
        <>
            {name}
            <br />
            <input placeholder="Name" onChange={e => setName(e.target.value)} />
            {/*O evento onChange é utilizado para 
            que seja realizada determinada ação após alguma mudança.*/}
            <br />
            {email}
            <br />
            <input type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}></input>
            <br />
            <button onClick={add}>Add</button>
            <ul>
            {list.map((item) => <li>{item}</li> )}
            </ul>
        </>
    )
}