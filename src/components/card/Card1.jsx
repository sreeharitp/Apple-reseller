import React from "react";
import { UilArrowUpRight } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
const Card1 = ({ title, price, url, img }) => {
  return (
    <div className="w-full h-full bg-[#D8DBE3] rounded-2xl px-6 pt-6 flex flex-col justify-between group overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[19px] font-medium">{title}</h3>
          <p className=" text-[15px] font-light">{price}</p>
        </div>
        <Link to={url}>
          <div className="h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center">
            <UilArrowUpRight className="h-5 group-hover:rotate-45 duration-500 ease-in-out" />
          </div>
        </Link>
      </div>
      <div className="">
        <img
          src={img}
          alt=""
          className=" mx-auto h-[300px] sm:h-[350px] object-contain object-bottom group-hover:scale-105 duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Card1;
