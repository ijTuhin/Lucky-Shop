import React from 'react';
import MyCart from '../MyCart/MyCart';
import MyProduct from '../MyProducts/MyProduct';
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
                        <MyProduct></MyProduct>
                    </div>
                    <div className="cart col-3 border">
                        <MyCart></MyCart>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyStore;