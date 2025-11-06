/* OurServices.jsx */
import React from "react";
import PropTypes from "prop-types";

function OurServices() {
  const cards = [
    {
      id: 1,
      title: "e-Commerce Development",
      tag: "Multi-Platform",
      img: "/assets/images/service1.svg",
      imgHover: "/assets/images/servicecol1.png",
      vector: "/assets/images/VectorWhite.png",
      vectorDark: "/assets/images/Vector.png",
      vectorLeft: false,
      desc: "Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications. ",
      descShort: "Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors.",
    },
    {
      id: 2,
      title: "Custom Software Development",
      tag: "Multi-Platform",
      img: "/assets/images/service2.png",
      imgHover: "/assets/images/service2cols.png",
      vector: "/assets/images/VectorLeftWhite.png",
      vectorDark: "/assets/images/VectorLeft.png",
      vectorLeft: true,
      desc: "Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications. ",
      descShort: "Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors.",
    },
    {
      id: 3,
      title: "Mobile Application Development",
      tag: "Multi-Platform",
      img: "/assets/images/service3.png",
      imgHover: "/assets/images/service3cols.png",
      vector: "/assets/images/VectorWhite.png",
      vectorDark: "/assets/images/Vector.png",
      vectorLeft: false,
      desc: "Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications. ",
      descShort: "Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications.",
    },
    {
      id: 4,
      title: "UX/UI & Product Development",
      tag: "Multi-Platform",
      img: "/assets/images/service4.png",
      imgHover: "/assets/images/service4cols.png",
      vector: "/assets/images/VectorLeftWhite.png",
      vectorDark: "/assets/images/VectorLeft.png",
      vectorLeft: true,
      desc: "Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications. ",
      descShort: "Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors.",
    },
  ];

  const ServiceCard = ({
    title,
    tag,
    img,
    imgHover,
    vector,
    vectorDark,
    vectorLeft,
    desc,
    descShort,
  }) => (
    <div className="relative group">
      {/* Vector Background — HEIGHT FIXED TO MATCH CARD */}
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
        <div className="hidden lg:grid h-[320px] items-center"> {/* ← Reduced to match card */}
          <div className="grid grid-cols-5 h-[320px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400] transition-colors duration-300">
            <div className="col-span-2 relative overflow-hidden">
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
              <div className="text-[#FBBC05] font-semibold">{tag}</div>
              <div className="pt-2 text-2xl font-normal">{title}</div>
              <div className="pt-2 text-sm font-normal text-gray-600 dark:text-gray-400">{desc}</div>
              <button className="mt-6 flex items-center gap-2 text-sm text-left text-gray-600 dark:text-gray-400 hover:text-[#FBBC05] transition-colors">
                <span>Read more</span>
                <img src="/assets/images/arrowup.png" className="h-[14px] w-[14px]" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col border border-gray-400 rounded-2xl overflow-hidden group-hover:border-[#FFD400] transition-colors duration-300">
          <div className="relative h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden">
            <img
              src={img}
              className="w-full h-full object-cover group-hover:hidden transition-opacity duration-300"
              alt={title}
            />
            <img
              src={imgHover}
              className="w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
              alt={`${title} Hover`}
            />
          </div>
          <div className="flex flex-col bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white p-4 sm:p-6">
            <div className="text-[#FBBC05] font-semibold text-sm sm:text-base">{tag}</div>
            <div className="pt-2 text-lg sm:text-xl md:text-2xl font-normal">{title}</div>
            <div className="pt-2 text-sm font-normal text-gray-600 dark:text-gray-400">{descShort}</div>
            <button className="mt-4 sm:mt-6 flex items-center gap-2 text-sm text-left text-gray-600 dark:text-gray-400 hover:text-[#FBBC05] transition-colors">
              <span>Read more</span>
              <img src="/assets/images/arrowup.png" className="h-[14px] w-[14px]" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    imgHover: PropTypes.string.isRequired,
    vector: PropTypes.string,
    vectorDark: PropTypes.string,
    vectorLeft: PropTypes.bool,
    desc: PropTypes.string.isRequired,
    descShort: PropTypes.string.isRequired,
  };

return (
  <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
    <div className="w-full max-w-[1300px] px-4 mx-auto">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-800 dark:text-white mb-4">
        Our Services
      </h2>
      <p className="pt-2 sm:pt-4 text-sm sm:text-base font-normal text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
        Kickstart your next project with templates built by us and our community.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {cards.map((card) => (
          <ServiceCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </div>
);

}

export default OurServices;