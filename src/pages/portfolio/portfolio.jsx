import React from "react";
import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";
import PortfolioItems from "../../components/portfolio/portfolio";

const Portfolio = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[300px] bg-cover bg-center relative mt-16">
        <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-4 sm:px-6 lg:px-10">
          {/* Text */}
          <div className="text-left md:w-1/2">
            <p className="text-[18px] sm:text-[20px] font-bold text-white">
              Project Portfolio
            </p>
            <h1 className="mt-2 text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight">
              <span className="text-[#B4B4B4] block">Innovating the</span>{" "}
              Future
            </h1>
          </div>

          {/* Video Thumbnail */}
          <div className="relative w-full md:w-1/2 max-w-md aspect-video bg-black rounded-lg overflow-hidden cursor-pointer">
            <img
              src="/video-thumbnail.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="none"
                className="w-14 h-14 sm:w-16 sm:h-16"
              >
                <path d="M5.25 5.25v13.5L19.5 12 5.25 5.25z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <Banner />

      <hr className="w-full border-t mt-20 border-[#2E2E2E]" />

      <PortfolioItems noHeader />

      {/* Logo Slider */}
      <div className="services-container flex flex-col mt-10 items-center w-full py-14 sm:py-16">
        <hr className="w-full border-t mt-20 border-[#2E2E2E]" />
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
          <LogoSlider noMargin />
        </div>
        <hr className="w-full border-t mt-20 border-[#2E2E2E]" />

        {/* Contact Section */}
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16">
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
