import React from "react";

export default function Card(props) {
  return (
    <>
      <h1>{props.card.name}</h1>
      <p>{props.card.categoria}</p>
      <p>{props.card.value}</p>
      <button onClick={() => props.remove(props.pos)}>X</button>
    </>
  );
}

// Estudar objetos por 3 dias 15min
