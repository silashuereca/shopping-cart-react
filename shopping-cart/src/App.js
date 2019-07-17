import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header"
import ProductList from "./Components/ProductList"
import CartBtn from "./Components/CartBtn"
import Cart from "./Components/Cart"

class App extends Component {
  render () {
    return (
      <div className="App">
      <CartBtn />
      <Cart />
      <Header />
      <ProductList />
    </div>
    )
  }
}

export default App;
