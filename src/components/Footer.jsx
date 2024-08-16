import React from 'react';
import logo from '../assets/shopping.jpg';

const Footer = () => {
    return (
        <footer className="bg-orange-600 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        <img src={logo} alt="Shopping BD Logo" className="w-32 mb-4" />
                        <p className="text-center md:text-left">
                            Shopping BD Ltd.
                           
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between w-full md:w-3/4">
                        <nav className="mb-8 md:mb-0">
                            <h6 className="text-xl font-semibold mb-4">Services</h6>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Branding</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Design</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Marketing</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Advertisement</a>
                        </nav>
                        <nav className="mb-8 md:mb-0">
                            <h6 className="text-xl font-semibold mb-4">Company</h6>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">About us</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Contact</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Jobs</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Press kit</a>
                        </nav>
                        <nav>
                            <h6 className="text-xl font-semibold mb-4">Legal</h6>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Terms of use</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Privacy policy</a>
                            <a className="block mb-2 hover:text-orange-300 transition-colors">Cookie policy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
