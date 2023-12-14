import React from "react";
import { navlinks } from "../../constants";
import { Link } from "react-router-dom";



function Sidebar() {

    return (
        <ul className="">
            {navlinks.map((items) => (
                <Link key={items.id} to={items.url}>
                    <li className="opacity-90 text-[20px] font-semibold text-center mb-5">{items.link}</li></Link>
            ))}
        </ul>
    );
}

export default Sidebar;
