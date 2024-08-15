import React, { Children } from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
              <Navbar />
                 <Outlet />
                 <Footer/>
        </div>
    );
};

export default MainLayout;