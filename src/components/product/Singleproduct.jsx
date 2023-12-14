import React from "react";
import ProductSlider from "./ProductSlider";
import { GoDotFill } from "react-icons/go";
import { productdetails, sellerdetails } from "../../constants";
import { FaStar } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import avatar from "../../assets/avatar.png";

const Singleproduct = () => {
  return (
    <div className="box-width padding-x pt-16">
      <div className="flex flex-col sm:flex-row items-start gap-12">
        <div className="w-full sm:w-[45%] xl:w-[35%]">
          <ProductSlider />
        </div>
        <div className="w-full sm:w-[55%] xl:w-[65%]">
          <div className="flex flex-col xl:flex-row items-start">
            <div className="w-full xl:w-[60%] mb-5">
              <span className="flex items-center gap-1 text-[#00B517] text-[14px]">
                <GoDotFill size={14} />
                In Stock
              </span>
              <h3 className="text-[20px] font-medium my-2">
                Apple iPhone 15 Plus (256 GB) - Blue
              </h3>
              <div className="flex gap-4 items-end">
                <h2 className="text-[20px] font-semibold text-[#2DA5F3]">
                  ₹ 69,900
                </h2>
                <h2 className="text-[17px] font-medium text-[#77878F] line-through	">
                  ₹ 75,900
                </h2>
              </div>
              <table className="mt-8">
                <tbody>
                  {productdetails.map((items) => (
                    <tr key={items.id}>
                      <td className="pr-3 py-2">{items.title}</td>
                      <td className="pr-3 py-2 text-[#77878F]">{items.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border border-[#DEE2E7] rounded-md w-full xl:w-[40%] p-5">
              <div className="flex items-center justify-between">
                <p className="text-[#77878F] text-[14px]">Seller</p>
                <div className="flex items-center gap-1">
                  <FaStar size={15} className="text-[#FF9017]" />
                  <p className="text-[14px]">4.5</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-5">
                <img src={avatar} alt="" className="rounded-full h-[40px]" />
                <h5 className="font-medium text-[18px]">Erik Lucatero</h5>
              </div>
              <div className="text-[#77878F] my-6">
                {sellerdetails.map((items) => (
                  <div key={items.id} className="flex items-center gap-3 mt-4">
                    {items.icon}
                    <p className="text-[#77878F] text-[15px]">{items.desc}</p>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-2 justify-center w-full bg-[#25D366] text-white rounded-md py-2">
                <FaWhatsapp />
                Contact Seller
              </button>
            </div>
          </div>
          <div className="mt-10 ">
            <h4 className="text-[22px] font-semibold mb-6">
              Additional Informations
            </h4>
            <div className="mb-10">
              <h6 className="uppercase text-[15px] mb-2">
                DYNAMIC ISLAND COMES TO IPHONE 15
              </h6>
              <p className="text-[#77878F] font-light">
                Dynamic Island bubbles up alerts and Live Activities — so you
                don’t miss them while you’re doing something else. You can see
                who’s calling, track your next ride, check your flight status,
                and so much more.
              </p>
            </div>
            <div className="mb-10">
              <h6 className="uppercase text-[15px] mb-2">INNOVATIVE DESIGN</h6>
              <p className="text-[#77878F] font-light">
                iPhone 15 Plus features a durable color-infused glass and
                aluminum design. It’s splash, water, and dust resistant. The
                Ceramic Shield front is tougher than any smartphone glass. And
                the 6.7" Super Retina XDR display is up to 2x brighter in the
                sun compared to iPhone 14.
              </p>
            </div>
            <div className="mb-10">
              <h6 className="uppercase text-[15px] mb-2">
                48MP MAIN CAMERA WITH 2X TELEPHOTO
              </h6>
              <p className="text-[#77878F] font-light">
                The 48MP Main camera shoots in super-high resolution. So it’s
                easier than ever to take standout photos with amazing detail.
                The 2x optical-quality Telephoto lets you frame the perfect
                close-up.
              </p>
            </div>
            <div className="mb-10">
              <h6 className="uppercase text-[15px] mb-2">
                NEXT-GENERATION PORTRAITS
              </h6>
              <p className="text-[#77878F] font-light">
                Capture portraits with dramatically more detail and color. Just
                tap to shift the focus between subjects — even after you take
                the shot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
