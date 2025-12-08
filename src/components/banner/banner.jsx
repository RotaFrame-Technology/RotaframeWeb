import { AuroraText } from "@/components/ui/aurora-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

function Banner() {
  return (
    <div className="relative mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
      <div className="relative h-[150px] w-full max-w-[1200px]">
          <FlickeringGrid />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto min-h-[130px] flex flex-col lg:flex-row items-center gap-6 lg:gap-0 px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Text Section */}
        <div className="flex flex-col w-full lg:w-3/4 gap-1 text-center lg:text-left">
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 xl:text-[32px]">
            What can you get from
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-bold text-gray-700 dark:text-gray-300">
            <AuroraText colors={["#FFD400", "#F4A300", "#E0E0E0", "#FFD400"]}>
              Rotaframe Technology
            </AuroraText>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-between w-full lg:w-3/5 gap-6 sm:gap-4 lg:gap-2 lg:px-2">
          <div className="flex flex-col items-center gap-1">
            <div className="text-[40px] font-semibold text-gray-700 dark:text-gray-300">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-[20px]">
              Availability
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-[40px] font-semibold text-gray-700 dark:text-gray-300">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-[20px]">
              Customer Satisfaction
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="text-[40px] font-semibold text-gray-700 dark:text-gray-300">
              FREE
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-[20px]">
              Consultation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
