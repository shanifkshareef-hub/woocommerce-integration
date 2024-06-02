import React, { useEffect, useState } from "react";
import orderService from "@services/products";
import { IProduct } from "src/interfaces/common";

const Orders = () => {
  const [orders, setOrders] = useState<IProduct[]>([]);

  useEffect(() => {
    getorders();
  }, []);

  const getorders = async () => {
    const orders = await orderService.getOrders();
    if (orders) {
      setOrders(orders);
    }
  };

  return (
    <div>
      {/* <div className="grid grid-cols-3 gap-4">
        {orders.map((obj, i) => {
          return (
            <ProductCard isCart={false} product={obj} key={`product-${i}`} />
          );
        })}
      </div> */}
    </div>
  );
};

export default Orders;
