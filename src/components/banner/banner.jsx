import { AuroraText } from "@/components/ui/aurora-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

function Banner({ noMargins = false }) {
  return (
    <div
      className={`relative ${
        noMargins ? "" : "mt-28 sm:mt-32 md:mt-48"
      } px-4 sm:px-6 lg:px-8`}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="h-[140px] sm:h-[160px] lg:h-[150px] w-full max-w-[1200px] mx-auto">
          <FlickeringGrid />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-4 sm:px-6 lg:px-10">
        {/* Text */}
        <div className="flex flex-col gap-1 text-center lg:text-left w-full lg:w-3/4">
          <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-[32px] text-gray-600 dark:text-gray-400">
            What can you get from
          </div>
          <div className="text-[32px] sm:text-4xl lg:text-5xl xl:text-[44px] font-bold text-gray-700 dark:text-gray-300">
            <AuroraText colors={["#FFD400", "#F4A300", "#E0E0E0", "#FFD400"]}>
              Rotaframe Technology
            </AuroraText>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-20 w-full lg:w-3/5">
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="text-[32px] sm:text-4xl lg:text-[40px] font-semibold text-gray-700 dark:text-gray-300">
              24/7
            </div>
            <div className="text-base sm:text-lg lg:text-[20px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
              Availability
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <div className="text-[32px] sm:text-4xl lg:text-[40px] font-semibold text-gray-700 dark:text-gray-300">
              100%
            </div>
            <div className="text-base sm:text-lg lg:text-[20px] text-gray-600 dark:text-gray-400">
              <span className="block sm:inline">Customer</span>
              <span className="block sm:inline sm:ml-1">Satisfaction</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <div className="text-[32px] sm:text-4xl lg:text-[40px] font-semibold text-gray-700 dark:text-gray-300">
              FREE
            </div>
            <div className="text-base sm:text-lg lg:text-[20px] text-gray-600 dark:text-gray-400 whitespace-nowrap">
              Consultation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
