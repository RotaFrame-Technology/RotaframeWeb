import LogoSlider from '../../components/logoSlider/logoSlider'

function HomePage() {
  return (
    <section className="w-full bg-white dark:bg-[#121212] transition-colors duration-300 flex justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 w-full max-w-[1440px]">
        
        {/* Heading */}
        <h1 className="text-[65px] leading-[72px] font-bold mb-4 w-11/12 text-gray-800 dark:text-white">
          Empowering your digital transformation with{" "}
          <span className="text-[#FFD400]">Innovative Solutions!</span>
        </h1>

        {/* Paragraph */}
        <p className="text-[17.44px] leading-[28px] mb-6 w-9/12 text-gray-700 dark:text-gray-300">
          Welcome to Rotaframe Technology, where innovation meets functionality to redefine your online presence.
          Transcend boundaries to transform your digital aspirations into reality. As a renowned software development and
          IT consulting company, we take pride in delivering cutting-edge solutions that propel your business forward in the
          ever-evolving digital landscape.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-[#FFD400] text-black text-lg font-semibold rounded-lg hover:bg-[#003F5E]">
            Request Proposal
          </button>
          <button className="px-6 py-3 bg-[#287150] text-white text-lg font-semibold rounded-lg hover:bg-[#003F5E]">
            Contact Us
          </button>
        </div>
        <LogoSlider />
      </div>
      
    </section>
    
  );
}

export default HomePage;

