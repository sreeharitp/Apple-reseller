import React from "react";
import Card1 from "../card/Card1";
import iphone from "../../assets/iphone.png";
import watch from "../../assets/watch.png";
import mac from "../../assets/mac.png";
import airpod from "../../assets/airpod.png";
import ipad from "../../assets/ipad.png";
import Card2 from "../card/Card2";
import Card3 from "../card/Card3";

const HomeSection = () => {
  return (
    <div className="padding-x box-width">
      <div className="flex flex-col sm:flex-row items-center gap-5 h-auto sm:h-[450px]">
        <div className="bg-gradient1 bg-cover bg-no-repeat p-5 sm:p-10 rounded-2xl sm:w-[70%] h-[400px] sm:h-full">
          <div className="max-w-[80%] sm:max-w-[70%] flex flex-col justify-between items-start h-full">
            <div>
            <h1 className="text-[30px] sm:text-[40px] leading-[40px] sm:leading-[50px] font-semibold">
              The Best Way to Buy the Products You Love.
            </h1>
            <p className="mt-4  font-light text-normal sm:text-[18px]">
              Explore all-new personalization features, privacy and security
              enhancements, and more ways to communicate seamlessly.
            </p>
            </div>
            <button className="mt-10  bg-black text-white rounded-full px-8 py-2 tetx-[18px] font-medium">
              Explore Now
            </button>
          </div>
        </div>
        <div className="w-full sm:w-[30%] h-full ">
          <Card1
            title="iPhone Collection"
            price="From ₹80983.00"
            url="/"
            img={iphone}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 h-auto sm:h-[450px]  mt-5">
        <div className="w-full sm:w-[50%] h-full">
          <Card2
            title="MacBook Collection"
            price="From ₹80983.00"
            url="/"
            img={mac}
          />
        </div>
        <div className="w-full sm:w-[50%] h-full ">
          <Card3
            title="iPad Collection"
            price="From ₹54983.00"
            url="/"
            img={ipad}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 h-auto sm:h-[450px]  mt-5">
        <div className="w-full  sm:w-[50%] h-full">
          <Card1
            title="Apple Watches"
            price="From ₹20983.00"
            url="/"
            img={watch}
          />
        </div>
        <div className="w-full sm:w-[50%] h-full ">
          <Card2 title="AirPods" price="From ₹24983.00" url="/" img={airpod} />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
