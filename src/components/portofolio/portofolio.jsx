function Portfolio() {
  const portfolioItems = [
    {
      title: "insider Business",
      description:
        "A dynamic web landing page aimed at driving sales for a specific product. The landing page serves as the initial point of contact for potential customers.",
      icon: "/assets/images/portfolioicon.png",
      img: "/assets/images/portfolio1.png",
      imgClass:
        "h-[200px] sm:h-[300px] md:h-[330px] w-[200px] sm:w-[300px] md:w-[350px]",
      width: "w-full sm:w-2/4",
    },
    {
      title: "Travel Nebula",
      description:
        "This project aims to develop a user-friendly and visually engaging mobile application interface for seamless travel ticket booking.",
      icon: "/assets/images/portfoliomobileicon.png",
      img: "/assets/images/portfolio2.png",
      imgClass:
        "h-[180px] sm:h-[250px] md:h-[300px] w-[100px] sm:w-[120px] md:w-[145px]",
      width: "w-full sm:w-1/4",
    },
    {
      title: "iNfo",
      description:
        "This project aims to develop a user-friendly and visually engaging mobile application interface for seamless travel ticket booking.",
      icon: "/assets/images/portfoliomobileicon.png",
      img: "/assets/images/portfolio3.png",
      imgClass:
        "h-[180px] sm:h-[250px] md:h-[300px] w-[100px] sm:w-[120px] md:w-[145px]",
      width: "w-full sm:w-1/4",
    },
    {
      title: "insider Business",
      description:
        "A dynamic web landing page aimed at driving sales for a specific product. The landing page serves as the initial point of contact for potential customers.",
      icon: "/assets/images/portfoliomobileicon.png",
      img: "/assets/images/portfolio2.png",
      imgClass:
        "h-[180px] sm:h-[250px] md:h-[300px] w-[100px] sm:w-[120px] md:w-[145px]",
      width: "w-full sm:w-1/4",
    },
    {
      title: "insider Business",
      description:
        "A dynamic web landing page aimed at driving sales for a specific product. The landing page serves as the initial point of contact for potential customers.",
      icon: "/assets/images/portfoliomobileicon.png",
      img: "/assets/images/portfolio3.png",
      imgClass:
        "h-[180px] sm:h-[250px] md:h-[300px] w-[100px] sm:w-[120px] md:w-[145px]",
      width: "w-full sm:w-1/4",
    },
    {
      title: "insider Business",
      description:
        "A dynamic web landing page aimed at driving sales for a specific product. The landing page serves as the initial point of contact for potential customers.",
      icon: "/assets/images/portfolioicon.png",
      img: "/assets/images/portfolio1.png",
      imgClass:
        "h-[200px] sm:h-[300px] md:h-[330px] w-[200px] sm:w-[300px] md:w-[350px]",
      width: "w-full sm:w-2/4",
    },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-24">
      <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800 dark:text-white">
        Our Portfolio
      </div>
      <div className="pt-4 text-sm sm:text-base font-normal text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Kickstart your next project with templates built by us and our
        community.
      </div>
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
                    <div className="text-xs sm:text-sm text-[#898989] mt-2">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-4 sm:mt-6">
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
                    <div className="flex flex-row items-center gap-2 mt-3">
                      <div className="text-xs sm:text-sm font-normal text-[#898989]">
                        Read more
                      </div>
                      <img
                        src="/assets/images/arrowup.png"
                        className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px]"
                        alt="Arrow"
                      />
                    </div>
                  </div>
                </div>
                <img
                  src={item.img}
                  className={`${item.imgClass} mt-4 ml-3 sm:mt-0 sm:self-end`}
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

export default Portfolio;
