import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

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
        }, 400); // slight delay for page render
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

  // Handle active link updates
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path.includes("home")) setActiveLink("home");
    else if (path.includes("services")) setActiveLink("services");
    else if (path.includes("portfolio")) setActiveLink("portfolio");
    else setActiveLink("");
  }, [location]);

  // Handle scroll detection
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

  // Restore theme from localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme
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
      // ✅ If on a portfolio project page, go home and scroll to contact
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      // ✅ Otherwise, scroll to contact section on the same page
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

  return (
    <>
      <header
        className={`w-full sticky top-4 sm:top-7 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        {/* Background strip */}
        <div
          className={` ${
            isScrolled
              ? "bg-white/20 dark:bg-[#121212]/20 backdrop-blur-sm"
              : isDarkMode
              ? "bg-[#121212]"
              : "bg-white"
          }`}
        />

        {/* Main header */}
        <div
          className={`w-full max-w-[1300px] h-[64px] md:h-[84px] mx-auto flex items-center justify-between px-4 sm:px-6 rounded-xl transition-all duration-300 ${
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
                navigate("/");
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
                      navigate("/");
                      scrollToTop();
                    } else if (item === "Services") {
                      const element = document.getElementById("our-services");
                      if (element) {
                        const headerOffset = -100; // adjust if needed
                        const elementPosition =
                          element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                      // navigate("/our-services");
                      // setTimeout(scrollToTop, 100); // delay to ensure navigation completes
                    } else if (item === "Portfolio") {
                      const element = document.getElementById("our-portfolio");
                      if (element) {
                        const headerOffset = 50; // adjust if needed
                        const elementPosition =
                          element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                      // navigate("/portfolio");
                      // setTimeout(scrollToTop, 100);
                    } else {
                      const sectionId = item.toLowerCase().replace(/\s+/g, "");
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  className={`relative px-2 text-[16px] py-2 cursor-pointer transition-colors ${
                    activeLink === item.toLowerCase().replace(/\s+/g, "")
                      ? "text-black dark:text-[#FFD400] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-[2px] after:bg-[#FFD400] dark:after:bg-[#FFD400] after:rounded-full"
                      : "text-black dark:text-[#FAFAFA] hover:text-[#FFD400] dark:hover:text-[#FFD400]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Theme toggle + CTA */}
            <div className="flex flex-row gap-6 items-center">
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
                className="w-[120px] h-[45px] flex items-center justify-center bg-[#FFD400] text-black border rounded-lg font-semibold text-base transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
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

      {/* Mobile Menu */}
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
                      navigate("/");
                      scrollToTop();
                    } else if (item === "Services") {
                      const element = document.getElementById("our-services");
                      if (element) {
                        const headerOffset = -100; // adjust if needed
                        const elementPosition =
                          element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                      // navigate("/our-services");
                      // setTimeout(scrollToTop, 100); // delay to ensure navigation completes
                    } else if (item === "Portfolio") {
                      const element = document.getElementById("our-portfolio");
                      if (element) {
                        const headerOffset = 50; // adjust if needed
                        const elementPosition =
                          element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                      // navigate("/portfolio");
                      // setTimeout(scrollToTop, 100);
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
                  scrollToContact();
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
