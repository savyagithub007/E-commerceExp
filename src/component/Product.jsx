import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ecomContext } from '../Home';
import CartQty from './CartQty';
import { FaRupeeSign } from "react-icons/fa6";

function Product({ product }) {
  const { handleAddToCart, isProductInCart } = useContext(ecomContext);

  return (
    <div className="product w-[18vw] bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Product Image */}
      <div className="product-photo mb-4">
        <img
          src={product.image}
          alt={`${product.title} image`}
          className="object-cover w-full h-[200px] rounded-md transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="content text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{product.title}</h3>

        <p className="text-gray-700 text-base flex justify-center items-center gap-1">
          <FaRupeeSign className="text-gray-700" aria-label="Price" /> {product.price}
        </p>
        {isProductInCart(product) ? (
          // <CartQty product={product} />
          <CartQty productID={product.id} />
        ) : (
          <Link
            to=""
            onClick={() => handleAddToCart(product)}
            className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Add To Cart
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
