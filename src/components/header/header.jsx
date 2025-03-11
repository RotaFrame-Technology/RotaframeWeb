import { useState } from "react";
import { Link } from "react-router-dom";
import AppColors from "../../utils/colors/appColors";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    //header
    <div className="flex flex-row w-full h-20 px-[60px] items-center justify-between sticky top-0 z-50" style={{backgroundColor:AppColors.BackgroundDark}}>
      {/* Icon */}
      <div className="flex flex-row h-full items-center">
        <img
          src="/src/assets/icons/Rotaframe.svg"
          className="h-[60px] w-[160px] mr-[94px]"
        />
      </div>

      {/* buttons */}
      <div className="flex flex-row gap-20 h-full items-center">
        <div className="flex flex-row gap-5 font-semibold">
          <Link
            to="/home"
            className={`px-2 text-[18px] py-2 no-underline ${
              activeLink === "Home" ? "text-[#FAFAFA]" : "text-[#FAFAFA]"
            } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </Link>

          <Link
            to="/HomePageInner"
            className={`px-2 text-[18px] py-2 no-underline ${
              activeLink === "Home" ? "text-[#FAFAFA]" : "text-[#FAFAFA]"
            } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick("Home")}
          >
            About Us
          </Link>

          <Link
            to="/HomePageInner"
            className={`px-2 text-[18px] py-2 no-underline ${
              activeLink === "Home" ? "text-[#FAFAFA]" : "text-[#FAFAFA]"
            } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick("Home")}
          >
            Services
          </Link>

          <Link
            to="/HomePageInner"
            className={`px-2 text-[18px] py-2 no-underline ${
              activeLink === "Home" ? "text-[#FAFAFA]" : "text-[#FAFAFA]"
            } hover:text-[#005F7E]`}
            onClick={() => handleLinkClick("Home")}
          >
            Portofolio
          </Link>
        </div>
        <div className="flex flex-row gap-5">
          <button className="px-6 border-[#005F7E] text-black bg-[#FFD400] text-[18px] py-[5px] rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
