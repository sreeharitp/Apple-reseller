

import { Tab } from '@headlessui/react'
import Table1 from './Table1'
import Table2 from './Table2'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {


  return (
    <div className="">
      <Tab.Group>
        <Tab.List className="flex gap-4">
          <Tab
            className={({ selected }) =>
              classNames(
                'max-w-fit rounded py-1 px-4 text-[14px] outline-none',

                selected
                  ? 'bg-black text-white'
                  : 'text-black border'
              )
            }
          >
            All Products
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'max-w-fit rounded py-1 px-4 text-[14px] outline-none',

                selected
                  ? 'bg-black text-white'
                  : 'text-black border'
              )
            }
          >
            Pending Products
          </Tab>

        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel >
            <Table1 />
          </Tab.Panel>
          <Tab.Panel >
            <Table2 />
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
