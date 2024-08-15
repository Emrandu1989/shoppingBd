import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './route/router.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
     <RouterProvider router={router} />
  </HelmetProvider>
   
  </StrictMode>,
)
