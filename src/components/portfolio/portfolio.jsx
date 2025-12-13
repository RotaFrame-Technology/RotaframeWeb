import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import portfolioItems from "./portfolioItemsData.js";
function Portfolio({ noHeader = false }) {
  return (
    <div
      id="our-portfolio"
      className="flex flex-col w-full max-w-[1300px] mx-auto mt-28 sm:mt-32 md:mt-48 px-4"
    >
      {!noHeader && (
        <>
          <h2 className="text-sm sm:text-base font-semibold text-center text-[#FBBC05]">
            <span className="bg-black px-4 py-2 pb-3 rounded-full">
              Project Portfolio
            </span>
          </h2>
          <p className="mt-4 sm:mt-0 md:mt-0 sm:pt-4 text-[16px] sm:text-[52px] font-semibold text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto ">
            Building ideas into reality
          </p>
          <p className=" sm:pt-4 text-[12px] sm:text-[20px] text-center text-gray-600 dark:text-gray-400 mx-auto max-w-[800px] mt-1 ">
            A collection of our innovative delivered solutions and impactful
            success stories built through dedicated teamwork.
          </p>
        </>
      )}

      <div className="flex flex-col w-full gap-4 mt-8 sm:mt-12 md:mt-16">
        {[0, 3].map((start, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col sm:flex-row w-full gap-4"
          >
            {portfolioItems.slice(start, start + 3).map((item, index) => (
              <div
                key={index}
                className={`flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] hover:border-[#FFD400] transition-colors duration-300 rounded-[16px] h-auto min-h-[250px] sm:min-h-[260px] ${item.width} relative items-center`}
              >
                <div className="flex flex-col justify-between h-full py-6 sm:py-6 ml-6 w-full sm:w-1/2 ">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
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
                        <div className="text-xs sm:text-sm font-normal text-gray-800 dark:text-white">
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
                        <div className="text-xs sm:text-sm font-normal text-gray-800 dark:text-white">
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
                        <div className="text-xs sm:text-sm font-normal text-gray-800 dark:text-white">
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
                        <div className="text-xs sm:text-sm font-normal text-gray-800 dark:text-white">
                          Behance
                        </div>
                      </div>
                    )}

                    {/* Read more */}
                    <div className="mt-2">
                      {item.readMore ? (
                        // If item.readMore exists, link to external URL
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
                        // If no external link, route to internal project page
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
                <img
                  src={item.img}
                  className={`${item.imgClass} items-center justify-end`}
                  alt={item.title}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  noHeader: PropTypes.bool,
};

export default Portfolio;
