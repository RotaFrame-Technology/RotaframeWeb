function Portfolio() {
  return (
    <div className="flex flex-col px-20 pt-24">
      <div className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
        Our Portfolio
      </div>
      <div className="pt-4 text-base font-normal text-center text-gray-700 dark:text-gray-300">
        Kickstart your next project with templates built by us and our
        community.
      </div>
      <div className="flex flex-col w-full gap-4 mt-20">
        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-[400px] w-2/4 relative items-center">
            <div className="flex flex-col justify-between h-full py-10 ml-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src="/assets/images/portfolioicon.png"
                    className="h-[18px] w-[18px] invert dark:invert-0"
                  />

                  <div className="text-lg font-normal text-gray-800 dark:text-white">
                    insider Business
                  </div>
                </div>
                <div className="text-sm text-[#898989] w-1/2 mt-2">
                  A{" "}
                  <span className="text-gray-800 dark:text-white">dynamic</span>{" "}
                  web landing page aimed at driving sales for a specific
                  product. The{" "}
                  <span className="text-gray-800 dark:text-white">
                    landing page
                  </span>{" "}
                  serves as the initial point of contact for potential.
                </div>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/github.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">GitHub</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/behance.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">
                    Bechance
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-3">
                  <div className="text-sm font-normal text-[#898989]">
                    Read more
                  </div>
                  <img
                    src={"/assets/images/arrowup.png"}
                    className="h-[20px] w-[20px] "
                  />
                </div>
              </div>
            </div>
            <img
              src={"/assets/images/portfolio1.png"}
              className="h-[330px] w-[350px] absolute right-0"
            />
          </div>

          <div className="flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-[400px] w-1/4 relative items-center">
            <div className="flex flex-col justify-between h-full py-10 ml-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/portfoliomobileicon.png"}
                    className="h-[18px] w-[18px] invert dark:invert-0"
                  />
                  <div className="text-lg font-normal text-gray-800 dark:text-white">
                    Travel Nebula
                  </div>
                </div>
                <div className="text-sm text-[#898989] w-1/2 mt-2">
                  This project aims to develop a user-friendly and visually engaging mobile application interface for seamless travel ticket booking.
                </div>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/github.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">GitHub</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/behance.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">
                    Bechance
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-3">
                  <div className="text-sm font-normal text-[#898989]">
                    Read more
                  </div>
                  <img
                    src={"/assets/images/arrowup.png"}
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
            </div>
            <img
              src={"/assets/images/portfolio2.png"}
              className="h-[300px] w-[145px] absolute right-0"
            />
          </div>

          <div className="flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-[400px] w-1/4 relative items-center">
            <div className="flex flex-col justify-between h-full py-10 ml-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/portfoliomobileicon.png"}
                    className="h-[18px] w-[16px] invert dark:invert-0"
                  />
                  <div className="text-lg font-normal text-gray-800 dark:text-white">
                    iNfo
                  </div>
                </div>
                <div className="text-sm text-[#898989] w-1/2 mt-2">
                  This project aims to develop a user-friendly and visually engaging mobile application interface for seamless travel ticket booking.
                </div>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/github.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">GitHub</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/behance.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">
                    Bechance
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-3">
                  <div className="text-sm font-normal text-[#898989]">
                    Read more
                  </div>
                  <img
                    src={"/assets/images/arrowup.png"}
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
            </div>
            <img
              src={"/assets/images/portfolio3.png"}
              className="h-[300px] w-[145px] absolute right-0"
            />
          </div>
        </div>

        <div className="flex flex-row w-full gap-4">
          <div className="flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-[400px] w-1/4 relative items-center">
            <div className="flex flex-col justify-between h-full py-10 ml-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/portfoliomobileicon.png"}
                    className="h-[18px] w-[16px] invert dark:invert-0"
                  />
                  <div className="text-lg font-normal text-gray-800 dark:text-white">
                    insider Business
                  </div>
                </div>
                <div className="text-sm text-[#898989] w-1/2 mt-2">
                  A{" "}
                  <span className="text-gray-800 dark:text-white">dynamic</span>{" "}
                  web landing page aimed at driving sales for a specific
                  product. The{" "}
                  <span className="text-gray-800 dark:text-white">
                    landing page
                  </span>{" "}
                  serves as the initial point of contact for potential.
                </div>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/github.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">GitHub</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/behance.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">
                    Bechance
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-3">
                  <div className="text-sm font-normal text-[#898989]">
                    Read more
                  </div>
                  <img
                    src={"/assets/images/arrowup.png"}
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
            </div>
            <img
              src={"/assets/images/portfolio2.png"}
              className="h-[300px] w-[145px] absolute right-0"
            />
          </div>

          <div className="flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-[400px] w-1/4 relative items-center">
            <div className="flex flex-col justify-between h-full py-10 ml-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/portfoliomobileicon.png"}
                    className="h-[18px] w-[16px] invert dark:invert-0"
                  />
                  <div className="text-lg font-normal text-gray-800 dark:text-white">
                    insider Business
                  </div>
                </div>
                <div className="text-sm text-[#898989] w-1/2 mt-2">
                  A{" "}
                  <span className="text-gray-800 dark:text-white">dynamic</span>{" "}
                  web landing page aimed at driving sales for a specific
                  product. The{" "}
                  <span className="text-gray-800 dark:text-white">
                    landing page
                  </span>{" "}
                  serves as the initial point of contact for potential.
                </div>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/github.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">GitHub</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/behance.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">
                    Bechance
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 mt-3">
                  <div className="text-sm font-normal text-[#898989]">
                    Read more
                  </div>
                  <img
                    src={"/assets/images/arrowup.png"}
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
            </div>
            <img
              src={"/assets/images/portfolio3.png"}
              className="h-[300px] w-[145px] absolute right-0"
            />
          </div>
          <div className="flex flex-row border border-gray-400 bg-[#EDEDED] dark:bg-[#171717] rounded-[12px] h-[400px] w-2/4 relative items-center">
            <div className="flex flex-col justify-between h-full py-10 ml-4">
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/portfolioicon.png"}
                    className="h-[18px] w-[18px] invert dark:invert-0"
                  />
                  <div className="text-lg font-normal text-gray-800 dark:text-white">
                    insider Business
                  </div>
                </div>
                <div className="text-sm text-[#898989] w-1/2 mt-2">
                  A{" "}
                  <span className="text-gray-800 dark:text-white">dynamic</span>{" "}
                  web landing page aimed at driving sales for a specific
                  product. The{" "}
                  <span className="text-gray-800 dark:text-white">
                    landing page
                  </span>{" "}
                  serves as the initial point of contact for potential.
                </div>
              </div>

              <div className="flex flex-col gap-1 text-white">
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/github.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">GitHub</div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <img
                    src={"/assets/images/behance.png"}
                    className="h-[20px] w-[20px] invert dark:invert-0"
                  />
                  <div className="text-base font-normal text-gray-800 dark:text-white">
                    Bechance
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 mt-3">
                  <div className="text-sm font-normal text-[#898989]">
                    Read more
                  </div>
                  <img
                    src={"/assets/images/arrowup.png"}
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
            </div>
            <img
              src={"/assets/images/portfolio1.png"}
              className="h-[330px] w-[350px] absolute right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
