import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header"
import ProductList from "./Components/ProductList"
import CartBtn from "./Components/CartBtn"
import Cart from "./Components/Cart"

class App extends Component {
  state = {
    cartPosition: -500,
    products: [
      {product: 'Shoes', price: 9.99, key: 1},
      {product: 'Pants', price: 45.99, key: 2},
      {product: 'Shirt', price: 25.99, key: 3},
      {product: 'Hat', price: 45.50, key: 4},
      {product: 'Socks', price: 13.70, key: 5},
      {product: 'Boxers', price: 25.89, key: 6}
    ],
    cartProducts: [],
  }

  // hiding the cart panel or closing it
  handleClose = () => {
    return this.setState({
      cartPosition: -500
    })
  }

// opening cart panel
  handleOpen = () => {
    return this.setState({
      cartPosition: 0,
    })
  }

// Add product to cart
handleAddProduct = (e) => {
const value = e.target.value
const newArray = value.split(' ');
  
  const newArray = [...this.state.cartProducts, {value}]

  this.setState({
    cartProducts: newArray
  })
  
}
  
  render () {
    console.log(this.state.cartProducts)
    return (
      <div className="App">
      <CartBtn onOpen={this.handleOpen}/>
      <Cart position={this.state.cartPosition} onClose={this.handleClose}/>
      <Header />
      <ProductList onAddProduct={this.handleAddProduct} products={this.state.products}/>
    </div>
    )
  }
}

export default App;
