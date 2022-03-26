import React, { useEffect, useState } from 'react';
import { MyCart, ChooseRandom, RemoveItems } from '../MyCart/MyCart';
import MyProduct from '../MyProducts/MyProduct';
import './MyStore.css'
const MyStore = () => {

    // To load data
    const [products, setProducts] = useState([]);
    const [carts, setCart] = useState([]);
    const [random, setRandom] = useState([])

    // To fetch data
    useEffect(() => {
        fetch('MyProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // Getting data from MyProduct to MyStore
    let newCart = [...carts];
    const clickAddToCart = (product) => {
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
    const removeItems = (item) => {
        const emptyValue = [];
        setCart(emptyValue);
    }
    const chooseRandom = (random) => {
        const value = carts[Math.floor(Math.random() * carts.length)];
        setRandom(value);
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
                        <ChooseRandom
                            random={random}
                            chooseRandom={chooseRandom}
                        ></ChooseRandom>
                        <RemoveItems
                            myCart={carts}
                            removeItems={removeItems}
                        ></RemoveItems>
                    </div>
                </div>
            </main>

            <div className='mb-5 d-flex justify-content-center align-items-center'>
                <button class="btn btn-primary px-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">FAQ</button>
                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                    aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title px-2 mt-2" id="offcanvasWithBothOptionsLabel">|| Question & Answers ||</h5>
                    </div>
                    <div class="offcanvas-body px-4">
                        <div class="offcanvas-title mb-3 d-inline-flex flex-column">
                            <h6>1. How react works?</h6>
                            <small>Pure JavaScript এ লিখা কিছু component এর html code(যা মূলত JSX), একে screen এ show করতে react কাজ করে। এক্ষেত্রে react DOM কম্পোনেন্ট থেকে convert করে আনা html code কে ওয়েভপেইজে শো করে। এখানে রিয়েক্ট ব্রাউজারের ডমের মতোই একটি ডম ক্রিয়েট করে, যা আসলে একটি ভার্চুয়াল ডম।</small>
                        </div>
                        <br />
                        <div class="offcanvas-title d-inline-flex flex-column">
                            <h6>2. Differences between Props & State.</h6>
                            <small>Props এবং State এর মধ্যে main difference হলো, props can be used externally by another component, কিন্তু state কে externally use করা যায় না। এছাড়া child component Props কে access করতে পারে, যা State এর ক্ষেত্রে করা যায় না। এদিকে State কে চাইলে চেঞ্জ করা গেলেও Props কে চেঞ্জ করা যায় না, শুধু read করা যায়। Props এর মাধ্যমে আমরা component এর সাথে সম্পর্ক স্থাপন করতে পারি, আর State মূলত Dynamic changes নিয়ে কাজ করে। </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyStore;