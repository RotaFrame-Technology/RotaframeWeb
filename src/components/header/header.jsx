import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [setActiveLink] = useState("home");
  // Check if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      // Currently dark, switch to light
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
      setIsDarkMode(false);
    } else {
      // Currently light, switch to dark
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link.toLowerCase());
  };

  return (
    <header className="w-full h-12 px-[120px] sticky top-5 z-50 bg-white dark:bg-[#171717] transition-colors duration-300 flex items-center justify-center">
      <div className="w-full max-w-[1440px] flex flex-row items-center justify-between bg-[#EDEDED] dark:bg-[#171717] px-6 py-3 rounded-xl">

        
        {/* Icon */}
        <div className="flex items-center">
          <img
            src={isDarkMode ? "/src/assets/images/Rotaframe Yellow.svg" : "/src/assets/images/Rotaframe Black.svg"}
            className="h-[40px] w-[160px] ml-[8px]"
            alt="Rotaframe Logo"
          />
        </div>
  
        {/* Nav Links & Actions */}
        <div className="flex flex-row gap-20 items-center">
          <div className="flex flex-row gap-5 font-semibold">
            {["Home", "About Us", "Services", "Portfolio"].map((item) => (
              <Link
                key={item}
                to="/HomePageInner"
                onClick={() => handleLinkClick(item)}
                className="px-2 text-[18px] py-2 no-underline text-black dark:text-[#FAFAFA] hover:text-[#005F7E]"
              >
                {item}
              </Link>
            ))}
          </div>
  
          {/* Theme toggle + CTA */}
          <div className="flex flex-row gap-5">
            <button
              onClick={toggleDarkMode}
              className="text-2xl text-black dark:text-white"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
  
            <button className="px-6 py-[5px] text-[18px] bg-[#FFD400] text-black border-[#005F7E] rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
