import request from "@utils/request";
import { IProduct } from "src/interfaces/common";
const { VITE_API_HOST: HOST } = import.meta.env;

const getOrders = (): Promise<IProduct[]> => {
  return request({ url: `${HOST}/orders` });
};

const updateOrders = (id: string, data: any): Promise<IProduct[]> => {
  return request({ url: `${HOST}/orders/${id}`, method: "put", data });
};

export default { getOrders, updateOrders };
