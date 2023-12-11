import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from "../../assets/product1.png"

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
                    <div className='px-5 py-6  m-1 rounded-lg box-shadow text-center'>
                        <img src={product1} alt=""  className='m-auto w-full'/>
                        <div className='mt-8'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-6  m-1 rounded-lg box-shadow text-center'>
                        <img src={product1} alt=""  className='m-auto w-full'/>
                        <div className='mt-8'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='px-5 py-6  m-1 rounded-lg box-shadow text-center'>
                        <img src={product1} alt=""  className='m-auto w-full'/>
                        <div className='mt-8'>
                            <h6 className='text-[#44474B] mb-1'>iPhone 14 Pro</h6>
                            <h6 className='text-[18px] font-semibold'>From ₹ 69,900</h6>
                        </div>
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </>
    );
}
