import React, {createContext, useContext, useState} from 'react'

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};