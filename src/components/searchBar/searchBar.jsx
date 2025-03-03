import { useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
    const [orgType, setOrgType] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className="w-[820px] h-[80px] justify-between flex flex-row bg-[#EFFBFF]  absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full shadow-2xl items-center px-8">
            {/* Search bar */}
            <div className="flex flex-row gap-2">
                <IoSearch className="text-2xl text-[#022430]" />
                <input
                    type="text"
                    placeholder="Job title, keywords"
                    className="text-base text-[#022430] outline-none w-fit bg-transparent"
                />
            </div>
            {/* Dropdown button */}
            <div className="h-8 w-[2px] bg-gray-500"></div>
            <div className="flex items-center gap-2 rounded-md px-3 py-2">
                <img src="/src/assets/icons/menu.svg" className="h-5 w-5" alt="Menu Icon" />
                <select
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className="text-base text-[#022430] outline-none bg-transparent cursor-pointer"
                >
                    <option value="" disabled>
                        Organization Type
                    </option>
                    <option value="corporate">Corporate</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="government">Government</option>
                    <option value="startup">Startup</option>
                </select>
            </div>

            <div className="h-8 w-[2px] bg-gray-500"></div>

            <div className="flex flex-row items-center gap-2 rounded-md px-3 py-2">
                <img src="/src/assets/icons/location.svg" className="h-5 w-5" alt="Menu Icon" />
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-base text-[#022430] outline-none bg-transparent cursor-pointer"
                >
                    <option value="" disabled>
                        Location
                    </option>
                    <option value="SriLanka">SriLanka</option>
                    <option value="India">India</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Singapore">Singapore</option>
                </select>
            </div>

            <button className="px-8 py-3 bg-[#035371] rounded-full text-white font-semibold ml-10 cursor-pointer hover:bg-[#ACE9FF] hover:text-black">Find Jobs</button>
        </div>
    )
}

export default SearchBar