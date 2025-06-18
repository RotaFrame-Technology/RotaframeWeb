import React, { Suspense } from "react";

// Preload Globe component using React.lazy
const LazyGlobe = React.lazy(() =>
  import("@/components/magicui/globe").then((mod) => ({ default: mod.Globe }))
);

function Footer() {
  return (
    <div className="flex flex-col w-full items-center">
      {/* Globe Section */}
      <div
        className="w-full flex justify-center overflow-hidden relative"
        style={{ height: "450px" }}
      >
        <div
          className="w-full max-w-6xl"
          style={{ height: "600px", position: "relative" }}
        >
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <LazyGlobe className="w-full h-full object-cover rounded-4xl invert-0 dark:invert z-0" />
          </Suspense>
        </div>
      </div>

      {/* Footer Content */}
      <div
        className="relative z-10 flex flex-col w-full px-6 sm:px-10 lg:px-20 py-16 sm:py-20 bg-[#F9F9F9] dark:bg-[#000000] transition-colors duration-300"
        style={{
          marginTop: "-150px",
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-start">
            <img src="/src/assets/icons/Rotaframe.svg" alt="Rotaframe Logo" />
            <div className="flex flex-row gap-4 mt-10">
              {[1, 2, 3, 4].map((num) => (
                <button key={num} className="cursor-pointer">
                  <img
                    src={`/src/assets/images/social${num}.svg`}
                    alt={`social-icon-${num}`}
                    className="w-[20px] h-[20px]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-12">
            {/* Services */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
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
                  className="text-base text-[#5C5C5C] dark:text-[#898989]"
                >
                  {service}
                </div>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                Company
              </div>
              {["Home", "Services", "Portfolio", "Contact"].map((link) => (
                <div
                  key={link}
                  className="text-base text-[#5C5C5C] dark:text-[#898989]"
                >
                  {link}
                </div>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <div className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                Legal
              </div>
              {["Terms of Service", "Privacy Policy"].map((legal) => (
                <div
                  key={legal}
                  className="text-base text-[#5C5C5C] dark:text-[#898989]"
                >
                  {legal}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-6 h-[1px] w-full bg-[#D9D9D9] dark:bg-[#2E2E2E]" />

        {/* Footer Bottom Text */}
        <div className="text-center text-sm text-[#5C5C5C] dark:text-[#898989]">
          2025 © Rotaframe Technology
        </div>
      </div>
    </div>
  );
}

export default Footer;
