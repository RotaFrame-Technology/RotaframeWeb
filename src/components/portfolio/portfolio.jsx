import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import portfolioItems from "./portfolioItemsData.js";

function Portfolio({ noHeader = false }) {
  const handleCardClick = () => {
    sessionStorage.setItem("portfolioScroll", window.scrollY);
    sessionStorage.setItem("scrollToTop", "true");
  };

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
          <p className="mt-4 sm:mt-0 md:mt-0 sm:pt-4 text-[28px] sm:text-[52px] font-semibold text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Building ideas into reality
          </p>
          <p className="sm:pt-4 text-[16px] sm:text-[20px] text-center text-gray-600 dark:text-gray-400 mx-auto max-w-[800px] mt-1">
            A collection of our innovative delivered solutions and impactful success stories built through dedicated teamwork.
          </p>
        </>
      )}

      <div className="flex flex-col w-full gap-8 mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-0">
        {/* Desktop Layout */}
        <div className="hidden sm:flex flex-col gap-6">
          {[0, 3].map((start, rowIndex) => (
            <div key={rowIndex} className="flex flex-col sm:flex-row w-full gap-4">
              {portfolioItems.slice(start, start + 3).map((item, index) => {
                const isExternal = !!item.readMore;
                const linkUrl = isExternal
                  ? item.readMore
                  : `/portfolio/${item.title.replace(/\s+/g, "-").toLowerCase()}`;

                return (
                  <div
                    key={index}
                    className={`relative border border-gray-300 dark:border-gray-600 bg-[#EDEDED] dark:bg-[#171717] hover:border-[#FFD400] transition-colors duration-300 rounded-[16px] h-auto min-h-[240px] sm:min-h-[220px] ${item.width} overflow-hidden cursor-pointer`}
                  >
                    {/* Full-card */}
                    {isExternal ? (
                      <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        onClick={handleCardClick}
                      />
                    ) : (
                      <Link
                        to={linkUrl}
                        onClick={handleCardClick}
                        className="absolute inset-0 z-10"
                      />
                    )}

                    {/* Text Content */}
                    <div className="relative z-20 flex flex-col justify-between h-full py-5 pl-4 pr-12 sm:pr-4 md:pl-6 w-full sm:w-3/5 lg:w-1/2">
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-2">
                          <img
                            src={item.icon}
                            className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] invert dark:invert-0"
                            alt="Portfolio Icon"
                          />
                          <div className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300">
                            {item.title}
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xs">
                          {item.description}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1 mt-4 sm:mt-8">
                        {/* GitHub */}
                        {item.github ? (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 relative z-30"
                          >
                            <img
                              src="/assets/images/github.png"
                              className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                              alt="GitHub"
                            />
                            <span className="text-xs sm:text-sm text-gray-800 dark:text-white">
                              GitHub
                            </span>
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 opacity-50">
                            <img
                              src="/assets/images/github.png"
                              className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                              alt="GitHub"
                            />
                            <span className="text-xs sm:text-sm text-gray-800 dark:text-white">
                              GitHub
                            </span>
                          </div>
                        )}

                        {/* Behance */}
                        {item.behance ? (
                          <a
                            href={item.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 relative z-30"
                          >
                            <img
                              src="/assets/images/behance.png"
                              className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                              alt="Behance"
                            />
                            <span className="text-xs sm:text-sm text-gray-800 dark:text-white">
                              Behance
                            </span>
                          </a>
                        ) : (
                          <div className="flex items-center gap-2 opacity-50">
                            <img
                              src="/assets/images/behance.png"
                              className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] invert dark:invert-0"
                              alt="Behance"
                            />
                            <span className="text-xs sm:text-sm text-gray-800 dark:text-white">
                              Behance
                            </span>
                          </div>
                        )}

                        {/* Read more */}
                        <div className="mt-3">
                          {item.readMore ? (
                            <a
                              href={item.readMore}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 relative z-30"
                            >
                              <span className="text-xs sm:text-sm text-[#898989] hover:text-[#FFD400]">
                                Read more
                              </span>
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
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCardClick();
                              }}
                              className="group flex items-center gap-2 relative z-30"
                            >
                              <span className="text-xs sm:text-sm text-[#898989] group-hover:text-[#FFD400]">
                                Read more
                              </span>
                              <svg
                                className="h-[14px] w-[14px] group-hover:fill-[#FBBC05]"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  className="fill-gray-500 dark:fill-gray-400 group-hover:fill-[#FBBC05]"
                                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM8.64 12.81L13.02 8.43H10.59C10.18 8.43 9.84 8.09 9.84 7.68C9.84 7.27 10.18 6.93 10.59 6.93H14.83C14.93 6.93 15.02 6.95 15.12 6.99C15.3 7.07 15.45 7.21 15.53 7.4C15.57 7.49 15.59 7.59 15.59 7.69V11.93C15.59 12.34 15.25 12.68 14.84 12.68C14.43 12.68 14.09 12.34 14.09 11.93V9.5L9.7 13.87C9.55 14.02 9.36 14.09 9.17 14.09C8.98 14.09 8.79 14.02 8.64 13.87C8.35 13.58 8.35 13.1 8.64 12.81ZM18.24 17.22C16.23 17.89 14.12 18.23 12 18.23C9.88 18.23 7.77 17.89 5.76 17.22C5.37 17.09 5.16 16.66 5.29 16.27C5.42 15.88 5.84 15.66 6.24 15.8C9.96 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.84 16.67 18.63 17.09 18.24 17.22Z"
                                />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="absolute inset-y-0 right-0 flex items-center justify-end pointer-events-none">
                      <img
                        src={item.img}
                        alt={item.title}
                        className={`${item.imgClass} object-contain max-w-none h-full opacity-60 sm:opacity-70 lg:opacity-80`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="flex sm:hidden flex-col gap-6">
          {portfolioItems.map((item, index) => {
            const isExternal = !!item.readMore;
            const linkUrl = isExternal
              ? item.readMore
              : `/portfolio/${item.title.replace(/\s+/g, "-").toLowerCase()}`;

            return (
              <div
                key={index}
                className="relative flex flex-col border border-gray-300 dark:border-gray-600 rounded-[24px] hover:border-[#FFD400] transition-colors duration-300 overflow-hidden cursor-pointer"
              >
                {/* Full-card */}
                {isExternal ? (
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    onClick={handleCardClick}
                  />
                ) : (
                  <Link
                    to={linkUrl}
                    onClick={handleCardClick}
                    className="absolute inset-0 z-10"
                  />
                )}

                {/* Mobile Image */}
                <div className="relative h-[220px] overflow-hidden flex items-center justify-center">
                  <img
                    src={item.imgMobile}
                    className="max-w-full max-h-full object-contain py-4"
                    alt={item.title}
                  />
                </div>

                {/* Mobile Content */}
                <div className="relative z-20 flex flex-col bg-[#EDEDED] dark:bg-[#171717] p-6 pt-4">
                  <div className="flex flex-row items-center gap-2 mb-4">
                    <img
                      src={item.icon}
                      className="h-[18px] w-[18px] invert dark:invert-0"
                      alt="Icon"
                    />
                    <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                      {item.title}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {item.description}
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* GitHub */}
                    {item.github ? (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 relative z-30"
                      >
                        <img
                          src="/assets/images/github.png"
                          className="h-[20px] w-[20px] invert dark:invert-0"
                          alt="GitHub"
                        />
                        <span className="text-sm text-gray-800 dark:text-white">GitHub</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 opacity-50">
                        <img
                          src="/assets/images/github.png"
                          className="h-[20px] w-[20px] invert dark:invert-0"
                          alt="GitHub"
                        />
                        <span className="text-sm text-gray-800 dark:text-white">GitHub</span>
                      </div>
                    )}

                    {/* Behance */}
                    {item.behance ? (
                      <a
                        href={item.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 relative z-30"
                      >
                        <img
                          src="/assets/images/behance.png"
                          className="h-[20px] w-[20px] invert dark:invert-0"
                          alt="Behance"
                        />
                        <span className="text-sm text-gray-800 dark:text-white">Behance</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 opacity-50">
                        <img
                          src="/assets/images/behance.png"
                          className="h-[20px] w-[20px] invert dark:invert-0"
                          alt="Behance"
                        />
                        <span className="text-sm text-gray-800 dark:text-white">Behance</span>
                      </div>
                    )}

                    {/* Read more */}
                    <div className="mt-4">
                      {item.readMore ? (
                        <a
                          href={item.readMore}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 relative z-30"
                        >
                          <span className="text-sm text-[#898989] hover:text-[#FFD400]">
                            Read more
                          </span>
                          <img
                            src="/assets/images/arrowup.png"
                            className="h-[20px] w-[20px]"
                            alt="Arrow"
                          />
                        </a>
                      ) : (
                        <Link
                          to={`/portfolio/${item.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick();
                          }}
                          className="group flex items-center gap-2 relative z-30"
                        >
                          <span className="text-sm text-[#898989] group-hover:text-[#FFD400]">
                            Read more
                          </span>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  noHeader: PropTypes.bool,
};

export default Portfolio;