import { Button, Text } from "@chakra-ui/react";
import React from "react";

export default function Card(props) {
  return (
    <>
      <Text borderWidth="1px">{props.card.nome}</Text>
      <Text>{props.card.categoria}</Text>
      <Text>{props.card.valor}</Text>
      <Button
        onClick={() => {
          console.log("clicou", props);
          props.remove(props.pos);
        }}
      >
        {" "}
        X
      </Button>
    </>
  );
}
