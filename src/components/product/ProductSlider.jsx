import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from "../../assets/product1.png";
import titanium from "../../assets/titanium.png";
import titanium2 from "../../assets/titanium2.png";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className='p-8 bg-[#F2F4F5]'>
            <img src={product1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-8 bg-[#F2F4F5]'>
            <img src={titanium} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-8 bg-[#F2F4F5]'>
            <img src={titanium2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-8 bg-[#F2F4F5]'>
            <img src={product1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-8 bg-[#F2F4F5]'>
            <img src={titanium} />
          </div>
        </SwiperSlide>



      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        <SwiperSlide>
          <div className='p-2 bg-[#F2F4F5] cursor-pointer'>
            <img src={product1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 bg-[#F2F4F5] cursor-pointer'>
            <img src={titanium} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 bg-[#F2F4F5] cursor-pointer'>
            <img src={titanium2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 bg-[#F2F4F5] cursor-pointer'>
            <img src={product1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='p-2 bg-[#F2F4F5] cursor-pointer'>
            <img src={titanium} />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
