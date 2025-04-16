import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
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
    <header className="flex flex-row w-full h-20 px-[60px] items-center justify-between sticky top-0 z-50 bg-white dark:bg-[#121212] transition-colors duration-300">
      {/* Icon */}
      <div className="flex flex-row h-full items-center">
        <img
          src="/src/assets/icons/Rotaframe.svg"
          className="h-[60px] w-[160px] mr-[94px]"
          alt="Rotaframe Logo"
        />
      </div>

      {/* Nav Links & Actions */}
      <div className="flex flex-row gap-20 h-full items-center">
        <div className="flex flex-row gap-5 font-semibold">
          {["Home", "About Us", "Services", "Portfolio"].map((item) => (
            <Link
              key={item}
              to="/HomePageInner"
              onClick={() => handleLinkClick(item)}
              className={`px-2 text-[18px] py-2 no-underline text-black dark:text-[#FAFAFA] hover:text-[#005F7E]`}
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
    </header>
  );
}

export default Header;