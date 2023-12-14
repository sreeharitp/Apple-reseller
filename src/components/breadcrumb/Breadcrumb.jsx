import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { HiMiniHome } from "react-icons/hi2";


const Breadcrumb = ({ page }) => {
  return (
    <div className="h-[70px] bg-[#F2F4F5] flex items-center">
      <div className="padding-x box-width flex items-center gap-1 text-[#5F6C72]">
        <Link className="flex items-center gap-2" to="/">
          <HiMiniHome size={15} className="mb-[1px]" />
          Home
        </Link>
        <FiChevronRight />
        <p>{page}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
