import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past initial threshold
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <>
      <header
        className={`w-full sticky top-4 sm:top-7 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        {/* Top strip background */}
        <div
          className={`absolute -top-4 sm:-top-7 left-0 w-full h-4 sm:h-7 z-[-1] ${
            isDarkMode ? "bg-[#121212]" : "bg-white"
          }`}
        />

        {/* Main header container */}
        <div
          className={`w-full max-w-[1400px] h-[64px] md:h-[84px] mx-auto flex items-center justify-between px-4 sm:px-6 rounded-xl transition-all duration-300
            ${
              isScrolled
                ? "bg-white/70 dark:bg-[#171717]"
                : "bg-[#EDEDED] dark:bg-[#171717]"
            }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={
                isDarkMode
                  ? "/assets/images/Rotaframe Yellow.png"
                  : "/assets/images/Rotaframe Black.png"
              }
              className="h-[25px] sm:h-[30px] w-auto cursor-pointer"
              alt="Rotaframe Technology"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/home");
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row gap-8 items-center">
            <div className="flex flex-row gap-5">
              {["Home", "About Us", "Services", "Portfolio"].map((item) => (
                <span
                  key={item}
                  onClick={() => {
                    if (item === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/home");
                    } else if (item === "Services") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/services");
                    } else if (item === "Portfolio") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/portfolio");
                    } else {
                      const sectionId = item.toLowerCase().replace(/\s+/g, "");
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className="px-2 text-[15px] py-2 text-black dark:text-[#FAFAFA] hover:text-[#FFD400] transition-colors cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Theme toggle + CTA */}
            <div className="flex flex-row gap-6 items-center">
              <button
                onClick={toggleDarkMode}
                className="text-xl text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="w-[120px] h-[45px] flex items-center justify-center bg-[#FFD400] text-black border rounded-lg font-semibold text-base transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="text-lg text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
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
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMobileMenu}
        >
          <div
            className={`fixed top-0 right-0 h-full w-64 shadow-lg transition-transform duration-300 ${
              isDarkMode ? "bg-[#171717]" : "bg-[#EDEDED]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 pt-20">
              {["Home", "About Us", "Services", "Portfolio"].map((item) => (
                <span
                  key={item}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (item === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/home");
                    } else if (item === "Services") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/services");
                    } else if (item === "Portfolio") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate("/portfolio");
                    } else {
                      const sectionId = item.toLowerCase().replace(/\s+/g, "");
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className="py-3 px-2 text-base text-black dark:text-[#FAFAFA] hover:text-[#FFD400] border-b border-gray-200 dark:border-gray-600 transition-colors cursor-pointer"
                >
                  {item}
                </span>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById("contact");
                  if (element) {
                    const headerOffset = 40;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="mt-6 w-[120px] h-[45px] flex items-center justify-center bg-[#FFD400] text-black border rounded-lg font-semibold text-base transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer"
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
