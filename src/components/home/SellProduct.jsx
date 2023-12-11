import React from "react";
import phones from "../../assets/phones.png";
import phones2 from "../../assets/phones2.png";

const SellProduct = () => {
  return (
    <div className="padding-x padding-y box-width">
      <div className="bg-gradient2 bg-cover bg-no-repeat rounded-2xl h-[550px] sm:h-auto overflow-hidden">
        <div className="flex  items-start h-full relative p-8  justify-center sm:justify-between">
          <div className="sm:w-[45%]">
            <h1 className="text-[30px] sm:text-[35px] leading-[40px] sm:leading-[45px] font-semibold">
              Want to Sell Your Products ?
            </h1>
            <p className="mt-2  font-light text-normal">
              Explore all-new personalization features, privacy and security
              enhancements, and more ways to communicate seamlessly.
            </p>
            <button className="mt-10  bg-black text-white rounded-full px-8 py-2 tetx-[18px] font-medium">
              Sell Now
            </button>
          </div>
          <img
            src={phones}
            alt=""
            className="absolute right-0 bottom-0 h-[230px] object-contain object-bottom hidden lg:block"
          />
          <img
            src={phones2}
            alt=""
            className="absolute -bottom-5 h-[230px] object-contain object-bottom lg:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
