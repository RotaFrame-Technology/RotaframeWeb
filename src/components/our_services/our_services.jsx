/* OurServices.jsx */
import React from "react";
import PropTypes from "prop-types";

function OurServices() {
  const cards = [
    {
      id: 1,
      title: "E-Commerce Web Development",
      tag: "Multi-Platform",
      img: "/assets/images/service1.png",
      imgMobile: "/assets/images/service1mobile.png",
      imgHover: "/assets/images/service1cols.png",
      vector: "/assets/images/VectorWhite.png",
      vectorDark: "/assets/images/Vector.png",
      vectorLeft: false,
      desc: "We build high performance, conversion focused E-Commerce platforms that deliver shopping experiences across B2C and B2B markets.",
      descShort:
        "We build high performance, conversion focused E-Commerce platforms that deliver shopping experiences across B2C and B2B markets.",
    },
    {
      id: 2,
      title: "Custom Software Development",
      tag: "Multi-Platform",
      img: "/assets/images/service2.png",
      imgMobile: "/assets/images/service2mobile.png",
      imgHover: "/assets/images/service2cols.png",
      vector: "/assets/images/VectorLeftWhite.png",
      vectorDark: "/assets/images/VectorLeft.png",
      vectorLeft: false,
      desc: "We develop scalable, tailor made software solutions that streamline operations, automate workflows, and drive business efficiency.",
      descShort:
        "We develop scalable, tailor made software solutions that streamline operations, automate workflows, and drive business efficiency.",
    },
    {
      id: 3,
      title: "Mobile Application Development",
      tag: "Multi-Platform",
      img: "/assets/images/service3.png",
      imgMobile: "/assets/images/service3mobile.png",
      imgHover: "/assets/images/service3cols.png",
      vector: "/assets/images/VectorWhite.png",
      vectorDark: "/assets/images/Vector.png",
      vectorLeft: false,
      desc: "We create fast, user friendly mobile apps native and cross platform designed to enhance engagement and keep your business connected anywhere.",
      descShort:
        "We create fast, user friendly mobile apps native and cross platform designed to enhance engagement and keep your business connected anywhere.",
    },
    {
      id: 4,
      title: "UX/UI & Product Development",
      tag: "Multi-Platform",
      img: "/assets/images/service4.png",
      imgMobile: "/assets/images/service4mobile.png",
      imgHover: "/assets/images/service4cols.png",
      vector: "/assets/images/VectorLeftWhite.png",
      vectorDark: "/assets/images/VectorLeft.png",
      vectorLeft: false,
      desc: "We craft intuitive, visually compelling digital products with user centered design strategies that elevate brand experience and deliver real results.",
      descShort:
        "We craft intuitive, visually compelling digital products with user centered design strategies that elevate brand experience and deliver real results.",
    },
  ];

  const ServiceCard = ({
    title,
    tag,
    img,
    imgMobile,
    imgHover,
    vector,
    vectorDark,
    vectorLeft,
    desc,
    descShort,
  }) => (
    <div className="relative">
      {/* Vector Background*/}
      {vector && (
        <div
          className={`absolute ${
            vectorLeft ? "-left-5" : "right-0"
          } w-3/6 h-[320px] hidden lg:block z-0`} // ← CHANGED FROM h-[460px]
        >
          <img
            src={vector}
            className="w-full h-full object-cover dark:hidden"
            alt="Vector Background"
          />
          <img
            src={vectorDark}
            className="w-full h-full object-cover hidden dark:block"
            alt="Vector Background Dark"
          />
        </div>
      )}

      <div className="relative z-10 max-w-[940px] mx-auto">
        {/* Desktop */}
        <div className="hidden lg:grid h-[300px] items-center">
          {" "}
          <div className="grid grid-cols-5 h-[300px] border border-gray-300 dark:border-gray-600 rounded-[16px] hover:border-[#FFD400] transition-colors duration-300">
            <div className="col-span-2 relative overflow-hidden w-[200px] h-[200px] items-center justify-center m-auto">
              <img
                src={img}
                className="absolute inset-0 w-full h-full object-cover group-hover:hidden transition-opacity duration-300"
                alt={title}
              />
              <img
                src={imgHover}
                className="absolute inset-0 w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
                alt={`${title} Hover`}
              />
            </div>
            <div className="col-span-3 flex flex-col justify-center bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white rounded-r-2xl px-6">
              <div className="text-[#FBBC05]  text-[10px] sm:text-[12px]">
                <span className="bg-[#121212] px-4 py-2  rounded-full">
                  {tag}
                </span>
              </div>
              <div className=" text-2xl max-w-[250px] font-semibold mt-4 text-gray-700 dark:text-gray-300">
                {title}
              </div>
              <div className="mt-2 text-sm font-normal text-gray-600 dark:text-gray-400">
                {desc}
              </div>
              <button className="group mt-10 w-fit flex items-center gap-2 text-sm text-left text-gray-600 dark:text-gray-400 hover:text-[#FBBC05] transition-colors cursor-pointer">
                <span>Read more</span>
                <svg
                  className="h-[14px] w-[14px] transition-colors group-hover:fill-[#FBBC05]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-gray-500 dark:fill-gray-400 transition-colors group-hover:fill-[#FBBC05]"
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col border border-gray-300 dark:border-gray-600 rounded-[24px] hover:border-[#FFD400] transition-colors duration-300">
          <div
            className="relative h-[220px] sm:h-[240px] md:h-[260px] overflow-hidden
"
          >
            <img
              src={imgMobile}
              className="w-full h-[300px]   group-hover:hidden transition-opacity duration-300 object-contain sm:object-cover"
              alt={title}
            />
            <img
              src={imgHover}
              className="w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
              alt={`${title} Hover`}
            />
          </div>
          <div className="flex flex-col bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white p-4 sm:p-6 pt-8 rounded-[24px]">
            <div className="ml-2">
              <div className="text-[#FBBC05]  text-[10px] sm:text-[12px]">
                <span className="bg-[#121212] px-4 py-2  rounded-full">
                  {tag}
                </span>
              </div>
              <div className="text-[18px] max-w-[300px] font-semibold mt-4 text-gray-700 dark:text-gray-300">
                {title}
              </div>
              <div className=" text-[12px] font-normal mt-2 text-gray-600 dark:text-gray-400">
                {descShort}
              </div>
              <button className="group  mt-8 pb-2 w-fit flex items-center gap-2 text-[12px] text-left text-gray-600 dark:text-gray-400 hover:text-[#FBBC05] transition-colors cursor-pointer">
                <span>Read more</span>
                <svg
                  className="h-[14px] w-[14px] transition-colors group-hover:fill-[#FBBC05]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-gray-500 dark:fill-gray-400 transition-colors group-hover:fill-[#FBBC05]"
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgMobile: PropTypes.string.isRequired,
    imgHover: PropTypes.string.isRequired,
    vector: PropTypes.string,
    vectorDark: PropTypes.string,
    vectorLeft: PropTypes.bool,
    desc: PropTypes.string.isRequired,
    descShort: PropTypes.string.isRequired,
  };

  return (
    <div
      id="our-services"
      className="flex flex-col items-center justify-center w-full mt-12 sm:mt-16 md:mt-28"
    >
      <div className="w-full max-w-[1300px] px-4 mx-auto">
        <h2 className="text-sm sm:text-base font-semibold text-center text-[#FBBC05]">
          <span className="bg-black px-4 py-2 pb-3 rounded-full">
            Our Services
          </span>
        </h2>

        <p className="mt-4 sm:mt-0 md:mt-0 sm:pt-4 text-[28px] sm:text-[52px] font-semibold text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto ">
          What we can build for you
        </p>

        <p className=" sm:pt-4 text-[16px] sm:text-[20px] text-center text-gray-600 dark:text-gray-400 mx-auto max-w-[800px] mt-1  ">
          We help your brand grow with innovative design, memorable branding,
          high-performing E-Commerce solutions, and smart marketing strategies.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-8 sm:mt-12 md:mt-16  px-4 sm:px-6 lg:px-8">
          {cards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
