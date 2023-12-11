import React from "react";
import { Link } from "react-router-dom";
import { navlinks } from "../../constants";
import {
  UilSearch,
  UilHeart,
  UilUserCircle,
  UilBars,
} from "@iconscout/react-unicons";

const Navbar = () => {
  return (
    <div className="w-full box-width h-[70px] padding-x flex items-center justify-between">
      <Link to="/">Logo</Link>
      <ul className=" items-center gap-8 hidden lg:flex">
        {navlinks.map((items) => (
          <li className="">{items.link}</li>
        ))}
      </ul>
      <div className=" items-center gap-4 hidden lg:flex">
        <UilHeart />
        <UilSearch />
        <UilUserCircle />
      </div>
      <div className="lg:hidden">
        <UilBars />
      </div>
    </div>
  );
};

export default Navbar;
