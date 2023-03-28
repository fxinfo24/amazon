import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [item, setItem] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h3>Products goes here: {item.length}</h3>
            </div>
            <div className='cart-container'>
                <h3>Order summery</h3>
            </div>
            
        </div>
    );
};

export default Shop;