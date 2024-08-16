import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";

import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Details from "../pages/Details";
import Products from "../pages/Peoducts/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //  {
      //     path: '/addProduct',
      //     element: <AddProduct />
      //  },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allproduct",
        element: <Products />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/product/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
