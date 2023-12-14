import React from 'react'
import { FiShoppingBag, FiPackage, FiDatabase } from "react-icons/fi";
import avatar from "../../assets/avatar.png";


const Tiles = () => {
  return (
    <div>
      <h2 className='font-semibold text-[18px] mb-1'>Hello, Kevin</h2>
      <p className='w-full sm:w-2/3 text-[14px] font-light mb-6'>From your account dashboard. you can easily check & view your Recent Products, Sold Products , Pending Products and edit your  Account Details.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className='p-3 bg-[#EAF6FE] flex items-center gap-3'>
          <div className='h-[60px] w-[60px] bg-white flex items-center justify-center'>
            <FiShoppingBag size={24} className='text-[#2DA5F3]' />
          </div>
          <div>
            <h2 className='text-[20px] font-bold'>125</h2>
            <p className='text-sm font-light'>Total Products</p>
          </div>
        </div>
        <div className='p-3 bg-[#FFF3EB] flex items-center gap-3'>
          <div className='h-[60px] w-[60px] bg-white flex items-center justify-center'>
            <FiPackage size={24} className='text-[#FA8232]' />
          </div>
          <div>
            <h2 className='text-[20px] font-bold'>100</h2>
            <p className='text-sm font-light'>Sold Products</p>
          </div>
        </div>
        <div className='p-3 bg-[#EAF7E9] flex items-center gap-3'>
          <div className='h-[60px] w-[60px] bg-white flex items-center justify-center'>
            <FiDatabase size={24} className='text-[#2DB224]' />
          </div>
          <div>
            <h2 className='text-[20px] font-bold'>25</h2>
            <p className='text-sm font-light'>Pending Products</p>
          </div>
        </div>
      </div>
      <div className="w-full  m-auto mt-6">
        <div className="  bg-white rounded-md mb-5 border border-[#E4E7E9]">
          <div className=" py-3 px-6 border-b border-[#E4E7E9]">
            <h5 className="text-[16px] font-medium">Account Info</h5>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3">
              <img src={avatar} alt="" className="rounded-full h-[40px]" />
              <div>
                <h5 className="font-medium text-[16px]">Erik Lucatero</h5>
                <p className='font-light text-[14px]'>Dhaka - Bangladesh</p>
              </div>
            </div>
            <div className='mt-4'>
              <p className='font-light text-[14px]'><span className='font-medium text-black '>Email : </span> kevin.gilbert@gmail.com</p>
              <p className='font-light text-[14px] my-2'><span className='font-medium text-black '>Phone : </span>  +1-202-555-0118</p>
              <p className='font-light text-[14px]'><span className='font-medium text-black '>Address : </span> East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Tiles