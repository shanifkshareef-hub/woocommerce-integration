import { Button } from "antd";
import React from "react";
import { IProduct } from "src/interfaces/common";

const ProductCard: React.FC<{
  product: IProduct;
  isCart: boolean;
  onRemove?(): void;
}> = ({ product, isCart, onRemove }) => {
  const handleAddToCart = () => {
    const temp = localStorage.getItem("cartProducts");

    let newProducts;
    if (temp) {
      const cartProducts = JSON.parse(temp ?? "");
      newProducts = [...cartProducts, product];
    } else {
      newProducts = [product];
    }
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
  };

  const handleRemoveFromCart = () => {
    const temp = localStorage.getItem("cartProducts");
    if (temp) {
      const cartProducts = JSON.parse(temp ?? "");

      const filtered = cartProducts.filter(
        (obj: IProduct) => obj.id !== product.id
      );

      localStorage.setItem("cartProducts", JSON.stringify(filtered));
      onRemove && onRemove();
    }
  };

  return (
    <div className="rounded-md shadow-md p-4 bg-white">
      <div className="">
        <p className="font-medium text-base">{product.title}</p>
        <img src={product.image} className="h-48 my-4" alt="" />
      </div>

      <div className="grid grid-cols-2 text-sm gap-2">
        <p className="text-gray-500">Price</p>
        <p className="">{product.price}</p>{" "}
        <p className="text-gray-500">Category</p>
        <p className="">{product.category}</p>
      </div>

      <div className="">
        {isCart ? (
          <Button
            type="default"
            onClick={handleRemoveFromCart}
            className="text-black"
          >
            remove
          </Button>
        ) : (
          <Button
            type="default"
            onClick={handleAddToCart}
            className="text-black"
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
