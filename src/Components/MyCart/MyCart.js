import React from 'react';
import './MyCart.css'
const MyCart = (props) => {
    const { name, img } = props.myCart;
    // let cartItemName = [];
    // for (const product of myCart) {
    //     var item = product.name;
    //     var img = product.img;
    //     cartItemName.push(item)
    // }
    console.log(name, img);
    return (
        <div>

            <p>{name}</p>
            {/* <p>{cartItemName}</p> */}

        </div>
    );
};

export default MyCart;