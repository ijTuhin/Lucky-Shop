import React, { useEffect, useState } from 'react';
import { MyCart, ChooseRandom } from '../MyCart/MyCart';
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
        let newCart = [...carts];
        // selection limit
        if (newCart.indexOf(product) !== -1) {
            alert('Already added!');
        }
        else {
            newCart = [...carts, product];
            if (newCart.length > 4) {
                alert('cannot select more than 4 item');
            }
            else {
                setCart(newCart);
            }
        }
    }
    // const chooseRandom = (item) => {
    //     const random = Math.floor(Math.random() * 5);

    //     setCart(random);
    // }
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
                        {

                        }
                        <ChooseRandom myCart={carts}></ChooseRandom>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyStore;