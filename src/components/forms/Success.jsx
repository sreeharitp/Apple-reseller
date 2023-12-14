import React from 'react'
import { GoCheckCircle } from "react-icons/go";
import { Link } from 'react-router-dom';


const Success = () => {
    return (
        <div className='flex items-center justify-center '>
            <div className='w-1/3 text-center py-32'>
                <GoCheckCircle size={60} className='m-auto mb-5 text-[#2DB224]'/>
                <h5 className='text-[24px] font-semibold'>Your product is successfully posted</h5>
                <p className='font-light text-[#5F6C72]'>Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.</p>
                <Link to="/dashboard">Go to dashboard</Link>
            </div>
        </div>
    )
}

export default Success