import ProductCard from "@components/common/ProductCard";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    const items = localStorage.getItem("cartProducts");
    if (items) {
      const products = JSON.parse(items);
      setProducts(products);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((obj, i) => {
          return (
            <ProductCard isCart={true} product={obj} key={`product-${i}`} onRemove={getCartItems} />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
