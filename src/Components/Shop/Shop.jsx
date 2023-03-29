import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);

    // For added new items to cart
    const [basket, setBasket] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setItems(data))
    }, [])

    // From Product.jsx
    const cartBtnHandler = (jinish) => {
        // console.log(jinish);
        const newBasket = [...basket, items];
        setBasket(newBasket);
    };
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {/* <h3>Products goes here: {items.length}</h3> */}
                {/* Get product from array by using map */}
                {
                    items.map(item => <Product
                    key={item.id}
                    item = {item}
                    cartBtnHandler = {cartBtnHandler}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order summery</h3>
                <p>Selected Items: {basket.length}</p>
            </div>
            
        </div>
    );
};

export default Shop;