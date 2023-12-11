import React from 'react'
import { UilArrowUpRight } from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
const Card3 = ({ title, price, url, img }) => {
    return (
        <div className='w-full h-full bg-[#0071E3] rounded-2xl px-7 pt-8 flex flex-col justify-between'>
            <div className='flex items-center justify-between'>
                <div>
                <h3 className='text-white text-[19px] font-medium'>{title}</h3>
                    <p className='text-[#CDD1D7] text-[15px] font-light'>{price}</p>
                </div>
                <Link to={url}>
                    <div className='h-[36px] w-[36px] rounded-full bg-white flex items-center justify-center'>
                        <UilArrowUpRight className="h-4" />
                    </div>
                </Link>
            </div>
            <div className=''>
                <img src={img} alt="" className='mx-auto h-[300px] sm:h-[350px] object-contain object-bottom' />
            </div>
        </div>
    )
}

export default Card3