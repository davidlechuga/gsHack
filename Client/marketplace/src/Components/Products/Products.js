  import React , {Component} from 'react'
  import Product from '../Product/Product'

  //  ATRIBUTO state  (estado de mi componente o contenedor de variables)
  // reaccionar en base al cambio de esos estados

  //  generar peticion a la base de datos con ASYNC para que en paralelo pida datos  +  COMPONENTDIDMOUNT
  // componente exista para qpidamos datos a DB

  //fetch   metodo para interactuar base de datos
  //  dentro de fetch url  de FIREBASE

  //  props  generar compoentes   ::::  HEREDAN PROPIEDADES LOS COMPONENTES HIJOS DEL COMPONENTE PADRE : :::::::

  //  return  de lo que devuleva que sea en .JSON  con su propio  CALLBACK para cuando lo tranforme a .json lo tranforma a DATA
  class Products extends Component {
      state = {products:[]}  //  state con propiedad products con peticion

      async componentDidMount(){
        const response = fetch ('https://dlh-marketplace.firebaseio.com/products/.json')  //  peticion a una base de datos
          .then(results =>{
            return results.json().then (data => {
              console.log(data)

              let productsArray = []   //  react no llave y valor sino , un array 

              for (const prop in data){  //  por cada objeto traeme su respectivo valor
                let item = data[prop]     // genera un item que se comvierta en ese valor de esa llave
                productsArray.push(item)  //   gusardarlo en un array
              }
              this.setState({products:productsArray})  //   array no vacio sino con la base de datos FIREBASE  NOTACION  LLAVE/VALOR 

            })                                        //  REACT  MANEJA MEJOR .JSON
          })
      }

      render () {
          return (
              <div className="container">
              <div className="row">
                {
                  this.state.products.map((product, index) =>{
                    return  <Product
                      image = {product.image}
                      name = {product.name}
                      description = {product.description}
                      price = {product.price}
                      key = {index}
                    
                    />
                  })
                }
              </div>
            </div>
          )
      }
  }

  export default Products