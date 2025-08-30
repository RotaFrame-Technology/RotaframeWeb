import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <>
      <header className="w-full sticky top-4 sm:top-7 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div
          className={`absolute -top-4 sm:-top-7 left-0 w-full h-4 sm:h-7 z-[-1] ${isDarkMode ? "bg-[#121212]" : "bg-white"}`}
        />
        <div
          className={`w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 shadow-md
            ${isScrolled ? "bg-transparent backdrop-blur-md dark:bg-transparent" : "bg-[#EDEDED] dark:bg-[#171717]"}`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={isDarkMode ? "/assets/images/Rotaframe Yellow.png" : "/assets/images/Rotaframe Black.png"}
              className="h-[25px] sm:h-[30px] w-auto"
              alt="Rotaframe Technology"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row gap-8 items-center">
            <div className="flex flex-row gap-5">
              {["Home", "About Us", "Services", "Portfolio"].map((item) => (
                <Link
                  key={item}
                  to="/HomePageInner"
                  onClick={() => handleLinkClick(item)}
                  className="px-2 text-[15px] py-2 no-underline text-black dark:text-[#FAFAFA] hover:text-[#FFD400] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            
            {/* Desktop Theme toggle + CTA */}
            <div className="flex flex-row gap-6">
              <button
                onClick={toggleDarkMode}
                className="text-xl text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button className="px-4 py-[5px] text-base bg-[#FFD400] text-black border-[#005F7E] rounded-lg font-semibold hover:bg-[#003F5E] hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="text-lg text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-lg text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
          <div 
            className={`fixed top-0 right-0 h-full w-64 shadow-lg transition-transform duration-300 ${isDarkMode ? "bg-[#171717]" : "bg-[#EDEDED]"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 pt-20">
              {["Home", "About Us", "Services", "Portfolio"].map((item) => (
                <Link
                  key={item}
                  to="/HomePageInner"
                  onClick={() => handleLinkClick(item)}
                  className="py-3 px-2 text-base no-underline text-black dark:text-[#FAFAFA] hover:text-[#FFD400] border-b border-gray-200 dark:border-gray-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 px-4 py-3 text-base bg-[#FFD400] text-black rounded-lg font-semibold hover:bg-[#003F5E] hover:text-white transition-colors w-full"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;