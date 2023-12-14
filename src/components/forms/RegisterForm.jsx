import React from "react";
import { FiEye } from "react-icons/fi";
import { IoIosCheckbox } from "react-icons/io";
import { Link } from "react-router-dom";
const RegisterForm = () => {
  return (
    <div className="padding-x py-16 box-width ">
      <div className="w-full sm:w-[45%] xl:w-[36%]  m-auto  bg-white rounded-md border border-[#E4E7E9]">
        <div className="text-center p-2 border-b border-[#E4E7E9]">
          <h5 className="text-[18px] font-medium">Register</h5>
        </div>
        <form action="" className="p-6">
          <label htmlFor="">Name</label>
          <input type="text" className="mb-5" />
          <label htmlFor="">Email Address</label>
          <input type="email" className="mb-5" />
          <label htmlFor="">Password</label>
          <div className="flex items-center relative mb-5">
            <input type="password" />
            <FiEye className="absolute right-5" />
          </div>
          <label htmlFor="">Confirm Password</label>
          <div className="flex items-center relative mb-5">
            <input type="password" />
            <FiEye className="absolute right-5" />
          </div>
          <div className="flex items-start gap-2 mb-5">
            <IoIosCheckbox size={25} className="text-[#2DA5F3]" />
            <p className="text-[14px] font-light">
              Are you agree to Clicon{" "}
              <span className="text-[#2DA5F3]">Terms of Condition</span> and{" "}
              <span className="text-[#2DA5F3]">Privacy Policy.</span>
            </p>
          </div>
          <Link to="/add_product">
            <button className="uppercase bg-black text-white p-3 text-[14px] w-full rounded-sm">
              REGISTER
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
