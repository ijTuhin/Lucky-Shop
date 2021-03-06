import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MyProduct.css';
const MyProduct = (props) => {
    const cardStyle = {
        width: '18rem'
    }

    const { name, img, price, id } = props.product
    return (
        <div>
            <div className='card' style={cardStyle}>
                <img src={img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h3 className='card-title'>{name}</h3>
                    <h4 className='card-text'>Price: {price}</h4>
                    <p className='card-text'>ID: {id}</p>
                    <button onClick={() => props.clickAddToCart(props.product)} className='cartBtn'>
                        <p className='btnText'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;