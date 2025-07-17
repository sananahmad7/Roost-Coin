import React from 'react';
import { FaTwitter, FaDiscord, FaInstagram, FaGlobe } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden ">

            {/* Glowy Animated Blobs */}
            <div className="absolute top-0 left-10 w-24 h-24 bg-pink-500/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-32 h-32 bg-blue-500/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 text-center">
                {/* Title */}
                <h4 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent transform -rotate-1">
                    🌐 Stay Connected with RoostCoin 🐔
                </h4>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 text-3xl mb-8">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-white transform hover:scale-125 transition duration-300 animate-bounce"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-white transform hover:scale-125 transition duration-300 animate-ping"
                    >
                        <FaDiscord />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-white transform hover:scale-125 transition duration-300 animate-spin"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://roostcoin.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-400 hover:text-white transform hover:scale-125 transition duration-300"
                    >
                        <FaGlobe />
                    </a>
                </div>

                {/* Disclaimer */}
                <p className="text-sm text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
                    🚨 <strong>Disclaimer:</strong> RoostCoin and associated digital assets are intended for entertainment and community engagement. They are not financial instruments. Always do your own research (DYOR) and consult a financial advisor before making investment decisions. 🌟
                </p>

                {/* Bottom Tagline */}
                <div className="mt-10 text-xs text-gray-500">
                    © {new Date().getFullYear()} RoostCoin. All rights reserved. 🐣
                </div>
            </div>
        </footer>
    );
}

export default Footer;
