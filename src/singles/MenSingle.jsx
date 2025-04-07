
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
 
 
 
import { menData } from '../stores/data/men';
import Navbar from '../stores/Components/Navbar';
import './MobileSingleC.css';
import { useCart } from '../stores/context/CartContext';
import Footer from '../stores/Components/Footer';

const MenSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [alertMessage, setAlertMessage] = useState('');

 
  const productId = Number(id);

  const Product = menData.find(item => Number(item.id) === productId);

  if (!menData || menData.length === 0) {
    return <h2>Loading data...</h2>;
  }

  if (!Product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    addToCart(Product);
    setAlertMessage(`${Product.model} has been added to the cart!`);

 
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  return (
    <>
      <div className='page'>
      <Navbar />
      <div className='ind-page'>
        
        {alertMessage && <div className="alert-box">{alertMessage}</div>}

        <div className="ind-image">

          <img src={Product.image} alt={Product.model} />
        </div>
        <div className="ind-details">
          <h2>{Product.model}</h2>
        </div>
        <div className='ind-price'>
          <h2>₹{Product.price}</h2>
        </div>
        <div className="ind-desc">
          <p>{Product.description}</p>
        </div>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
        <Footer/>
      </div>
      
    </>
  );
};

export default MenSingle;