import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.item);
    const {name, img, price, seller, ratings, quantity} = props.item;
    return (
        <div className='product'>
            {/* <h2>Single Product</h2> */}
            <img src= {img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='p-price'>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
            <button className='add-to-cart-button'>Add to cart</button>
        </div>
    );
};

export default Product;