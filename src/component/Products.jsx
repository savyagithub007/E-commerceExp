import Product from "./Product";
import Lenis from "lenis";
import '../index.css';
import { useEffect } from "react";

function Products({ products }) {

  useEffect(() => {
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  })
  

  if (!products || products.length === 0) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="flex justify-center p-[5vw] bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;