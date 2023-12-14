import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "../../constants";
import { FiHeart, FiSearch, FiMenu, FiUser, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";


const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const url = location.pathname === '/';

  return (
    <>
      <div className={`${!url ? 'border-b' : "border-0"}  `}>
        <div className="w-full box-width h-[70px] padding-x flex items-center justify-between ">
          <Link to="/">Logo</Link>
          <ul className=" items-center gap-6 xl:gap-8 hidden lg:flex">
            {navlinks.map((items) => (
              <Link key={items.id} to={items.url}>
                <li className="opacity-90">{items.link}</li></Link>
            ))}
          </ul>
          <div className=" items-center gap-4 hidden lg:flex">
            <FiHeart size={18} />
            <FiSearch size={18} />
            <FiUser size={18} />
          </div>
          <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
            <FiMenu size={20} />
          </div>
        </div>
      </div>
      <div
        className={`${toggle ? "-translate-x-0" : "translate-x-full"
          } w-full sm:w-[300px] h-[100vh] bg-white padding-x trans fixed top-0 right-0 z-50 py-5 lg:hidden flex flex-col gap-10`}
      >
        <div className=" flex items-center justify-end">
          <FiX
            size={20}
            onClick={() => setToggle(!toggle)}
            className=""
          />
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
