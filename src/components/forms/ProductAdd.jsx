import React from "react";
import { Link } from "react-router-dom";
const ProductAdd = () => {
  return (
    <div className="padding-x py-16 box-width ">
      <div className="w-full xl:w-[80%]  m-auto">
        <h5 className="text-[18px] font-semibold mb-5">Add Product</h5>
        <div className="  bg-white rounded-md mb-5 border border-[#E4E7E9]">
          <div className=" py-3 px-6 border-b border-[#E4E7E9]">
            <h5 className="text-[16px] font-medium">Product Details</h5>
          </div>
          <form className=" p-6 ">
            <label htmlFor="">Product Name</label>
            <input type="text" className="mb-5" />
            <div className="flex flex-col sm:flex-row  sm:items-center  sm:gap-5">
              <div className="sm:flex-1">
                <label htmlFor="">Features</label>
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">Description</label>
                <textarea name="" id="" cols="30" rows="3"></textarea>
              </div>
            </div>
            <label htmlFor="">Photos</label>
            <input type="file" className="mb-2" />
          </form>
        </div>
        <div className="  bg-white rounded-md mb-5 border border-[#E4E7E9]">
          <div className=" py-3 px-6 border-b border-[#E4E7E9]">
            <h5 className="text-[16px] font-medium">Seller Details</h5>
          </div>
          <form className=" p-6 ">
            <label htmlFor="">Seller Name</label>
            <input type="text" className="mb-5" />
            <div className="flex flex-col sm:flex-row  sm:items-center  sm:gap-5">
              <div className="sm:flex-1">
                <label htmlFor="">Phone Number</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">Email Address</label>
                <input type="text" className="mb-5" />
              </div>
            </div>
            <label htmlFor="">Address</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              className="mb-5"
            ></textarea>
            <div className="flex flex-col sm:flex-row  sm:items-center sm:gap-5">
              <div className="sm:flex-1">
                <label htmlFor="">Country</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">State</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">City</label>
                <input type="text" className="mb-5" />
              </div>
              <div className="sm:flex-1">
                <label htmlFor="">Zip Code</label>
                <input type="text" className="mb-5" />
              </div>
            </div>
            <label htmlFor="">Product Price</label>
            <input type="text" className="mb-5" />
          </form>
        </div>
        <Link to="/success">
          <button className="tracking-widest uppercase bg-black text-white px-16 py-2.5 text-[13px]  rounded-md">
            Sell
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductAdd;
