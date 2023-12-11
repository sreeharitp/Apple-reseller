import React from 'react'
import phones from "../../assets/phones.png"

const SellProduct = () => {
    return (
        <div className='padding-x padding-y'>
            <div className='bg-gradient2 bg-cover bg-no-repeat rounded-2xl h-full'>
                <div className='flex justify-between items-start h-full relative p-8'>
                    <div className='w-[45%]'>
                        <h1 className='text-[35px] leading-[45px] font-semibold'>Want to Sell Your Products ?</h1>
                        <p className='mt-2 text-[#44474B]'>Explore all-new personalization features, privacy and security enhancements, and more ways to communicate seamlessly.</p>
                        <button className='mt-10  bg-black text-white rounded-xl px-8 py-2 tetx-[18px] font-medium'>Sell Now</button>
                    </div>
                    <img src={phones} alt="" className='absolute right-0 bottom-0 h-[250px]' />
                </div>
            </div>
        </div>
    )
}

export default SellProduct