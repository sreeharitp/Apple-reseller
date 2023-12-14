import React from 'react'
import { FiArrowRight, FiLayers  } from 'react-icons/fi';
import { GoCheckCircle } from "react-icons/go";
import { Link } from 'react-router-dom';


const Success = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='w-full sm:w-1/2 xl:w-1/3 text-center py-32'>
                <GoCheckCircle size={60} className='m-auto mb-5 text-[#2DB224]' />
                <h5 className='text-[22px] xl:text-[24px] font-semibold'>Your product is successfully posted</h5>
                <p className='font-light text-[#5F6C72] text-[15px] my-3'>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
               <div className="flex gap-4 justify-center mt-5">
               <Link to="/dashboard">
                    <button className="uppercase bg-white border border-[#C4C4C4] tracking-wider text-black p-2.5 text-[13px] w-full rounded-sm flex items-center justify-center gap-2">
                    <FiLayers  size={18} />go to dashboard 
                    </button>
                </Link>
                <Link to=" ">
                    <button className="uppercase bg-black tracking-wider text-white py-2.5 px-6 text-[13px] w-full rounded-sm flex items-center justify-center gap-2">
                    view post<FiArrowRight size={18}/>
                    </button>
                </Link>
               </div>
            </div>
        </div>
    )
}

export default Success