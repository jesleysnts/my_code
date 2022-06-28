import React, { useState } from "react";
import "./components/Card.css";
import "./App.css";
import Card from "./components/Card";
import List from "./mock/list";

export default function App() {
  const [list, setList] = useState(List);
  const [inputItem, setInputItem] = useState({
    name: "",
    categoria: "",
    value: "",
  });

  const removeItem = (pos) => {
    const filtered = list.filter((i, posicaoItem) =>
      pos === posicaoItem ? false : true
    );

    setList(filtered);
  };

  return (
    <>
      {list.map((i, pos) => (
        <Card card={i} remove={removeItem} pos={pos}></Card>
      ))}
      <input
        type="text"
        value={inputItem.name}
        onChange={(e) =>
          setInputItem({
            name: e.target.value,
            categoria: inputItem.categoria,
            value: inputItem.value,
          })
        }
      ></input>

      <input
        type="text"
        value={inputItem.categoria}
        onChange={(e) =>
          setInputItem({
            name: inputItem.name,
            categoria: e.target.value,
            value: inputItem.value,
          })
        }
      ></input>

      <input
        type="value"
        value={inputItem.value}
        onChange={(e) =>
          setInputItem({
            name: inputItem.name,
            categoria: inputItem.categoria,
            value: e.target.value,
          })
        }
      ></input>

      <button
        onClick={() => {
          setList([
            ...list,
            {
              name: inputItem.name,
              categoria: inputItem.categoria,
              value: inputItem.value,
            },
          ]);
          setInputItem({
            name: "",
            categoria: "",
            value: "",
          });
        }}
      >
        +
      </button>
    </>
  );
}

// Argumento e parâmetro
// Param: quando ta criando a função (ele vira o que o argumento enviou)
// Arg: quando ta chamando a função (informação enviada)
