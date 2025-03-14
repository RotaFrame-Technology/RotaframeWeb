import LogoSlider from '../../components/logoSlider/logoSlider'
import AppColors from '../../utils/colors/appColors';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 w-full">
      {/* Topic */}
      <h1 className="text-7xl font-bold text-gray-800 mb-4 w-11/12" style={{ color: AppColors.WhiteText }}>
        Empowering your digital transformation with <span style={{ color: AppColors.ThemeYellow }}>Innovative Solutions</span>
      </h1>

      {/* Small Paragraph */}
      <p className="text-lg mb-6 w-10/12" style={{ color: AppColors.NormalText }}>
        Welcome to Rotaframe Technology, where innovation meets functionality to redefine your online presence. Transcend boundaries to transform your digital aspirations into reality. As a renowned software development and IT consulting company, we take pride in delivering cutting-edge solutions that propel your business forward in the ever-evolving digital landscape.
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-5">
        <button className="px-6 py-3 text-black text-lg font-semibold rounded-lg hover:bg-[#003F5E]" style={{ backgroundColor: AppColors.ThemeYellow }}>
          Request Proposal
        </button>
        <button className="px-6 py-3 bg-[#287150] text-white text-lg font-semibold rounded-lg hover:bg-[#003F5E]">
          Contact Us
        </button>
      </div>
      
      {/* LogoSlider */}
      <div className='flex flex-row w-full'>
        <LogoSlider></LogoSlider>
      </div>

      {/* Testimonials */}


    </div>

  );
}

export default HomePage;