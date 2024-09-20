import { useContext } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../Home";

function Navbar() {
  const { cart } = useContext(ecomContext);

  return (
    <nav className="bg-zinc-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl text-white font-bold">Ecommerce</h2>
        <ul className="flex gap-6 text-white text-lg">
          <li>
            <Link to="/" className="transition duration-300 hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="transition duration-300 hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/blog" className="transition duration-300 hover:text-gray-300">Blog</Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center transition duration-300 hover:text-gray-300">
              Cart
              <span className="ml-1 bg-blue-500 rounded-full px-2 text-xs">{cart.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="transition duration-300 hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
