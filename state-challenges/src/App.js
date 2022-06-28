import logo from './logo.svg';
import './App.css';
import Card from './componets/layout/Card';
import MudarNumero from './componets/aprenderClass/MudarNum';
import RenderCondicionalClass from './componets/aprenderClass/RenderCondicionalClass';
import CondicionalFunction from './componets/aprenderFunction/CondicionalFunction';
import Contador from './componets/aprenderFunction/Contador';
import ContadorAdd from './componets/aprenderFunction/ContadorAdd';
import AddNum from './componets/aprenderClass/AddNum';
import ComponentDidMount from './componets/aprenderClass/ComponentDidMaunt';
import Imput from './componets/AkalliProject/Imput';

function App() {
  return (
    <div className="App">
      <h1>Aprendendo React</h1>

      
      <Card titulo='Aprender Card' color red>
      <RenderCondicionalClass></RenderCondicionalClass>
      </Card>

      <Card titulo='Aprender Card'>
      <MudarNumero></MudarNumero>
      </Card>

      <Card titulo='Render Condicional Com Funções'>
      <CondicionalFunction numero={10} ></CondicionalFunction>
      </Card>

      <Card titulo='Render Condicional Com Funções'>
        <Contador></Contador>
      </Card>
    
      <Card titulo='Contador add +1 (Função)'>
        <ContadorAdd></ContadorAdd>
      </Card>
    
      <Card titulo='Contador add +1 (Classes)'>
        <AddNum></AddNum>
      </Card>

     
      <Card titulo='Contador add +1 (Classes)'>
        <AddNum></AddNum>
      </Card>

      <Card titulo='Contador add +1 (Classes)'>
        <ComponentDidMount></ComponentDidMount>
      </Card>

      <Card titulo='Akalli Project'>
        <Imput></Imput>
      </Card>

    </div>
  );
}

export default App;
