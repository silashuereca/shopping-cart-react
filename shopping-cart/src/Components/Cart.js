import React from 'react';

const Cart = (props) => {
    return (
        <div className="cart-container" style={{right: `${props.position}px`}}>
            <div onClick={props.onClose} className="close"></div>
            <div className="orders"></div>
            <p className="total">Total: $</p>
        </div>
    )
}

export default Cart;