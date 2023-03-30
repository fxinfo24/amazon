import React from "react";
import "./Cart.css";

const Cart = (props) => {
   const basket = props.basket; //Option 1
//    const {basket} = props;  //Option 2
   console.log(basket);

   let total = 0;
   let shippingTotal = 0;
   for (const product of basket) {
    // console.log(product);
    
    total = total + product.price;
    shippingTotal = shippingTotal + product.shipping;
    // console.log(total);
   }
   const tax = total * 7 /100;
   const grandTotal = total + shippingTotal + tax;

  return (
    <div className="basket">
      <h3>Order summery</h3>
      <p>Selected Items: ${basket.length}</p>
      <p>Total price: ${total} </p>
      <p>Total shipping charge: ${shippingTotal}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
