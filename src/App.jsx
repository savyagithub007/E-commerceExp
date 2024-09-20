import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./component/Products";

function App() {
  const [products, setProducts] = useState([]);

 useEffect(() => {
  async function fetchData() {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data)
  }
  fetchData();
 })

  return (
    <div className="products">
      {products ?  <Products products={products}  /> : ""}
    </div>
  );
}

export default App;
