import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout /> ,
      children: [
             {
                path: '/',
                element: <Home />
             },
             {
                path: '/addProduct',
                element: <AddProduct />
             },
      ]
    },
  ]);

export default router;