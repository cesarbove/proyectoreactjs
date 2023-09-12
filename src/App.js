import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const [contador, setContador]=useState(0)
  // console.log(contador)
  // console.log(setContador)

  let contadorSinEstado=0

  function sumarSinEstado (){
    contadorSinEstado++
    console.log(contadorSinEstado)

  }

  function sumaConEstado(){
    setContador(contador+1)
  }

  return (
   <div>
    <NavBar texto='soy un texto' numero={1} valor={true} >
      <h1>Children1</h1>
      <h1>Children2</h1>
    </NavBar>
    <br/>
    <br/>
    <div>

      <h1>Bienvenidos a nuestra tienda Online</h1>
      <button onClick={sumarSinEstado} >Ingresar sin registrar</button>
      <br/><div style={{marginLeft:'30px'}}><strong>{contadorSinEstado}</strong></div><br />

      <button onClick={sumaConEstado}>Registrarme</button>
      <br/><div style={{marginLeft:'30px'}}><strong>{contador}</strong></div>

      <ItemListContainer greeting='Si ya estas registrado:' />

    </div>
   </div>
  );
}

export default App;
