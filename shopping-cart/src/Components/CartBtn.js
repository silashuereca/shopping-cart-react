import React from 'react';

const CartBtn = (props) => {
    return  (
        <div className="cartbtn-container">
            <p onClick={props.onOpen}>Cart</p>
        </div>
    )
}

export default CartBtn;