import React from 'react';

function Hero() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-32 left-40 w-28 h-28 bg-amber-500/20 rounded-full animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">

                {/* Logo/Avatar */}
                <div className="mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl">
                        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">👑</span>
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                    Based Roost
                </h1>

                {/* Centered GIF */}
                <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                        src="/gif.gif"
                        alt="Myro Animation"
                        className="w-80 h-60 object-cover"
                    />
                </div>

                {/* Buy Button */}
                <button className="mb-12 px-12 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-full border-2 border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    Buy Roost Coin
                </button>

                {/* Social Links */}
                <div className="flex space-x-6">
                    {/* X (Twitter) */}
                    <a href="#" className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* Telegram */}
                    <a href="#" className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </a>

                    {/* Discord */}
                    <a href="#" className="w-12 h-12 bg-indigo-500 hover:bg-indigo-600 rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                        </svg>
                    </a>

                    {/* DexScreener */}
                    <a href="#" className="w-12 h-12 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9.74s9-4.19 9-9.74V7l-8-5z" />
                        </svg>
                    </a>

                    {/* CoinGecko */}
                    <a href="#" className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </a>

                    {/* Jupiter */}
                    <a href="#" className="w-12 h-12 bg-yellow-500 hover:bg-yellow-600 rounded-full flex items-center justify-center border-2 border-white/20 transition-all duration-300 hover:scale-110">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;