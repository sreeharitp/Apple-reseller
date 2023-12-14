import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiHeart } from "react-icons/fi";


// Import Swiper styles
import 'swiper/css';


// import required modules
import { Navigation } from 'swiper/modules';
import { collection } from '../../constants';

export default function CollectionSlider() {




    return (
        <>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={20}
                navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn",
                }}
                modules={[Navigation]}
                className="mySwiper relative padding-l"
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,

                    },
                    768: {
                        slidesPerView: 3.5,

                    },
                    1024: {
                        slidesPerView: 3.5,

                    },
                    1536: {
                        slidesPerView: 4.5,

                    },
                }}
            >
                {collection.map((items) => (

                    <SwiperSlide key={items.id}>
                        <div className='m-1'>
                            <div className='bg-[#F2F4F5] w-full p-6'>
                                <img src={items.img} alt="" className='mx-auto my-3 w-full' />
                            </div>
                            <div className='p-2 flex justify-between'>
                                <div>
                                    <h6 className='text-[#475156] text-[13px] sm:text-[14px] font-light'>{items.name}</h6>
                                    <h6 className='font-medium text-[15px] sm:text-[16px]'>{items.price}</h6>
                                </div>
                                <FiHeart size={18} className='text-[#585c60] cursor-pointer' />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}



            </Swiper>
        </>
    );
}
