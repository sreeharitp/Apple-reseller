import React from 'react'
import CollectionSlider from './CollectionSlider'
import { UilArrowRight } from "@iconscout/react-unicons";


const Collection = () => {
  return (
    <div className='padding-l padding-y box-width'>
      <div className='flex items-center justify-between padding-r'>
        <h2 className='text-[25px] sm:text-[30px] font-semibold mb-5'>Latest Collections</h2>
        <div className='items-center gap-4 hidden sm:flex'>
          <div className="prev-btn cursor-pointer h-[40px] w-[40px] rounded-full bg-[#0000001f] flex items-center justify-center">
            <UilArrowRight className="h-8 text-white rotate-180" />
          </div>
          <div className="next-btn cursor-pointer h-[40px] w-[40px] rounded-full bg-[#0000001f] flex items-center justify-center">
            <UilArrowRight className="h-8 text-white " />
          </div>
        </div>
      </div>
      <CollectionSlider />
    </div>
  )
}

export default Collection