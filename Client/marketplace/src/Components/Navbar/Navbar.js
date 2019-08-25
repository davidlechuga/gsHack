import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'  // router cerebro,  route  liga /  link de referencia
import Products from '../Products/Products'
import Form from '../Form/Form'
import Perfil from '../Perfil/Perfil'
import Intereses from '../Intereses/Intereses'
import Home from '../Home/Home'



class Navbar extends Component {
    render(){
        return (
            <Router>
            
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
        <Link className='perro' to="/Home/">
          <div className='perro'></div>
        </Link> 

          <ul className="navbar-nav">      
            <li>
            <Link className="navbar-brand" to="/perfil/">Perfil</Link>  
            </li>
            <li className="nav-item active">
            <Link className="navbar-brand" to="/ubicaciones/">Ubicaciones</Link>
            </li>
            <li className="nav-item">
            <Link className="navbar-brand" to="/intereses/"> Intereses </Link>
            </li>
            <li className="nav-item">
              <a className="navbar-brand" href="/productos/">Productos</a>
            </li>
          </ul>
         </div>
      </nav>
      <Route path="/productos" exact component= {Products}/>  
      <Route path="/intereses/" exact component= {Form}/>
      <Route path="/perfil/"  exact component= {Perfil}/>



            </Router>  //  navbar accede a propiedades de router
  

        )
    }
}

export default Navbar

//  componente creado y a disposicion de los demas componentes