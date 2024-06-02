import { Navigate, RouteObject } from "react-router-dom";
import Main from "@layouts/Main";
import Orders from "@pages/Products/Products";

const routes: RouteObject[] = [
  {
    path: "/app",
    element: <Main />,
    children: [
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/app/products"} />,
  },
];

export default routes;
