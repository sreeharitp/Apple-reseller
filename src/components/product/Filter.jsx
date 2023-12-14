import { Disclosure } from "@headlessui/react";
import { FiChevronRight, FiFilter, FiX } from "react-icons/fi";
import CheckBox from "./CheckBox";
import { filters } from "../../constants";

export default function Filter({ filter, setFilter }) {
  return (
    <div className="w-full px-4">
      <div className="h-[60px] flex items-center">
        <div className="flex items-center justify-between w-full ">
          <h6 className="font-medium flex gap-1 items-center"><FiFilter size={15} />Filters</h6>
          <FiX
            size={20}
            className="text-end sm:hidden"
            onClick={() => setFilter(!filter)}
          />
        </div>
      </div>
      {filters.map((items) => (
        <div className="mx-auto w-full max-w-md py-3 border-t border-[#E4E7E9]" key={items.id}>
          <Disclosure defaultOpen={open}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between">
                  <span className="uppercase font-medium text-[15px]">{items.title}</span>
                  <FiChevronRight
                    className={`${open ? "rotate-90 transform" : "rotate-270"
                      } h-4 w-4`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-5">
                  {items.items.map((item) => (

                    <div className="flex items-center gap-2 mb-3">
                      <CheckBox />
                      <label htmlFor="" className="text-[#475156]">{item.name}</label>
                    </div>
                  ))}

                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}

    </div>
  );
}
