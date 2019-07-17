import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header"
import ProductList from "./Components/ProductList"
import CartBtn from "./Components/CartBtn"
import Cart from "./Components/Cart"

class App extends Component {
  state = {
    cartPosition: -500,
  }

  // hiding the cart panel or closing it
  handleClose = () => {
    return this.setState({
      cartPosition: -500
    })
  }

  handleOpen = () => {
    return this.setState({
      cartPosition: 0,
    })
  }
  render () {
    return (
      <div className="App">
      <CartBtn onOpen={this.handleOpen}/>
      <Cart position={this.state.cartPosition} onClose={this.handleClose}/>
      <Header />
      <ProductList />
    </div>
    )
  }
}

export default App;
