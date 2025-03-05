import LogoSlider from '../../components/logoSlider'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Topic */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Empowering your digital transformation with Innovative Solutions</h1>
      
      {/* Small Paragraph */}
      <p className="text-lg text-gray-600 max-w-xl mb-6">
      Welcome to Rotaframe Technology, where innovation meets functionality to redefine your online presence. Transcend boundaries to transform your digital aspirations into reality. As a renowned software development and IT consulting company, we take pride in delivering cutting-edge solutions that propel your business forward in the ever-evolving digital landscape.
      </p>
      
      {/* Buttons */}
      <div className="flex flex-row gap-5">
        <button className="px-6 py-3 bg-[#005F7E] text-white text-lg rounded-lg hover:bg-[#003F5E]">
          Request Proposal
        </button>
        <button className="px-6 py-3 bg-[#005F7E] text-white text-lg rounded-lg hover:bg-[#003F5E]">
          Contact Us
        </button>
      </div>

      <LogoSlider></LogoSlider>
      
    </div>

  

  );
}

export default HomePage;