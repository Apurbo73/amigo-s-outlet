// Context API er page

import { useState, useContext, createContext, useEffect } from "react";
const CartContext = createContext();
//Declaring Gobal State:
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  //setting / getting cart state in local starage:
  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  },[]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

//making custom hooks
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
