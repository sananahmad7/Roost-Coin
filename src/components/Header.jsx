import React from 'react';
import { FaWallet, FaRocket, FaShareAlt } from 'react-icons/fa';

function Header() {
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
                    <button className="flex items-center gap-2 px-5 py-3 text-white text-lg font-semibold custom-font hover:scale-105 transition-all duration-200 hover:text-yellow-100">
                        <FaWallet className="text-xl" />
                        Connect Wallet
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 text-white text-lg font-semibold custom-font hover:scale-105 transition-all duration-200 hover:text-yellow-100">
                        <FaShareAlt className="text-xl" />
                        Social Media
                    </button>
                    <button className="flex items-center gap-2 px-5 py-3 bg-white/20 text-white text-lg font-semibold custom-font rounded-md hover:bg-white/30 transition">
                        <FaRocket className="text-xl" />
                        Buy
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
