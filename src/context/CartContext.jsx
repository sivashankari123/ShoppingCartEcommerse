import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import { cartReducer } from "../reducer/CartReducer";

const intialState = {
  cart: [],
  total: 0,
  checkout: false
}
// Load from localStorage
const getLocalCart = () => {
  const data = localStorage.getItem("cartData");

  if(data){
    return JSON.parse(data);
  }

  return intialState;
}

const CartContext = createContext(intialState);

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    cartReducer, 
    intialState,
    getLocalCart
  );

  // Save to localStorage whenever cart changes
  useEffect(()=>{
    localStorage.setItem("cartData", JSON.stringify(state));
  },[state]);


  const addTocart = (product) => {
    const updateCartList = state.cart.concat(product)
    totalCart(updateCartList)

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updateCartList
      }
    });
  }

  const removeFromCart = (product) => {
    const updateCartList = state.cart.filter(current => current.id !== product.id)
    totalCart(updateCartList)
    dispatch({
      type: "REMOVE_TO_CART",
      payload: {
        products: updateCartList
      }
    })
  }

  const totalCart = (products) => {
    let total = 0;
    products.forEach(product => total = total + product.price)
    dispatch({
      type: "UPDATE_CART",
      payload: {
        total
      }
    })
  }
  const value = {
    total : state.total,
    cart: state.cart,
    addTocart,
    removeFromCart
  } 
  // const [state, dispatch] = useReducer(cartReducer, intialState);
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext);
}