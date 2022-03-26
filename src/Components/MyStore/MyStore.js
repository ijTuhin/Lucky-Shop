import React, { useEffect, useState } from 'react';
import MyCart from '../MyCart/MyCart';
import MyProduct from '../MyProducts/MyProduct';
import './MyStore.css'
const MyStore = () => {

    // To load data
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);

    // To fetch data
    useEffect(() => {
        fetch('MyProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const clickAddToCart = (product) => {
        // Getting data from MyProduct to MyStore
        const newCart = [...carts, product];
        console.log(newCart);
        setCart(newCart);
    }

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
                <div className='shop'>
                    <div>
                        <div className="product card-group">
                            {
                                products.map(product => <MyProduct
                                    key={product.id}
                                    product={product}
                                    clickAddToCart={clickAddToCart}
                                ></MyProduct>)
                            }
                        </div>
                    </div>

                    <div className="cart shadow p-3 mb-5 bg-body rounded">
                        <h4>Selected Items</h4>
                        {
                            carts.map(cart => <MyCart
                                myCart={cart}
                            ></MyCart>)
                        }
                        <button className='px-4 rounded my-2'>Choose 1 for me</button><br />
                        <button className='px-4 rounded'>Choose again</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyStore;