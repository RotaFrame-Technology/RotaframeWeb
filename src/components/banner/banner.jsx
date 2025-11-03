function Banner() {
  return (
    <div className="flex flex-row justify-center mt-12 sm:mt-18 md:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1440px] mx-auto min-h-[130px] flex flex-col lg:flex-row items-center gap-6 lg:gap-0 px-4 sm:px-6 lg:px-10">
        {/* Text Section */}
        <div className="flex flex-col w-full lg:w-2/5 gap-1 text-center lg:text-left">
          <div className="text-2xl sm:text-3xl lg:text-4xl text-[#898989] font-semibold">
            What can you get
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
            from Rotaframe
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-between w-full lg:w-3/5 gap-6 sm:gap-4 lg:gap-0 lg:px-12">
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
              24/7
            </div>
            <div className="text-[#898989] text-xs sm:text-sm font-semibold">
              Availability
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
              100%
            </div>
            <div className="text-[#898989] text-xs sm:text-sm font-semibold text-center">
              Customer Satisfaction
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
              FREE
            </div>
            <div className="text-[#898989] text-xs sm:text-sm font-semibold">
              Consultation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;