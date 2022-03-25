import React from 'react';
import './MyProduct.css';
const MyProduct = (props) => {
    const cardStyle = {
        width: '18rem'
    }

    const { name, img, price, id } = props.product
    console.log(img);
    return (
        <div>
            <div className="row gx-4 gy-2 m-3">
                <div className="col-md-4 col-sm-12">
                    <div className='card' style={cardStyle}>
                        <img src={img} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className='card-title'>{name}</h3>
                            <h4 className='card-text'>Price: {price}</h4>
                            <p className='card-text'>ID: {id}</p>
                            <button className='border-0 rounded px-3 py-1 text-white cartBtn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;