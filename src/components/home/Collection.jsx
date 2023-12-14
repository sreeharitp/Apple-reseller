import React from 'react'
import CollectionSlider from './CollectionSlider'
import { FiArrowRight } from "react-icons/fi";


const Collection = () => {
  return (
    <div className='box-width'>
      <div className='flex items-center justify-between padding-x mb-6 sm:mb-10'>
        <h2 className='text-[25px] xl:text-[30px] font-semibold '>Latest Collections</h2>
        <div className='items-center gap-4 hidden sm:flex'>
          <div className="prev-btn cursor-pointer h-[40px] w-[40px] rounded-full bg-[#F2F4F5] flex items-center justify-center">
            <FiArrowRight size={18} className="h-8 text-[#7d858b] rotate-180" />
          </div>
          <div className="next-btn cursor-pointer h-[40px] w-[40px] rounded-full bg-[#F2F4F5] flex items-center justify-center">
            <FiArrowRight size={18} className="h-8 text-[#7d858b] " />
          </div>
        </div>
      </div>
      <CollectionSlider />
    </div>
  )
}

export default Collection