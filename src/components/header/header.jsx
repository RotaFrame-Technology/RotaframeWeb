import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contact") {
      const element = document.getElementById("contact");
      if (element) {
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }, 400);
      }
    }
  }, [location]);

  const [activeLink, setActiveLink] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Update active link based on current path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "") setActiveLink("home");
    else if (path.includes("/about-us")) setActiveLink("aboutus");
    else if (path.includes("/services")) setActiveLink("services");
    else if (path.includes("/portfolio")) setActiveLink("portfolio");
    else setActiveLink("");
  }, [location]);

  // Handle scroll for header hide/show and background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Restore theme from localStorage on mount
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark/light mode
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

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const isPortfolioSingle =
      location.pathname.startsWith("/portfolio/") &&
      location.pathname !== "/portfolio";

    if (isPortfolioSingle) {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      const element = document.getElementById("contact");
      if (element) {
        const headerOffset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  // Navigation items configuration
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const getActiveClass = (itemName) => {
    const keyMap = {
      Home: "home",
      "About Us": "aboutus",
      Services: "services",
      Portfolio: "portfolio",
    };
    const key = keyMap[itemName];

    return activeLink === key
      ? "text-black dark:text-[#FFD400] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-[2px] after:bg-[#FFD400] after:rounded-full"
      : "text-black dark:text-[#FAFAFA] hover:text-[#FFD400] dark:hover:text-[#FFD400]";
  };

  return (
    <>
      <header
        className={`w-full sticky top-4 sm:top-7 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        {/* Background strip */}
        <div
          className={`${
            isScrolled
              ? "bg-white/20 dark:bg-[#121212]/20 backdrop-blur-sm"
              : isDarkMode
              ? "bg-[#121212]"
              : "bg-white"
          }`}
        />

        {/* Main header container */}
        <div
          className={`w-full max-w-[1300px] h-[64px] md:h-[84px] mx-auto flex items-center justify-between px-4 sm:px-6 rounded-[24px] transition-all duration-300 ${
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
                scrollToTop();
                navigate("/");
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-row gap-8 items-center">
            <div className="flex flex-row gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`relative px-2 text-[16px] py-2 cursor-pointer transition-colors select-none focus:outline-none ${getActiveClass(
                    item.name
                  )}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Theme toggle + Contact CTA */}
            <div className="flex flex-row gap-6 items-center">
              {/* Uncomment if you want the theme toggle button visible */}
              {/* <button
                onClick={toggleDarkMode}
                className="text-xl text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button> */}

              <button
                onClick={scrollToContact}
                className="w-[120px] h-[46px] flex items-center justify-center bg-[#FFD400] text-black border rounded-[16px] font-semibold text-base transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Uncomment if you want theme toggle on mobile */}
            {/* <button
              onClick={toggleDarkMode}
              className="text-lg text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button> */}

            <button
              onClick={toggleMobileMenu}
              className="text-lg text-black dark:text-white cursor-pointer hover:text-[#FFD400] transition-colors"
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className="py-3 px-2 text-base text-black dark:text-[#FAFAFA] hover:text-[#FFD400] border-b border-gray-200 dark:border-gray-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToContact();
                }}
                className="mt-6 w-[120px] h-[44px] flex items-center justify-center bg-[#FFD400] text-black border rounded-[16px] font-semibold text-base transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer"
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