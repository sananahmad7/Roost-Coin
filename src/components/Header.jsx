import React from 'react';
import { FaHome, FaInfoCircle, FaBox } from 'react-icons/fa';

function Header() {
    // Smooth scroll function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <header className="w-full bg-amber-400 shadow-md border-b border-yellow-300 z-50">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between h-24">
                {/* Logo + Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/Logo.gif"
                        alt="Roost Logo"
                        className="w-20 h-20 rounded-full shadow-lg animate-spin-slow"
                    />
                    <h1 className="text-white font-extrabold text-3xl lg:text-4xl custom-font drop-shadow-md">
                        RoostCoin 🐣
                    </h1>
                </div>

                {/* Navigation Buttons */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center gap-2 px-5 py-3 text-white text-lg font-semibold custom-font hover:scale-105 transition-all duration-200 hover:text-yellow-100"
                    >
                        <FaHome className="text-xl" />
                        Hero
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className="flex items-center gap-2 px-5 py-3 text-white text-lg font-semibold custom-font hover:scale-105 transition-all duration-200 hover:text-yellow-100"
                    >
                        <FaInfoCircle className="text-xl" />
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('products')}
                        className="flex items-center gap-2 px-5 py-3 bg-white/20 text-white text-lg font-semibold custom-font rounded-md hover:bg-white/30 transition"
                    >
                        <FaBox className="text-xl" />
                        Products
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;