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
                            <small>Pure JavaScript ??? ???????????? ???????????? component ?????? html code(?????? ???????????? JSX), ????????? screen ??? show ???????????? react ????????? ???????????? ??????????????????????????? react DOM ?????????????????????????????? ???????????? convert ????????? ????????? html code ?????? ??????????????????????????? ?????? ???????????? ??????????????? ????????????????????? ?????????????????????????????? ???????????? ???????????? ???????????? ?????? ????????????????????? ?????????, ?????? ???????????? ???????????? ??????????????????????????? ?????????</small>
                        </div>
                        <br />
                        <div class="offcanvas-title d-inline-flex flex-column">
                            <h6>2. Differences between Props & State.</h6>
                            <small>Props ????????? State ?????? ??????????????? main difference ?????????, props can be used externally by another component, ?????????????????? state ?????? externally use ????????? ????????? ????????? ??????????????? child component Props ?????? access ???????????? ????????????, ?????? State ?????? ???????????????????????? ????????? ????????? ????????? ??????????????? State ?????? ??????????????? ??????????????? ????????? ??????????????? Props ?????? ??????????????? ????????? ????????? ??????, ???????????? read ????????? ???????????? Props ?????? ????????????????????? ???????????? component ?????? ???????????? ????????????????????? ?????????????????? ???????????? ????????????, ?????? State ???????????? Dynamic changes ???????????? ????????? ???????????? </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyStore;