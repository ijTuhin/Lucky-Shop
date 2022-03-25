import React from 'react';
import './MyProduct.css';
import logo from '../../img/img.png';
const MyProduct = () => {
    const cardStyle = {
        width: '18rem'
    }
    return (
        <div>
            <h2>Products to be shown</h2>
            <div className="row gx-4 gy-2 m-3">
                <div className="col-md-4 col-sm-12">
                    <div className='card' style={cardStyle}>
                        <img src={logo} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h3 className='card-title'>Name</h3>
                            <h4 className='card-text'>Price: $</h4>
                            <p className='card-text'>ID: </p>
                            <button className='border-0 rounded px-3 py-1 text-white cartBtn'>Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">something</div>
                <div className="col-md-4 col-sm-12">something</div>
                <div className="col-md-4 col-sm-12">something</div>
                <div className="col-md-4 col-sm-12">something</div>
            </div>
        </div>
    );
};

export default MyProduct;