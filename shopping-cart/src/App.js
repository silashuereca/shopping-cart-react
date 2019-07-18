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
      {product: 'Shoes', price: 9.00, key: 1},
      {product: 'Pants', price: 45.00, key: 2},
      {product: 'Shirt', price: 25.00, key: 3},
      {product: 'Hat', price: 45.00, key: 4},
      {product: 'Socks', price: 13.00, key: 5},
      {product: 'Boxers', price: 25.00, key: 6}
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
const splitArray = value.split(' ');
const order = {
  product: splitArray[0],
  price: parseInt(splitArray[1]).toFixed(2),
  key: Date.now()
}
  
  const newArray = [...this.state.cartProducts, order]

  this.setState({
    cartProducts: newArray
  })
}

deleteItem = (key) => {
  const filterItems = this.state.cartProducts.filter(item => {
    return item.key !== key;
  })

  this.setState({
    cartProducts: filterItems,
  })
}
  
  render () {
    console.log(this.state.cartProducts)
    return (
      <div className="App">
      <CartBtn onOpen={this.handleOpen} numberOfOrders={this.state.cartProducts}/>
      <Cart 
      position={this.state.cartPosition} 
      onClose={this.handleClose} 
      orders={this.state.cartProducts}
      deleteItem={this.deleteItem}/>
      <Header />
      <ProductList onAddProduct={this.handleAddProduct} products={this.state.products}/>
    </div>
    )
  }
}

export default App;
