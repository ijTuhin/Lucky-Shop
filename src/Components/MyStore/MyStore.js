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
        </div>
    );
};

export default MyStore;