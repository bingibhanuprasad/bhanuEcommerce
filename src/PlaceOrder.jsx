// import React from 'react';
// import { useCart } from './stores/context/CartContext';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from './stores/context/AuthContext'; // Import authentication context
// import './PlaceOrder.css';
// import Navbar from './stores/Components/Navbar';

// const PlaceOrder = () => {
//   const { cartItems } = useCart();
//   const { isLoggedIn } = useAuth(); // Get login state from auth context
//   const navigate = useNavigate();

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + Number(item.price), 0);
//   };

//   const handleConfirmOrder = () => {
//     console.log("User Logged In Before Confirm Order:", isLoggedIn);
    
//     if (isLoggedIn) {
//       navigate('/ConfirmOrder'); // Redirect to Confirm Order page
//     } else {
//       navigate('/SignIn'); // Redirect to Login page if not logged in
//     }
//   };
  

//   return (
//     <>
//       <Navbar />
//       <div className="order-container">
//         <h1 className="order-heading">📦 Confirm Your Order</h1>
//         {cartItems.length === 0 ? (
//           <p className="empty-order">Your cart is empty. Add items to proceed.</p>
//         ) : (
//           <>
//             <div className="order-summary">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="order-item">
//                   <div className="order-image">
//                     <img src={item.image} alt={item.product} />
//                   </div>
//                   <div className="order-details">
//                     <h3 className="order-product">{item.product}</h3>
//                     <h2 className="order-price">₹{item.price}</h2>
//                     <h3 className="order-model">{item.model}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="order-total">
//               <h2>Total: ₹{calculateTotal()}</h2>
//             </div>
//             {/* Call handleConfirmOrder when button is clicked */}
//             <button className="confirm-order-btn" onClick={handleConfirmOrder}>
//               Confirm Order
//             </button>
//             <Link to="/" className="back-to-home">Go Back</Link>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default PlaceOrder;




import React from 'react';
import { useCart } from './stores/context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './stores/context/AuthContext'; 
import './PlaceOrder.css';
import Navbar from './stores/Components/Navbar';
import Footer from './stores/Components/Footer';

const PlaceOrder = () => {
  const { cartItems } = useCart();
  const { isLoggedIn } = useAuth(); // Get login state
  const navigate = useNavigate();

  console.log("User isLoggedIn:", isLoggedIn); // Debugging

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0);
  };

  const handleConfirmOrder = () => {
    console.log("Before Confirm Order - isLoggedIn:", isLoggedIn);
    
    if (isLoggedIn) {
      navigate('/ConfirmOrder'); 
    } else {
      
      navigate('/SignIn');
   alert("Pleae Login...")
  return;
    }
  };

  return (
    <>
    <div className='page1'>
      <Navbar />
      <div className="order-container">
        <h1 className="order-heading">📦 Confirm Your Order</h1>
        {cartItems.length === 0 ? (
          <p className="empty-order">Your cart is empty. Add items to proceed.</p>
        ) : (
          <>
            <div className="order-summary">
              {cartItems.map((item) => (
                <div key={item.id} className="order-item">
                  <div className="order-image">
                    <img src={item.image} alt={item.product} />
                  </div>
                  <div className="order-details">
                    <h3 className="order-product">{item.product}</h3>
                    <h2 className="order-price">₹{item.price}</h2>
                    <h3 className="order-model">{item.model}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total">
              <h2>Total: ₹{calculateTotal()}</h2>
            </div>
            <button className="confirm-order-btn" onClick={handleConfirmOrder}>
              Confirm Order
            </button>
            <Link to="/" className="back-to-home">Go Back</Link>
          </>
        )}
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default PlaceOrder;
