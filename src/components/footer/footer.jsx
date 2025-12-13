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
    <div className="flex flex-col w-full max-w-[1300px] mx-auto items-center footer-container">
      {/* Globe Section  */}

      {
        <div
          className="w-[90%] sm:w-full flex justify-center relative overflow-visible globe-section mt-0 sm:mt-4 md:mt-16 "
          style={{ height: isMobile ? "290px" : "200px", zIndex: 1 }}
        >
          <div
            className="w-full max-w-[1300px] globe-container"
            style={{
              height: isMobile ? "660px" : "550px",
              position: "relative",
            }}
          >
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
              <LazyGlobe className="w-full h-full object-contain rounded-4xl invert-0 dark:invert z-0 globe-element" />
            </Suspense>
          </div>
        </div>
      }

      {/* Footer Content */}
      <div
        className="relative z-10 flex flex-col w-full px-8 sm:px-6 lg:px-12 py-8 sm:py-8 md:py-12 bg-[#F9F9F9] dark:bg-[#0F0F0F] transition-colors duration-300 footer-content"
        style={{
          marginTop: "0px",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      >
        {isMobile ? (
          // Mobile layout
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center">
              <img
                src={
                  isDarkMode
                    ? "/assets/images/Rotaframe Yellow.png"
                    : "/assets/images/Rotaframe Black.png"
                }
                alt="Rotaframe Technology"
                className="h-[30px] w-auto"
              />
              <div className="flex flex-row gap-3">
                {[
                  {
                    icon: "/assets/images/social1.svg",
                    url: "https://www.facebook.com/share/1CBdTsP4Uz/?mibextid=wwXIfr",
                  },
                  {
                    icon: "/assets/images/social2.svg",
                    url: "https://x.com/rotaframe?s=21",
                  },
                  {
                    icon: "/assets/images/social3.svg",
                    url: "https://www.linkedin.com/company/rotaframetechnology/",
                  },
                  {
                    icon: "/assets/images/social4.svg",
                    url: "https://www.instagram.com/rotaframe?igsh=amMxbGo1eDA2N2s=",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={social.icon}
                      alt={`social-icon-${index + 1}`}
                      className="w-[16px] h-[16px]"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Services and Company */}
            <div className="flex flex-row justify-between gap-4 mt-6">
              <div className="flex flex-col gap-1">
                <div className="text-sm font-semibold mb-1 text-[#000000] dark:text-[#FAFAFA]">
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
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1 mr-10">
                <div className="text-sm font-semibold mb-1 text-[#000000] dark:text-[#FAFAFA]">
                  Company
                </div>
                {["Home", "Services", "Portfolio", "Contact"].map((link) => (
                  <div
                    key={link}
                    className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>

            {/* Legal below */}
            <div className="flex flex-col gap-1 mt-6">
              <div className="text-sm font-semibold mb-1 text-[#000000] dark:text-[#FAFAFA]">
                Legal
              </div>
              {["Terms of Service", "Privacy Policy"].map((legal) => (
                <div
                  key={legal}
                  className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                >
                  {legal}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Original desktop layout
          <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-10">
            {/* Logo and Social Icons */}
            <div className="flex flex-col items-start">
              <img
                src={
                  isDarkMode
                    ? "/assets/images/Rotaframe Yellow.png"
                    : "/assets/images/Rotaframe Black.png"
                }
                alt="Rotaframe Technology"
                className="h-[30px] sm:h-[40px] w-auto"
              />
              <div className="flex flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 lg:mt-10">
                {[
                  {
                    icon: "/assets/images/social1.svg",
                    url: "https://www.facebook.com/share/1CBdTsP4Uz/?mibextid=wwXIfr",
                  },
                  {
                    icon: "/assets/images/social2.svg",
                    url: "https://x.com/rotaframe?s=21",
                  },
                  {
                    icon: "/assets/images/social3.svg",
                    url: "https://www.linkedin.com/company/rotaframetechnology/",
                  },
                  {
                    icon: "/assets/images/social4.svg",
                    url: "https://www.instagram.com/rotaframe?igsh=amMxbGo1eDA2N2s=",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={social.icon}
                      alt={`social-icon-${index + 1}`}
                      className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 mt-6 lg:mt-0">
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-[#000000] dark:text-[#FAFAFA]">
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
                    className="text-xs sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-[#000000] dark:text-[#FAFAFA]">
                  Company
                </div>
                {["Home", "Services", "Portfolio", "Contact"].map((link) => (
                  <div
                    key={link}
                    className="text-xs sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                  >
                    {link}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-[#000000] dark:text-[#FAFAFA]">
                  Legal
                </div>
                {["Terms of Service", "Privacy Policy"].map((legal) => (
                  <div
                    key={legal}
                    className="text-xs sm:text-base text-gray-600 dark:text-gray-400 hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                  >
                    {legal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 sm:mt-8 mb-1 sm:mb-6 h-[1px] w-full bg-[#D9D9D9] dark:bg-[#2E2E2E]" />

        <div className="text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 mt-4">
          <img src="/favicon.png" alt="Logo" className="h-3 w-auto sm:h-5" />©
          2025 Rotaframe Technology Pvt Ltd. All rights reserved.
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