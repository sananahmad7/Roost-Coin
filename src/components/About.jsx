import React from 'react'

function About() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background elements - different positions for variety */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 right-20 w-40 h-40 bg-blue-500/15 rounded-full animate-pulse"></div>
                <div className="absolute top-60 left-16 w-28 h-28 bg-purple-500/15 rounded-full animate-bounce"></div>
                <div className="absolute bottom-40 right-32 w-36 h-36 bg-amber-500/15 rounded-full animate-pulse"></div>
                <div className="absolute top-80 left-1/2 w-20 h-20 bg-green-500/15 rounded-full animate-bounce"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 py-16">

                {/* Section Heading */}
                <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent text-center">
                    About Based Myro
                </h2>

                {/* Content Container */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Decorative background */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

                            {/* Main image container */}
                            <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                <img
                                    src="/1.gif"
                                    alt="Based Myro Character"
                                    className="w-80 h-80 object-cover"
                                />
                            </div>

                            {/* Floating elements around image */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed text-gray-300">
                            Based Myro represents the next evolution in meme culture, combining the beloved
                            spirit of community-driven tokens with cutting-edge blockchain technology. Born
                            from the creative minds of the crypto community, Myro embodies the perfect balance
                            of fun and financial innovation.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-300">
                            Our mission is to create a sustainable ecosystem where holders can participate
                            in the future of decentralized finance while enjoying the lighthearted nature
                            that makes crypto culture so unique. With Based Myro, we're not just building
                            a token – we're building a movement.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-300">
                            Join thousands of holders who believe in the power of community, the strength
                            of blockchain technology, and the unstoppable force of a truly based ecosystem.
                            Together, we're redefining what it means to be part of the crypto revolution.
                        </p>

                        {/* Call to action */}
                        <div className="pt-6">
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full border-2 border-white/20 shadow-lg transition-all duration-300 hover:scale-105">
                                Join the Community
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            10K+
                        </div>
                        <div className="text-gray-400 mt-2">Holders</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
                            $2M+
                        </div>
                        <div className="text-gray-400 mt-2">Market Cap</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-green-400 bg-clip-text text-transparent">
                            50K+
                        </div>
                        <div className="text-gray-400 mt-2">Community</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                            100%
                        </div>
                        <div className="text-gray-400 mt-2">Based</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About