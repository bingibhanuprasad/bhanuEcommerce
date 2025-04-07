import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
 
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
 
  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };


  const clearCart = () => {
    setCartItems([]); 
   
    console.log("Cart cleared successfully!");
  };

  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
