import React from 'react';


const ProductList = (props) => {
    return (
        <div>
            <h1>Products</h1>
            <div className="product-container">
            {props.products.map(item => {
                return (
                    <div key={item.key} >
                        <h3>{item.product}</h3> 
                        <p>{item.price.toFixed(2)}</p>
                        <button 
                        onClick={props.onAddProduct} 
                        value={`${item.product } ${item.price}`}
                        >Buy</button>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default ProductList;