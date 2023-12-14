import React from 'react'
import { productList } from '../../constants'

const Table2 = () => {
    return (
        <div className='overflow-x-scroll'>
            <table className='w-full mt-8 border'>
                <thead>
                    <tr className='bg-[#F2F4F5]'>
                        <td>Product Name</td>
                        <td>Posted Date</td>
                        <td>Price</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((items) => (

                        <tr>
                                <td className='flex items-center gap-3 w-[200px] sm:w-full'>
                                <img src={items.img} alt="" className='h-[60px] w-[60px]' />
                                {items.name}
                            </td>
                            <td>{items.date}</td>
                            <td>{items.price}</td>
                            <td><p className={`max-w-fit px-3 py-1 text-[12px] rounded-[60px] ${items.status=="Active"?'bg-[#ECFDF3] text-[#309867] ':"bg-[#fff0f0] text-[#f95656] "}`}>{items.status}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table2