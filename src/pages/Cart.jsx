import React, { useContext, useEffect, useState } from 'react';
import { ecomContext } from '../Home';
import CartQty from '../component/CartQty';
import { Link } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa6";

function Cart() {
  const { cart } = useContext(ecomContext);

  const [cartTotal, setCartTotal] = useState(0);
  const [delivery, setDelivery] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((cartItem) =>{
      total += cartItem.price * cartItem.quantity;
    });
    setCartTotal(total.toFixed(2));
  }, [cart]);

  // Calculate total price
  // const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Shopping Cart</h2>
      
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow">
            {cart.map((item) => (
              <div key={item.id} className="cartItem flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="w-24 h-24">
                  <img
                    src={item.image}
                    alt={`${item.title} Image`}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="ml-6 flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-700 mt-2 flex items-center">
                    Price: <FaRupeeSign className="ml-1 text-gray-700" /> {item.price}
                  </p>
                  <CartQty productID={item.id} />
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex justify-between">
                <span>Subtotal ({cart.length} items):</span>
                <span className="font-medium">
                  <FaRupeeSign className="inline-block" /> 
                  {cartTotal}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Delivery:</span>
                <span className="font-medium">
                {delivery}
                </span>
              </li>
            </ul>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold flex justify-between">
              <span>Total:</span>
              <span className="font-medium">
                {(Number(cartTotal) + Number(delivery)).toFixed(2)}
              </span>
            </h3>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Your cart is empty.{' '}
            <Link to="/" className="text-blue-600 hover:underline">
              Go Shopping
            </Link>
          </h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
