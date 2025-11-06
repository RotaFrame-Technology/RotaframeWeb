import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import portfolioItems from "./portfolioItemsData.js";
function Portfolio({ noHeader = false }) {
  return (
    <div className="flex flex-col w-full max-w-[1300px] mx-auto mt-14 px-4 sm:mt-18 md:mt-26">
      {!noHeader && (
        <>
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white">
            Our Portfolio
          </div>
          <div className="pt-4 text-sm sm:text-base font-normal text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Kickstart your next project with templates built by us and our
            community.
          </div>
        </>
      )}

      <div className="flex flex-col w-full gap-4 mt-8 sm:mt-12 md:mt-20">
        {[0, 3].map((start, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-col sm:flex-row w-full gap-4"
          >
            {portfolioItems.slice(start, start + 3).map((item, index) => (
              <div
                key={index}
                className={`flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-auto min-h-[300px] ${item.width} relative items-center`}
              >
                <div className="flex flex-col justify-between h-full py-6 sm:py-10 ml-4 w-full sm:w-1/2">
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
                <img
                  src={item.img}
                  className={`${item.imgClass} mt-4 ml-3 sm:mt-0 sm:self-end sm:ml-auto`}
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
