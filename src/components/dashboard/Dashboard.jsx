import { useState } from "react";
import { Tab } from "@headlessui/react";
import Tiles from "./Tiles";
import Profile from "./Profile";
import Products from "./Products";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <div className="padding-x box-width padding-y ">
      <Tab.Group>
        <div className="flex items-start gap-8">
          <Tab.List className="w-[35%]">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5",
                  selected
                    ? "bg-[#2DA5F3] text-white"
                    : "bg-white text-[#5F6C72]"
                )
              }
            >
              Dashboard
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5",
                  selected
                    ? "bg-[#2DA5F3] text-white"
                    : "bg-white text-[#5F6C72]"
                )
              }
            >
              My Profile
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5",
                  selected
                    ? "bg-[#2DA5F3] text-white"
                    : "bg-white text-[#5F6C72]"
                )
              }
            >
              My Products
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5",
                  selected
                    ? "bg-[#2DA5F3] text-white"
                    : "bg-white text-[#5F6C72]"
                )
              }
            >
              Settings
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-0 py-2.5",
                  selected
                    ? "bg-[#2DA5F3] text-white"
                    : "bg-white text-[#5F6C72]"
                )
              }
            >
              Logout
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
