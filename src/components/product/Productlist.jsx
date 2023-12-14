import React, { useState } from "react";
import Filter from "./Filter";
import { collection } from "../../constants";
import { Link } from "react-router-dom";
import { FiFilter, FiHeart } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiChevronDown } from "react-icons/fi";

const Productlist = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div className="box-width padding-x mt-10">
      <div className="flex items-start gap-5">
        <div className={`w-[250px] sm:w-[25%] fixed top-0 left-0 z-20  sm:relative trans bg-white h-screen sm:-translate-x-0 ${filter?'-translate-x-0':'-translate-x-full'}`}>
          <Filter filter={filter} setFilter={setFilter}/>
        </div>
        <div className="w-full sm:w-[75%]  ">
          <div className="flex justify-end items-center h-[60px]">
            <div className="flex justify-between items-center w-full sm:justify-end">
              <h6 className="font-medium flex gap-1 items-center sm:hidden" onClick={()=>setFilter(!filter)}>
                <FiFilter size={15} />
                Filters
              </h6>
              <Menu as="div" className="relative inline-block text-left ">
                <div>
                  <Menu.Button className="flex items-center gap-2">
                    Sort By
                    <FiChevronDown />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-slate-100 " : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            Most Popular
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-2  2xl:grid-cols-4 gap-3 sm:gap-4">
            {collection.map((items) => (
              <Link to="/product_single" key={items.id}>
                <div className="m-1">
                  <div className="bg-[#F2F4F5] w-full p-6">
                    <img
                      src={items.img}
                      alt=""
                      className="mx-auto my-3 w-full"
                    />
                  </div>
                  <div className="p-2 flex justify-between">
                    <div>
                      <h6 className="text-[#475156] text-[13px] sm:text-[14px] font-light">
                        {items.name}
                      </h6>
                      <h6 className="font-medium text-[14px] sm:text-[16px]">
                        {items.price}
                      </h6>
                    </div>
                    <FiHeart
                      size={18}
                      className="text-[#818a93] cursor-pointer"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
