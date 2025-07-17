import React from 'react'

function Products() {
    const products = [
        {
            id: 1,
            name: "Roost NFT Collection",
            image: "/2.gif",
            description: "Exclusive limited edition NFTs featuring unique Myro artwork and special utilities within the ecosystem.",
            price: "0.5 SOL",
            features: ["Limited Edition", "Exclusive Access", "Utility Token"]
        },
        {
            id: 2,
            name: "Roost Staking Pool",
            image: "/r.gif",
            description: "Earn passive income by staking your Myro tokens in our high-yield staking pools with compound rewards.",
            price: "Start Staking",
            features: ["High APY", "Compound Rewards", "Flexible Terms"]
        },
        {
            id: 3,
            name: "Roost Merchandise",
            image: "c.gif",
            description: "Official Based Myro merchandise including hoodies, t-shirts, and exclusive collectibles for the community.",
            price: "$29.99",
            features: ["Premium Quality", "Limited Stock", "Community Exclusive"]
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/15 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-28 h-28 bg-blue-500/15 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-amber-500/15 rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-1/4 w-24 h-24 bg-green-500/15 rounded-full animate-bounce"></div>
                <div className="absolute bottom-40 right-10 w-20 h-20 bg-pink-500/15 rounded-full animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 py-16">

                {/* Section Heading */}
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent text-center">
                    Our Products
                </h2>

                {/* Subtitle */}
                <p className="text-xl text-gray-300 mb-16 text-center max-w-2xl">
                    Discover the exclusive products and services that make the Based Myro ecosystem unique
                </p>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border-4 border-white/20 overflow-hidden hover:border-rainbow-gradient transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30 transform hover:rotate-1"
                            style={{
                                borderImage: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7) 1'
                            }}
                        >
                            {/* Card glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-amber-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-amber-500/10 transition-all duration-500"></div>

                            {/* Product Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                                {/* Floating price tag */}
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {product.price}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="relative p-6">
                                {/* Product Name */}
                                <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent transform -rotate-1">
                                    {product.name} 🎯
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 leading-relaxed font-medium">
                                    {product.description} 🌟
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {product.features.map((feature, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white rounded-full text-sm font-bold border-2 border-white/20 transform hover:scale-110 transition-transform duration-300"
                                            >
                                                ✨ {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Buy Button */}
                                <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-black text-lg rounded-full border-4 border-white/30 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-1">
                                    <span className="flex items-center justify-center gap-2">
                                        🛒 BUY NOW! 🛒
                                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping">💫</div>
                            <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce">🎈</div>
                            <div className="absolute top-1/2 -right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin">🌈</div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent transform -rotate-1">
                        🎪 Ready to Join the RoostCoin Party?! 🎪
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-semibold text-lg">
                        Don't miss out on the FUN! Get early access to all the cool stuff! 🎉🚀
                    </p>
                    <button className="px-16 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-black text-xl rounded-full border-4 border-white/30 shadow-2xl transition-all duration-300 hover:scale-115 hover:shadow-3xl transform hover:-translate-y-3 hover:rotate-2">
                        🎊 LET'S GOOO! 🎊
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products