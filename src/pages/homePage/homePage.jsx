import LogoSlider from '../../components/logoSlider/logoSlider'

function HomePage() {
  return (
    <section className="w-full bg-white dark:bg-[#121212] transition-colors duration-300 flex justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 w-full max-w-[1440px]">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-tight sm:leading-snug md:leading-[60px] lg:leading-[70px] xl:leading-[72px] font-bold mb-4 w-full sm:w-11/12 text-gray-800 dark:text-white">
          Empowering your digital transformation with{" "}
          <span className="text-[#FFD400]">Innovative Solutions!</span>
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-[17.44px] leading-6 sm:leading-7 md:leading-[28px] mb-6 w-full sm:w-10/12 md:w-9/12 text-gray-700 dark:text-gray-300">
          Welcome to Rotaframe Technology, where innovation meets functionality to redefine your online presence.
          Transcend boundaries to transform your digital aspirations into reality. As a renowned software development and
          IT consulting company, we take pride in delivering cutting-edge solutions that propel your business forward in the
          ever-evolving digital landscape.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
          <button className="w-full sm:w-auto px-4 sm:px-6 h-[45px] bg-[#FFD400] text-black text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer">
  Request Proposal
</button>

<button
  onClick={() => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }}
  className="w-full sm:w-auto px-4 sm:px-6 h-[45px] border border-black text-black dark:border-[#FFD400] dark:text-[#FFD400] text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 hover:bg-black hover:text-white dark:hover:bg-[#FFD400] dark:hover:text-black cursor-pointer"
>
  Contact Us
</button>


        </div>

        <LogoSlider />
      </div>
    </section>
  );
}

export default HomePage;
