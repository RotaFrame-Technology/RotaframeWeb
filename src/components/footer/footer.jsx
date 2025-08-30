import React, { Suspense } from "react";

const LazyGlobe = React.lazy(() =>
  import("@/components/magicui/globe").then((mod) => ({ default: mod.Globe }))
);

function Footer() {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto items-center px-4 sm:px-6 lg:px-8">
      {/* Globe Section */}
      <div
        className="w-full flex justify-center overflow-hidden relative"
        style={{ height: "300px" }}
      >
        <div
          className="w-full max-w-[1440px]"
          style={{ height: "450px", position: "relative" }}
        >
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <LazyGlobe className="w-full h-full object-cover rounded-4xl invert-0 dark:invert z-0" />
          </Suspense>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="relative z-10 flex flex-col w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#F9F9F9] dark:bg-[#000000] transition-colors duration-300 responsive-footer-margin"
        style={{
          marginTop: "-100px",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-start">
            <img 
              src="/assets/icons/Rotaframe.svg" 
              alt="Rotaframe Technology"
              className="h-8 sm:h-10 w-auto"
            />
            <div className="flex flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
              {[1, 2, 3, 4].map((num) => (
                <button key={num} className="cursor-pointer hover:opacity-80 transition-opacity">
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
                  className="text-sm sm:text-base text-[#5C5C5C] dark:text-[#898989] hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
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
                  className="text-sm sm:text-base text-[#5C5C5C] dark:text-[#898989] hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
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
                  className="text-sm sm:text-base text-[#5C5C5C] dark:text-[#898989] hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transition-colors"
                >
                  {legal}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 mb-4 sm:mb-6 h-[1px] w-full bg-[#D9D9D9] dark:bg-[#2E2E2E]" />

        <div className="text-center text-xs sm:text-sm text-[#5C5C5C] dark:text-[#898989]">
          2025 © Rotaframe Technology
        </div>
      </div>

      <style>{`
        .responsive-footer-margin {
          margin-top: -100px;
        }
        @media (min-width: 768px) {
          .responsive-footer-margin {
            margin-top: -150px;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;