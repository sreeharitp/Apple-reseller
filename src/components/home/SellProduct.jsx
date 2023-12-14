import React from "react";
import phones from "../../assets/phones.png";
import phones2 from "../../assets/phones2.png";
import { Link } from "react-router-dom";

const SellProduct = () => {
  return (
    <div className="padding-x padding-y box-width">
      <div className="bg-gradient2 bg-cover bg-no-repeat rounded-2xl h-[550px] sm:h-auto overflow-hidden">
        <div className="flex  items-start h-full relative p-8  justify-center sm:justify-between">
          <div className="sm:w-[50%]">
            <h1 className="text-[25px] xl:text-[35px] leading-[35px] xl:leading-[45px] font-semibold">
              Want to Sell Your Products&nbsp;?
            </h1>
            <p className="mt-2  font-light text-normal">
              Explore all-new personalization features, privacy and security
              enhancements, and more ways to communicate seamlessly.
            </p>
            <Link to="/register">
              <button className="mt-10  bg-black text-white rounded-full px-8 py-2 tetx-[18px] font-medium">
                Sell Now
              </button></Link>
          </div>
          <img
            src={phones}
            alt=""
            className="absolute right-0 bottom-0 h-[230px] object-contain object-bottom hidden xl:block"
          />
          <img
            src={phones2}
            alt=""
            className="absolute sm:relative -bottom-5 sm:bottom-0 h-[230px] object-contain object-bottom xl:hidden "
          />
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
