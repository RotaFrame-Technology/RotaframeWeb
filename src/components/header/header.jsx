import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link.toLowerCase());
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className="w-full sticky top-7 z-50 flex items-center justify-center">
      <div
        className={`
          absolute -top-7 left-0 w-full h-7 z-[-1]
          ${isDarkMode ? "bg-[#121212]" : "bg-white"}
        `}
      />
      <div
        className={`w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3 rounded-xl transition-all duration-300 shadow-md
          ${isScrolled
            ? "bg-transparent backdrop-blur-md dark:bg-transparent"
            : "bg-[#EDEDED] dark:bg-[#171717]"
          }`}
      >
        {/* Icon */}
        <div className="flex items-center">
          <img
            src={
              isDarkMode
                ? "/src/assets/images/Rotaframe Yellow.png"
                : "/src/assets/images/Rotaframe Black.png"
            }
            className="h-[30px] w-[157px] ml-[8px]"
            alt="Rotaframe Logo"
          />
        </div>

        {/* Nav Links & Actions */}
        <div className="flex flex-row gap-8 items-center">
          <div className="flex flex-row gap-5 ">
            {["Home", "About Us", "Services", "Portfolio"].map((item) => (
              <Link
                key={item}
                to="/HomePageInner"
                onClick={() => handleLinkClick(item)}
                className="px-2 text-[15px] py-2 no-underline text-black dark:text-[#FAFAFA] hover:text-[#FFD400]"
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Theme toggle + CTA */}
          <div className="flex flex-row gap-9">
            <button
              onClick={toggleDarkMode}
              className="text-2xl text-black dark:text-white cursor-pointer hover:text-[#FFD400]"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="px-6 py-[5px] text-[18px] bg-[#FFD400] text-lg text-black border-[#005F7E] rounded-lg font-semibold ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
