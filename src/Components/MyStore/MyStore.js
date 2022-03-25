import React from 'react';
import './MyStore.css'
const MyStore = () => {
    return (
        <div>
            <nav className='header'>
                <div className='navbar'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/product">Product</a>
                    <a href="/more">More</a>
                </div>
            </nav>

            <main>
                <div className='row'>
                    <div className="product col-9 border">
                        <h2>Products to be shown</h2>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">something</div>
                            <div className="col-md-4 col-sm-12">something</div>
                            <div className="col-md-4 col-sm-12">something</div>
                            <div className="col-md-4 col-sm-12">something</div>
                            <div className="col-md-4 col-sm-12">something</div>
                        </div>
                    </div>
                    <div className="cart col-3 border">
                        <h2>Cart will be stored here</h2>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyStore;