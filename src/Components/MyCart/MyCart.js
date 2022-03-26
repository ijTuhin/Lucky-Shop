import React from 'react';
import './MyCart.css'
const MyCart = (props) => {
    const { name, img } = props.myCart;
    console.log(name, img);
    return (
        <div className='addedItem'>
            <img src={img} alt="" />
            <p className='itemText'>{name}</p>
        </div>
    );
};

export default MyCart;