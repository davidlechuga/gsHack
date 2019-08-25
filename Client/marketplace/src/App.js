import React, {Component} from 'react';   /* component tiene todos los metodos que nesesito */
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import Perfil from './Components/Perfil/Perfil';
import Home from './Components/Home/Home';

/* html que sea renderizado   */

class App extends Component {
  render(){

       /* creamos el componente, extends trae todo lo que componente sabe */
  return (
    <div className="App">
      <Navbar></Navbar>
     
    </div>
  );
  }
}

export default App;   /*  caundo generamos jsx.  generamos clase de js */ 

                                  /*  nombre del componente que estoy renderizando  */
