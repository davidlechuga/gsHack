import React from 'react';  // importar libreria para hacer uso de ella
import ReactDOM from 'react-dom';  //   renderizar el DOM 
import './index.css';              //    trayendo una hoja de estilos general
import App from './App';           //  APP  nombre de un componente, importandolo desde la ruta relativa APP
import 'bootstrap/dist/css/bootstrap.css'  //  esta carpeta esta en node_modules y tenemos disponible bootrap dentro de mi aplicativo.

ReactDOM.render(<App />, document.getElementById('root')); //  ID ROOT