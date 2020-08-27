import React from 'react';

const Cart = (props) => {
    
    const totalPrice = props.cart.reduce( (accumulator, course) => accumulator + course.price, 0);
    return (
        <div>
            <p>Courses Enrolled: {props.cart.length} </p>
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default Cart;