import React from 'react';

const Cart = (props) => {
    let addTotal = props.orders.map(item => parseInt(item.price));
    let sum = 0;
    for(let i = 0; i < addTotal.length; i++) {
        sum += addTotal[i]
    }

    

    console.log(sum)
    return (
        <div className="cart-container" style={{right: `${props.position}px`}}>
            <div onClick={props.onClose} className="close"></div>
            <div className="orders"></div>
            <p className="total">Total: ${sum}</p>

            <div className="order-container">
                {props.orders.map(item => {
                    return (<div key={item.key} className="order">
                        <div className="product">
                        <h4>{item.product}</h4>
                        </div>
                        <div className="price-container">
                        <p className="delete" onClick={() => props.deleteItem(item.key)}>Delete</p>
                        <p className="price">{item.price}</p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Cart;