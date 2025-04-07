import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { speakerData } from '../stores/data/speaker';
import Navbar from '../stores/Components/Navbar';
import './MobileSingleC.css';
import { useCart } from '../stores/context/CartContext';
import Footer from '../stores/Components/Footer';

const SpeakerSingle = () => {
    const { id } = useParams();
    const [alertMessage, setAlertMessage] = useState('');
    const { addToCart }=useCart();

    const productId=Number(id)
    const speaker = speakerData.find(item => Number(item.id) === productId);

    if (!speakerData || speakerData.length === 0) {
        return <h2>Loading data...</h2>;
    }

    if (!speaker) {
        return <h2 >Speaker not found</h2>;
    }

    const handleAddToCart = () => {
      addToCart(speaker);
        setAlertMessage(`${speaker.model} has been added to the cart!`);
        setTimeout(() => {
            setAlertMessage('');
        }, 3000);
    };

    return (
        <>
        <div className='page'>         
             <Navbar />
                <div className="ind-page">
             
            {alertMessage && <div className="alert-box">{alertMessage}</div>}
          
                <div className="ind-image">
                    <img src={`/${speaker.image}`} alt={speaker.brand} className="speaker-image" />
                </div>
                <div className="ind-details">
          <h2>{speaker.model}</h2>
        </div>
        <div className='ind-price'>
          <h2>₹{speaker.price}</h2>
        </div>
        <div className="ind-desc">
          <p>{speaker.description}</p>
        </div>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
      <Footer/>
      </div>
            
        </>
    );
};

export default SpeakerSingle;