import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import portfolioItems from "./portfolioItemsData.js";

const PortfolioPage = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-cover bg-center relative mt-16">
        <div className="w-full max-w-[1300px] px-4 mx-auto h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
          {/* Text */}
          <div className="text-left md:w-1/2">
            <p className="text-[18px] sm:text-[20px] ml-1 font-bold text-gray-800 dark:text-white">
              Project Portfolio
            </p>
            <h1 className="mt-2 text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight">
              <span className="text-gray-600 dark:text-gray-400 block">
                Innovating the
              </span>{" "}
              <div className="text-gray-800 dark:text-white">Future</div>
            </h1>
          </div>

          {/* Video Thumbnail */}
          <div className="relative w-full md:w-1/2 max-w-md aspect-video bg-black rounded-lg overflow-hidden cursor-pointer">
            <img
              src="/assets/images/video-thumbnail.png"
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
      <div className="mt-12 sm:mt-28 md:mt-28">
        <Banner noMargins={true} />
      </div>

      <hr className="w-full border-t border-[#2E2E2E] mt-16 sm:mt-28 md:mt-28" />

      {/* Direct Portfolio Grid */}
      <div className="flex flex-col w-full max-w-[1300px] px-4 mx-auto mt-16 sm:mt-28 md:mt-28">
        <div className="flex flex-col w-full gap-4">
          {[0, 2, 4, 6].map((start, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col sm:flex-row w-full gap-4"
            >
              {portfolioItems.slice(start, start + 2).map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717]  min-h-[250px] sm:min-h-[260px] md:min-h-[300px] w-full sm:w-1/2 overflow-hiddenflex    hover:border-[#FFD400] transition-colors duration-300 rounded-[16px] h-auto ${item.width} relative items-center"
                >
                  {/* Left content */}
                  <div className="flex flex-col justify-between h-full py-0 sm:py-4 md:py-8 ml-6 w-full sm:w-1/2 ">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-1 md:gap-2">
                        <img
                          src={item.icon}
                          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] invert dark:invert-0"
                          alt="Portfolio Icon"
                        />
                        <div className=" text-lg sm:text-xl md:text-2xl  font-semibold text-gray-700 dark:text-gray-300">
                          {item.title}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {item.description}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-6 sm:mt-16">
                      {/* GitHub */}
                      {item.github ? (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center gap-2 cursor-pointer"
                        >
                          <img
                            src="/assets/images/github.png"
                            className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                            alt="GitHub Icon"
                          />
                          <div className="text-sm sm:text-base font-normal text-gray-800 dark:text-white">
                            GitHub
                          </div>
                        </a>
                      ) : (
                        <div className="flex flex-row items-center gap-2">
                          <img
                            src="/assets/images/github.png"
                            className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                            alt="GitHub Icon"
                          />
                          <div className="text-sm sm:text-base font-normal text-gray-800 dark:text-white">
                            GitHub
                          </div>
                        </div>
                      )}

                      {/* Behance */}
                      {item.behance ? (
                        <a
                          href={item.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-row items-center gap-2 cursor-pointer"
                        >
                          <img
                            src="/assets/images/behance.png"
                            className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                            alt="Behance Icon"
                          />
                          <div className="text-sm sm:text-base font-normal text-gray-800 dark:text-white">
                            Behance
                          </div>
                        </a>
                      ) : (
                        <div className="flex flex-row items-center gap-2">
                          <img
                            src="/assets/images/behance.png"
                            className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                            alt="Behance Icon"
                          />
                          <div className="text-sm sm:text-base font-normal text-gray-800 dark:text-white">
                            Behance
                          </div>
                        </div>
                      )}

                      {/* Read more */}
                      <div className="mt-2">
                        {item.readMore ? (
                          <a
                            href={item.readMore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-2 cursor-pointer"
                          >
                            <div className="text-xs sm:text-sm font-normal text-[#898989] hover:text-[#FFD400]">
                              Read more
                            </div>
                            <img
                              src="/assets/images/arrowup.png"
                              className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]"
                              alt="Arrow"
                            />
                          </a>
                        ) : (
                          <Link
                            to={`/portfolio/${item.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`}
                            onClick={() => {
                              sessionStorage.setItem(
                                "portfolioScroll",
                                window.scrollY
                              );
                              sessionStorage.setItem("scrollToTop", "true");
                            }}
                            className="w-fit group flex flex-row items-center gap-2 cursor-pointer"
                          >
                            <div className="text-xs sm:text-sm font-normal text-[#898989] group-hover:text-[#FFD400]">
                              Read more
                            </div>
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
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="flex items-center justify-center w-4/5 sm:w-1/2">
                    <img
                      src={item.img}
                      className={item.imgClass}
                      alt={item.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Logo Slider */}
      <div className="services-container flex flex-col items-center w-full ">
        <hr className="w-full border-t  border-[#2E2E2E] mt-16 sm:mt-28 md:mt-28" />
        <div className="w-full px-4">
          <LogoSlider noMargin />
        </div>
        <hr className="w-full border-t border-[#2E2E2E]" />
        {/* Contact Section */}
        <div
          id="contact"
          className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-28 md:mt-28"
        >
          <ContactUs noMargin />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
