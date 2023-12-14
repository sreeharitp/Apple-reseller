import { Tab } from "@headlessui/react";
import Tiles from "./Tiles";
import Profile from "./Profile";
import Products from "./Products";
import { FiLayers,FiEdit,FiShoppingBag ,FiSettings,FiPower   } from "react-icons/fi";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <div className="padding-x box-width mt-16 ">
      <Tab.Group>
        <div className="flex items-start flex-col xl:flex-row gap-8">
          <Tab.List className="w-full xl:w-[35%] flex-col sm:flex xl:flex-col gap-3">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5 flex items-center gap-2 pl-4 xl:pl-8",
                  selected
                    ? "bg-[#2DA5F3] text-white outline-none"
                    : "bg-white text-[#5F6C72] border border[#E4E7E9]"
                )
              }
            >
              <FiLayers/>Dashboard
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5 flex items-center gap-2 pl-4 xl:pl-8",
                  selected
                    ? "bg-[#2DA5F3] text-white outline-none"
                    : "bg-white text-[#5F6C72] border border[#E4E7E9]"
                )
              }
            >
             <FiEdit /> Edit Profile
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5 flex items-center gap-2 pl-4 xl:pl-8",
                  selected
                    ? "bg-[#2DA5F3] text-white outline-none"
                    : "bg-white text-[#5F6C72] border border[#E4E7E9]"
                )
              }
            >
              <FiShoppingBag />My Products
            </Tab>
           
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5 flex items-center gap-2 pl-4 xl:pl-8",
                  selected
                    ? "bg-[#2DA5F3] text-white  outline-none"
                    : "bg-white text-[#5F6C72] border border[#E4E7E9]"
                )
              }
            >
             <FiPower /> Logout
            </Tab>
          </Tab.List>
          <Tab.Panels className="w-full">
            <Tab.Panel>
              <Tiles />
            </Tab.Panel>
            <Tab.Panel>
              <Profile />
            </Tab.Panel>
            <Tab.Panel>
              <Products />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
