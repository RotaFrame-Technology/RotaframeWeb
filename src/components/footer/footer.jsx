import React, { Suspense, useState, useEffect } from "react";

const LazyGlobe = React.lazy(() =>
  import("@/components/magicui/globe").then((mod) => ({ default: mod.Globe }))
);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }

    const handleStorageChange = () => {
      const isDark = localStorage.getItem("theme") === "dark";
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setIsDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="flex flex-col w-full max-w-[1440px] mx-auto items-center px-4 sm:px-6 lg:px-8 footer-container"
    >
      {/* Globe Section  */}

      { (
        <div
          className="w-full flex justify-center relative overflow-visible globe-section"
          style={{ height: isMobile ? "230px" : "300px", zIndex: 1 }}
        >
          <div
            className="w-full max-w-[1440px] globe-container"
            style={{ height: isMobile ? "600px" : "600px", position: "relative" }}
          >
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
              <LazyGlobe
                className="w-full h-full object-contain rounded-4xl invert-0 dark:invert z-0 globe-element"
              />
            </Suspense>
          </div>
        </div>
      )}

      {/* Footer Content */}
      <div
        className="relative z-10 flex flex-col w-full px-4 sm:px-6 lg:px-6 py-12 sm:py-8 md:py-10 bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors duration-300 footer-content"
        style={{
          marginTop: "0px",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-start">
            <img
              src={
                isDarkMode
                  ? "/assets/images/Rotaframe Yellow.png"
                  : "/assets/images/Rotaframe Black.png"
              }
              alt="Rotaframe Technology"
              className="h-[35px] sm:h-[40px] w-auto"
            />
            <div className="flex flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={`/assets/images/social${num}.svg`}
                    alt={`social-icon-${num}`}
                    className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12 mt-6 lg:mt-0">
            <div className="flex flex-col gap-2">
              <div className="text-base sm:text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                Services
              </div>
              {[
                "e-Commerce development",
                "Custom software development",
                "Mobile Application development",
                "UX/UI & Product development",
              ].map((service) => (
                <div
                  key={service}
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                >
                  {service}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-base sm:text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                Company
              </div>
              {["Home", "Services", "Portfolio", "Contact"].map((link) => (
                <div
                  key={link}
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                >
                  {link}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-base sm:text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                Legal
              </div>
              {["Terms of Service", "Privacy Policy"].map((legal) => (
                <div
                  key={legal}
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                >
                  {legal}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 mb-4 sm:mb-6 h-[1px] w-full bg-[#D9D9D9] dark:bg-[#2E2E2E]" />

        <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          2025 © Rotaframe Technology
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .globe-section {
            height: 200px;
            overflow: visible;
            z-index: 1;
          }
          .globe-container {
            height: 400px;
            width: 100%;
            max-width: none;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .globe-element {
            transform: scale(0.6) scaleX(1.2);
            transform-origin: top center;
            position: relative;
            top: 0;
          }
        }
        @media (min-width: 641px) {
          .footer-container {
            margin-top: 30px;
          }
          .footer-content {
            margin-top: 0px;
          }
        }
        @media (min-width: 768px) {
          .responsive-footer-margin {
            margin-top: 80px;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;
