import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import portfolioItems from "@/components/portfolio/portfolioItemsData";

const PortfolioPage = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[300px] bg-cover bg-center relative mt-16">
        <div className="w-full max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-4 sm:px-6 lg:px-10">
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
      <Banner />

      <hr className="w-full border-t mt-20 border-[#2E2E2E]" />

      {/* Direct Portfolio Grid */}
      <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="flex flex-col w-full gap-4">
          {[0, 2, 4, 6].map((start, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col sm:flex-row w-full gap-4"
            >
              {portfolioItems.slice(start, start + 2).map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] min-h-[300px] w-full sm:w-1/2 overflow-hidden"
                >
                  {/* Left content */}
                  <div className="flex flex-col justify-between h-full py-6 sm:py-10 px-4 sm:px-6 w-full sm:w-1/2 z-10">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-2">
                        <img
                          src={item.icon}
                          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] invert dark:invert-0"
                          alt="Portfolio Icon"
                        />
                        <div className="text-base sm:text-lg font-normal text-gray-800 dark:text-white">
                          {item.title}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {item.description}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4 sm:mt-6">
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
                      <div className="mt-3">
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
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right image */}
                  <img
                    src={item.img}
                    className={`${item.imgClass} absolute bottom-0 right-0  h-auto object-contain`}
                    alt={item.title}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Logo Slider */}
      <div className="services-container flex flex-col mt-10 items-center w-full py-14 sm:py-16">
        <hr className="w-full border-t mt-20 border-[#2E2E2E]" />
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
          <LogoSlider noMargin />
        </div>
        <hr className="w-full border-t mt-20 border-[#2E2E2E]" />

        {/* Contact Section */}
        <div
          id="contact"
          className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16"
        >
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
