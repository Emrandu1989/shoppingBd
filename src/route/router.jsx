import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';

import Register from '../pages/Register';
import SignIn from '../pages/SignIn';


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
           
             {
                path: '/register',
                element: <Register />
             },
             {
                path: '/signIn',
                element: <SignIn />
             },
           
      ]
    },
  ]);

export default router;