import React, { useEffect, useState } from 'react';
import MyCart from '../MyCart/MyCart';
import MyProduct from '../MyProducts/MyProduct';
import './MyStore.css'
const MyStore = () => {

    // To load data
    const [products, setProducts] = useState([]);
    // To fetch data
    useEffect(() => {
        fetch('MyProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

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
                        {
                            products.map(product => <MyProduct
                                key={product.id}
                                product={product}
                            ></MyProduct>)
                        }
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