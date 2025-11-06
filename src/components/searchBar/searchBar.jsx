import { useState } from "react";
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  const [orgType, setOrgType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[820px] mx-auto h-auto min-h-[60px] flex flex-col sm:flex-row justify-between bg-[#EFFBFF] relative bottom-0 rounded-2xl shadow-2xl items-center px-4 py-4 sm:px-8 sm:py-3">
        <div className="flex flex-row gap-2 w-full sm:w-auto mb-2 sm:mb-0">
          <IoSearch className="text-xl sm:text-2xl text-[#022430]" />
          <input
            type="text"
            placeholder="Job title, keywords"
            className="text-sm sm:text-base text-[#022430] outline-none w-full sm:w-fit bg-transparent"
          />
        </div>
        <div className="h-[2px] w-full sm:h-8 sm:w-[2px] bg-gray-500 sm:mx-2"></div>
        <div className="flex items-center gap-2 rounded-md px-3 py-2 w-full sm:w-auto my-2 sm:my-0">
          <img src="/assets/icons/menu.svg" className="h-4 w-4 sm:h-5 sm:w-5" alt="Menu Icon" />
          <select
            value={orgType}
            onChange={(e) => setOrgType(e.target.value)}
            className="text-sm sm:text-base text-[#022430] outline-none bg-transparent cursor-pointer w-full"
          >
            <option value="" disabled>Organization Type</option>
            <option value="corporate">Corporate</option>
            <option value="nonprofit">Non-Profit</option>
            <option value="government">Government</option>
            <option value="startup">Startup</option>
          </select>
        </div>
        <div className="h-[2px] w-full sm:h-8 sm:w-[2px] bg-gray-500 sm:mx-2"></div>
        <div className="flex flex-row items-center gap-2 rounded-md px-3 py-2 w-full sm:w-auto my-2 sm:my-0">
          <img src="/assets/icons/location.svg" className="h-4 w-4 sm:h-5 sm:w-5" alt="Location Icon" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-sm sm:text-base text-[#022430] outline-none bg-transparent cursor-pointer w-full"
          >
            <option value="" disabled>Location</option>
            <option value="SriLanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
        <button className="px-4 py-2 sm:px-8 sm:py-3 bg-[#035371] rounded-full text-white text-sm sm:text-base font-semibold w-full sm:w-auto mt-2 sm:mt-0 hover:bg-[#ACE9FF] hover:text-black">
          Find Jobs
        </button>
      </div>
    </div>
  );
}

export default SearchBar;