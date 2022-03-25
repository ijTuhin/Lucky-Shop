import React from 'react';
import './MyCart.css'
const MyCart = () => {
    return (
        <div>
            <h2>Cart will be stored here</h2>
            <button className='px-4 rounded my-2'>Choose 1 for me</button><br />
            <button className='px-4 rounded'>Choose again</button>
        </div>
    );
};

export default MyCart;