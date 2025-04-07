import React from 'react';
import { useCart } from '../stores/context/CartContext';
import './UserCartc.css'; // Importing external CSS
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';
const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
    <div className='page1'>
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-heading">🛒 Your Cart Items</h1>
        {cartItems.length === 0 ? (
          <p className="empty-cart">No items in the cart</p>
        ) : (
          
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-image">
                  <img src={item.image} alt={item.product} />
                </div>
                <div className="cart-details">
                  <h3 className="cart-product">{item.product}</h3>
                  <h2 className="cart-price">₹{item.price}</h2>
                  <h3 className="cart-model">{item.model}</h3>
                  <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </div>
            ))}
           
            <button className="place-order-btn">
            <Link to="/PlaceOrder">Place Order
            </Link></button>
         
          </>
        )}
      </div>
      <Footer/>
      </div>
 

    </>
  );
};

export default UserCart;