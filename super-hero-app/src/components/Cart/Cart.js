import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { person } = props;
    let total = 0;
    for (const movie of person) {
        total = total + movie.age;
    }
    // console.log(props.person)
    return (
        <div className="m-2 card p-4 shadow">
            <h3 className="text-center fb-500">PERSON</h3>
            <h5 className="text-center"> Person Count : {props.person.length}</h5>
            <h5 className="text-center">Total Age :{total}</h5>


        </div>
    );
};

export default Cart;