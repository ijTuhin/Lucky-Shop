import React from 'react';
import './MyCart.css'
const MyCart = (props) => {
    const { name, img } = props.myCart;

    return (
        <div className='addedItem'>
            <img src={img} alt="" />
            <p className='itemText'>{name}</p>
        </div>
    );
};

const ChooseRandom = (props) => {
    console.log(props);
    return (
        <div className='cartSide'>
            <button className='px-4 rounded my-2' onClick={() => props.chooseRandom(props.random)}>Choose 1 for me</button>
        </div>
    )
}
const RemoveItems = (props) => {
    return (
        <div className='cartSide'>
            <button className='px-4 rounded' onClick={() => props.removeItems(props.item)}>Choose again</button>
        </div>
    )
}

export { MyCart, ChooseRandom, RemoveItems };