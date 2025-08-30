import React, { Suspense } from "react";

const LazyGlobe = React.lazy(() =>
  import("@/components/magicui/globe").then((mod) => ({ default: mod.Globe }))
);

function Footer() {
  return (
    <div
      className="flex flex-col w-full max-w-[1440px] mx-auto items-center px-4 sm:px-6 lg:px-8"
      style={{ marginTop: "60px" }}
    >
      {/* Globe Section */}
      <div
        className="w-full flex justify-center relative overflow-visible"
        style={{ height: "220px", zIndex: 0 }}
      >
        <div
          className="w-full max-w-[1440px] globe-container"
          style={{ height: "550px", position: "relative" }}
        >
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <LazyGlobe
              className="w-full h-full object-contain rounded-4xl invert-0 dark:invert z-0"
            />
          </Suspense>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="relative z-10 flex flex-col w-full px-4 sm:px-6 lg:px-6 py-12 sm:py-8 md:py-10 bg-[#F9F9F9] dark:bg-[#000000] transition-colors duration-300"
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
              src="/assets/icons/Rotaframe.svg"
              alt="Rotaframe Technology"
              className="h-8 sm:h-10 w-auto"
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
                  className="text-sm sm:text-base text-[#5C5C5C] dark:text-[#898989] hover:text-[#000000] dark:hover:text-[#FAFAFA] cursor-pointer transitionColors"
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
        @media (max-width: 640px) {
          .globe-container {
            height: 150px; /* Reduced height for mobile */
          }
          .globe-section {
            height: 150px; /* Match outer container to prevent clipping */
            overflow: visible;
          }
          .globe-element {
            transform: scale(0.5); /* Scale down globe for mobile */
            transform-origin: center; /* Center the scaling */
          }
        }
        @media (min-width: 641px) {
          .globe-container {
            height: 550px; /* Preserve original desktop height */
          }
          .globe-section {
            height: 220px; /* Preserve original desktop height */
          }
          .globe-element {
            transform: scale(1); /* Full size for desktop */
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