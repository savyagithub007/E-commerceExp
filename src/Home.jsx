import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Navbar from "./component/Navbar"
import { useState } from "react"
import { createContext } from "react"

export const ecomContext = createContext(null);

function Home() {
  const [cart, setCart] = useState([])

    function handleAddToCart(productToAdd) {
      const productAddingToCart = {...productToAdd, quantity: 1};
        setCart([...cart, productAddingToCart]);
    }

    function isProductInCart(product) {
      const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
      });
    return productFound;
    }

   function handleRemoveFromCart(productID) {
    setCart(
    cart.filter((cartItem) => {
    return cartItem.id !== productID;
  }));
   } 


   function getProductQuantity(productID) {
    const productFound = cart.find((cartItem) => {
    return cartItem.id === productID;
  });
  return productFound.quantity;

  // return cart.find(cartItem => cartItem.id === productID).quantity;
  }

  function increment(productID) {
    setCart(
      cart.map((cartItem) => 
        cartItem.id === productID
      ? {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
      )
    )
  }

  function decrement(productID) {
    setCart(
      cart.map((cartItem) => 
        cartItem.id === productID
      ? {...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
      )
    )
  }
  
   function decrement(productID) {
    setCart(
      cart.map((cartItem => cartItem.id === productID 
      ? {...cartItem, quantity: cartItem.quantity - 1} 
      : cartItem)))
   }

  return (
   <BrowserRouter>
   <ecomContext.Provider value={{
    cart, 
    setCart,
    handleAddToCart,
    isProductInCart,
    handleRemoveFromCart,
    increment,
    decrement,
    getProductQuantity,
    }}>
   <Navbar />
   <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
   </Routes>
   </ecomContext.Provider>
   </BrowserRouter>
  )
}

export default Home
