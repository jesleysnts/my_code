import * as React from "react";
import { Box, Center, HStack, Input, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";
import List from "./list";

export default function App() {
  const [list, setList] = React.useState(List);
  const [input, setInput] = React.useState("");

  const removeItem = (posicaoItem) => {
    console.log(posicaoItem, "aqqqquuuiiiii");
    const filtered = list.filter((i, pos) =>
      posicaoItem === pos ? false : true
    );
    setList(filtered);
  };

  return (
    <Box justifyContent="center">
      <ChakraProvider>
        <Center>
          <VStack
            mt="100px"
            h="400px"
            w="500px"
            justifyContent="center"
            bg="#BC8F8F"
          >
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                </tr>
              </thead>
            </table>

            {list.map((i, pos) => (
              <Center mt="30px" key={pos}>
                <Card card={i} remove={removeItem} pos={pos}></Card>
              </Center>
            ))}

            <HStack>
              <Input
                color="white"
                type="text"
                placeholder="Produto"
                width="auto"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                colorScheme="blue"
                border="1px"
                onClick={() => {
                  setList([...list, { nome: input }]);
                  setInput("");
                }}
              >
                Adicionar
              </Button>
            </HStack>
          </VStack>
        </Center>
      </ChakraProvider>
    </Box>
  );
}
