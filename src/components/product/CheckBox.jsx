import React, { useState } from 'react'

const CheckBox = () => {
    const [checked, setChecked] = useState(false);
    return (
        <div
            onClick={() => setChecked(!checked)}
            className={`h-4 w-4 rounded-full  flex items-center cursor-pointer justify-center border  ${checked
                    ? "bg-[#2DA5F3] border-[#2DA5F3]"
                    : "bg-white  border-[#C9CFD2]"
                }`}
        >
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
        </div>
    )
}

export default CheckBox