import React from 'react'

function Header() {
    return (
        <div className='flex p-7 border w-full bg-amber-400 '>
            <div className='flex mx-10 border border-white w-full items-center'>
                <img src='/Logo.gif' className='w-30 h-30' />
                <h1 className='text-white custom-font lg:text-3xl md:text-xl' >Roost Coin</h1>
                <div className='flex p-7  w-full mx-20 justify-center lg:space-x-20 md:space-x-6'>
                    <button className='  p-2 custom-font text-white text-lg'>Connect Wallet</button>
                    <button className='  p-2 custom-font text-white text-lg'>Social Media</button>
                    <button className=' p-2 custom-font text-white text-lg'>Buy</button>

                </div>
            </div>
        </div>
    )
}

export default Header