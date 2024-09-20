import { useContext } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { ecomContext } from "../Home";

function CartQty({ productID }) {
  const { handleRemoveFromCart, increment, decrement, getProductQuantity } = useContext(ecomContext);

  const currentQty = getProductQuantity(productID)

  return (
    <div className="miniCart bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="cartQty flex items-center gap-4">
        <button 
          onClick={() => increment(productID)}
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200">+</button>

        <p className="text-gray-700 font-medium text-lg">{getProductQuantity(productID)}</p>

        <button 
          onClick={() => {
           if (currentQty > 1) decrement(productID);
          }} 
          className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-200"
          disabled={currentQty <= 1}
          >-</button>
      </div>

      <MdOutlineRemoveShoppingCart
        onClick={() => handleRemoveFromCart(productID)}
        className="text-gray-500 text-2xl cursor-pointer hover:text-red-500 transition duration-200"/>
    </div>
  );
}

export default CartQty;
