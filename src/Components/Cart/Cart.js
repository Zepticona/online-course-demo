import React from 'react';
import './cart.css'

const Cart = (props) => {
    
    const totalPrice = props.cart.reduce( (accumulator, course) => accumulator + course.price, 0);
    return (
        <div className="cart-wrapper">
            <h4>Courses Enrolled: {props.cart.length} </h4>
            <h4>Total Price: ${totalPrice}</h4>
        </div>
    );
};

export default Cart;