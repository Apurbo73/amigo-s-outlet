// Context API er page

import { useState, useContext, createContext } from "react";
const CartContext = createContext();
//Declaring Gobal State:
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

//making custom hooks
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
