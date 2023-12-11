import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import product4 from "../../assets/product4.png"

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Navigation } from 'swiper/modules';

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
                className="mySwiper relative"
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className='p-5 m-1 rounded-xl box-shadow text-center'>
                        <img src={product1} alt="" className='m-auto w-full' />
                        <div className='mt-3 mb-2'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 m-1 rounded-xl box-shadow text-center'>
                        <img src={product2} alt="" className='m-auto w-full' />
                        <div className='mt-3 mb-2'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 m-1 rounded-xl box-shadow text-center'>
                        <img src={product3} alt="" className='m-auto w-full' />
                        <div className='mt-3 mb-2'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 m-1 rounded-xl box-shadow text-center'>
                        <img src={product4} alt="" className='m-auto w-full' />
                        <div className='mt-3 mb-2'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
