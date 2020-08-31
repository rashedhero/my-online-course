import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
   const cart=props.cart
   const courseTotal=cart.reduce((sum,course)=>sum+course.price,0);
   const tax =courseTotal/10;
    return (
        <div>
            <h1>Total order:{cart.length}</h1>
            <p>course Price:{courseTotal}</p>
            <p>Tax:{tax}</p>
             <p>Grand total:{courseTotal+tax}</p>
             <Button variant="warning">place order</Button>
        </div>
    );
};

export default Cart;