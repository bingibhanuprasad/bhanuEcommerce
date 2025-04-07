// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import { mobileData } from '../stores/data/mobiles';
// // import Navbar from '../stores/Components/Navbar';
// // import './MobileSingleC.css';
// // import { useCart } from '../stores/context/CartContext';
// // const MobileSingle = () => {
// //   const { id } = useParams();
// //   const{addToCart,cartItems}=useCart();
  
// //   // Convert id to a number for proper comparison
// //   const productId = Number(id);

// //   // Ensure mobileData is loaded and find the product
// //   const Product = mobileData.find(item => Number(item.id) === productId);

// //   // Debugging output
// //   console.log("Received id from URL:", id);
// //   console.log("Converted id to number:", productId);
// //   console.log("Filtered product:", Product);

// //   // Handle loading state
// //   if (!mobileData || mobileData.length === 0) {
// //     return <h2>Loading data...</h2>;
// //   }

// //   // Handle case where no matching product is found
// //   if (!Product) {
// //     return <h2>Product not found</h2>;
// //   }

// //   return (
// //     <>
// //       <Navbar />
// //       <div className='ind-page'>
// //         <div className="ind-image">
// //           <img src={Product.image} alt={Product.model} />
// //         </div>
// //         <div className="ind-details">
// //           <h2>{Product.model}</h2>
// //         </div>
// //         <div className='ind-price'>
// //           <h2>{Product.price}</h2>
// //         </div>
// //         <div className="ind-desc">
// //           <p>{Product.description}</p>
// //         </div>
// //         <button 
// //   onClick={() => {
// //     addToCart(Product);
// //     alert(`${Product.model} has been added to the cart!`);
// //   }}
// // >
// //   Add To Cart
// // </button>
// //       </div>
// //     </>
// //   );
// // };

// // export default MobileSingle;







// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { mobileData } from '../stores/data/mobiles';
// import Navbar from '../stores/Components/Navbar';
// import './MobileSingleC.css';
// import { useCart } from '../stores/context/CartContext';

// const MobileSingle = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();
  
//   const [alertMessage, setAlertMessage] = useState('');

//   // Convert id to a number for proper comparison
//   const productId = Number(id);
//   const Product = mobileData.find(item => Number(item.id) === productId);

//   if (!mobileData || mobileData.length === 0) {
//     return <h2>Loading data...</h2>;
//   }

//   if (!Product) {
//     return <h2>Product not found</h2>;
//   }

//   const handleAddToCart = () => {
//     addToCart(Product);
//     setAlertMessage(`${Product.model} has been added to the cart!`);

//     // Hide the alert after 3 seconds
//     setTimeout(() => {
//       setAlertMessage('');
//     }, 3000);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='ind-page'>
//         {/* Alert Message */}
//         {alertMessage && <div className="alert-box">{alertMessage}</div>}

//         <div className="ind-image">
//           <img src={Product.image} alt={Product.model} />
//         </div>
//         <div className="ind-details">
//           <h2>{Product.model}</h2>
//         </div>
//         <div className='ind-price'>
//           <h2>{Product.price}</h2>
//         </div>
//         <div className="ind-desc">
//           <p>{Product.description}</p>
//         </div>
//         <button onClick={handleAddToCart}>Add To Cart</button>
//       </div>
//     </>
//   );
// };

// export default MobileSingle;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { mobileData } from '../stores/data/mobiles';
// import Navbar from '../stores/Components/Navbar';
// import './MobileSingleC.css';
// import { useCart } from '../stores/context/CartContext';
// const MobileSingle = () => {
//   const { id } = useParams();
//   const{addToCart,cartItems}=useCart();
  
//   // Convert id to a number for proper comparison
//   const productId = Number(id);

//   // Ensure mobileData is loaded and find the product
//   const Product = mobileData.find(item => Number(item.id) === productId);

//   // Debugging output
//   console.log("Received id from URL:", id);
//   console.log("Converted id to number:", productId);
//   console.log("Filtered product:", Product);

//   // Handle loading state
//   if (!mobileData || mobileData.length === 0) {
//     return <h2>Loading data...</h2>;
//   }

//   // Handle case where no matching product is found
//   if (!Product) {
//     return <h2>Product not found</h2>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className='ind-page'>
//         <div className="ind-image">
//           <img src={Product.image} alt={Product.model} />
//         </div>
//         <div className="ind-details">
//           <h2>{Product.model}</h2>
//         </div>
//         <div className='ind-price'>
//           <h2>{Product.price}</h2>
//         </div>
//         <div className="ind-desc">
//           <p>{Product.description}</p>
//         </div>
//         <button 
//   onClick={() => {
//     addToCart(Product);
//     alert(`${Product.model} has been added to the cart!`);
//   }}
// >
//   Add To Cart
// </button>
//       </div>
//     </>
//   );
// };

// export default MobileSingle;







import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mobileData } from '../stores/data/mobiles';
import Navbar from '../stores/Components/Navbar';
import './MobileSingleC.css';
import { useCart } from '../stores/context/CartContext';
import Footer from '../stores/Components/Footer';

const MobileSingle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [alertMessage, setAlertMessage] = useState('');

  // Convert id to a number for proper comparison
  const productId = Number(id);

  const Product = mobileData.find(item => Number(item.id) === productId);

  if (!mobileData || mobileData.length === 0) {
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
        {/* Alert Message */}
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

export default MobileSingle;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../stores/Components/Navbar';
// import './MobileSingleC.css';
// import { useCart } from '../stores/context/CartContext';

// const MobileSingle = () => {
//   const { category, id } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [alertMessage, setAlertMessage] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProductData = async () => {
//       try {
//         const data = await import(`../stores/data/${category}.json`);
//         const productData = data.default;
//         const productId = Number(id);

//         const foundProduct = productData.find(item => Number(item.id) === productId);
//         setProduct(foundProduct || null);
//       } catch (error) {
//         console.error('Error loading product data:', error);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProductData();
//   }, [category, id]);

//   if (loading) {
//     return <h2>Loading data...</h2>;
//   }

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product);
//     setAlertMessage(`${product.model} has been added to the cart!`);

//     // Hide the alert after 3 seconds
//     setTimeout(() => {
//       setAlertMessage('');
//     }, 3000);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='ind-page'>
//         {/* Alert Message */}
//         {alertMessage && <div className="alert-box">{alertMessage}</div>}

//         <div className="ind-image">
//           <img src={product.image} alt={product.model} />
//         </div>
//         <div className="ind-details">
//           <h2>{product.model}</h2>
//         </div>
//         <div className='ind-price'>
//           <h2>{product.price}</h2>
//         </div>
//         <div className="ind-desc">
//           <p>{product.description}</p>
//         </div>
//         <button onClick={handleAddToCart}>Add To Cart</button>
//       </div>
//     </>
//   );
// };

// export default MobileSingle;
