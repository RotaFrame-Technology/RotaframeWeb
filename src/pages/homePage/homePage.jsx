import LogoSlider from "../../components/logoSlider/logoSlider";
import OurServices from "../../components/our_services/our_services";
import Portfolio from "../../components/portfolio/portfolio";
import Banner from "../../components/banner/banner";
import ContactUs from "../../components/contact_us/contact_us";
import { AuroraText } from "@/components/ui/aurora-text";
import Snowfall from "react-snowfall";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="
          relative w-full 
          h-[90vh] 
          -mt-[84px] pt-[84px]
          bg-white dark:bg-[#121212]
          overflow-hidden
          flex justify-center items-center
        "
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/heroBG.png"
            className="w-full h-full object-cover object-top"
            alt="Vector Background"
          />
        </div>

        {/* Snow Effect (Hero only) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Snowfall
            snowflakeCount={120}
            speed={[0.5, 1.5]}
            wind={[-0.2, 0.2]}
            radius={[0.6, 2.2]}
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-[1440px] relative z-20 mt-8">
          <h1 className="text-[36px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[56px] leading-tight sm:leading-snug md:leading-[60px] lg:leading-[70px] xl:leading-[72px] font-bold mb-4 w-full sm:w-11/12 text-white">
            Transforming Ideas into Intuitive{" "}
            <AuroraText colors={["#FFD400", "#F4A300", "#E0E0E0", "#FFD400"]}>
              Digital Experiences!
            </AuroraText>
          </h1>

          <p className="mt-4 px-8 text-[16px] sm:text-base md:text-lg lg:text-[24px] leading-6 sm:leading-7 md:leading-[28px] w-full sm:w-10/12 md:w-9/12 text-white dark:text-gray-300">
            We create digital solutions engineered for clarity and impact.
            <br className="hidden md:block" />
            Designed for long-term growth and meaningful results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-16 items-center w-full sm:w-auto mb-12">
            <a
              href="mailto:info@rotaframetechnology.com"
              className="w-[220px] sm:w-auto px-4 sm:px-6 h-[52px] border bg-[#FFD400] text-black text-base sm:text-lg font-semibold rounded-[16px] transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 flex items-center justify-center cursor-pointer"
            >
              Start your Project
            </a>

            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-[220px] sm:w-auto px-4 sm:px-6 h-[52px] border bg-gray-300 border-black text-black text-base sm:text-lg font-semibold rounded-[16px] transition-all duration-200 hover:brightness-95 hover:text-white dark:hover:text-black cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Logo Slider Section (Snow only here) */}
      <div className="relative w-full bg-white dark:bg-black overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Snowfall
            snowflakeCount={40}
            speed={[0.3, 1]}
            radius={[0.5, 1.5]}
          />
        </div>
        <LogoSlider />
      </div>

      {/* Other Sections (No Snow) */}
      <OurServices />
      <Banner />
      <Portfolio />
      <ContactUs />
    </>
  );
}

export default HomePage;
