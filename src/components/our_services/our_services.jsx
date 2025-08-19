function OurServices() {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-center bg-cover bg-none dark:bg-[url('/assets/images/serviceBg.png')] dark:bg-cover">
      {/* Header Section */}
      <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center text-gray-800 dark:text-white mb-4">
        Our Services
      </div>
      <div className="pt-2 sm:pt-4 text-sm sm:text-base font-normal text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
        Kickstart your next project with templates built by us and our community.
      </div>

      {/* Card 1 - e-Commerce Development */}
      <div className="flex flex-row justify-center lg:justify-start mb-8 lg:mb-12">
        <div className="flex flex-col w-full max-w-[940px] relative group">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col h-[460px] justify-end">
            <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400] transition-colors duration-300">
              <div className="absolute top-0 flex flex-col w-2/5">
                <img
                  src="/assets/images/service1.svg"
                  className="h-[405px] w-[480px] group-hover:hidden transition-opacity duration-300"
                  alt="e-Commerce Development"
                />
                <img
                  src="/assets/images/servicecol1.png"
                  className="h-[405px] w-[480px] hidden group-hover:block transition-opacity duration-300"
                  alt="e-Commerce Development Hover"
                />
              </div>
              <div className="flex flex-col w-full ml-[380px] bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white rounded-r-2xl justify-center px-6">
                <div className="text-[#FBBC05] font-semibold">Multi-Platform</div>
                <div className="font-normal text-2xl pt-2">
                  e-Commerce Development
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                  Unleash the potential of your online identity with Rotaframe
                  Technology's bespoke web design and development services. Our
                  expert team crafts captivating websites and robust web
                  applications that leave a lasting impression on your visitors.
                  From visually stunning interfaces to seamless user experiences, we
                  tailor every aspect to align with your brand and engage your
                  audience effectively.
                </div>
                <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6 hover:text-[#FBBC05] transition-colors">
                  <div>Read more</div>
                  <img
                    src="/assets/images/arrowup.png"
                    className="h-[14px] w-[14px]"
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col w-full border border-gray-400 rounded-2xl overflow-hidden group-hover:border-[#FFD400] transition-colors duration-300">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img
                src="/assets/images/service1.svg"
                className="w-full h-full object-cover group-hover:hidden transition-opacity duration-300"
                alt="e-Commerce Development"
              />
              <img
                src="/assets/images/servicecol1.png"
                className="w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
                alt="e-Commerce Development Hover"
              />
            </div>
            <div className="flex flex-col bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white p-4 sm:p-6">
              <div className="text-[#FBBC05] font-semibold text-sm sm:text-base">Multi-Platform</div>
              <div className="font-normal text-lg sm:text-xl md:text-2xl pt-2">
                e-Commerce Development
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                Unleash the potential of your online identity with Rotaframe
                Technology's bespoke web design and development services. Our
                expert team crafts captivating websites and robust web
                applications that leave a lasting impression on your visitors.
              </div>
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-4 sm:mt-6 hover:text-[#FBBC05] transition-colors">
                <div>Read more</div>
                <img
                  src="/assets/images/arrowup.png"
                  className="h-[14px] w-[14px]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 - Custom Software Development */}
      <div className="flex flex-row justify-center lg:justify-end mb-8 lg:mb-12">
        <div className="flex flex-col w-full max-w-[940px] relative group">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col h-[460px] justify-end">
            <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400] transition-colors duration-300">
              <div className="absolute top-0 flex flex-col w-2/5">
                <img
                  src="/assets/images/service2.png"
                  className="h-[405px] w-[480px] group-hover:hidden transition-opacity duration-300"
                  alt="Custom Software Development"
                />
                <img
                  src="/assets/images/service2cols.png"
                  className="h-[405px] w-[480px] hidden group-hover:block transition-opacity duration-300"
                  alt="Custom Software Development Hover"
                />
              </div>
              <div className="flex flex-col w-full ml-[380px] bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white rounded-r-2xl justify-center px-6">
                <div className="text-[#FBBC05] font-semibold">Multi-Platform</div>
                <div className="font-normal text-2xl pt-2">
                  Custom Software Development
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                  Unleash the potential of your online identity with Rotaframe
                  Technology's bespoke web design and development services. Our
                  expert team crafts captivating websites and robust web
                  applications that leave a lasting impression on your visitors.
                  From visually stunning interfaces to seamless user experiences,
                  we tailor every aspect to align with your brand and engage your
                  audience effectively.
                </div>
                <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6 hover:text-[#FBBC05] transition-colors">
                  <div>Read more</div>
                  <img
                    src="/assets/images/arrowup.png"
                    className="h-[14px] w-[14px]"
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col w-full border border-gray-400 rounded-2xl overflow-hidden group-hover:border-[#FFD400] transition-colors duration-300">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img
                src="/assets/images/service2.png"
                className="w-full h-full object-cover group-hover:hidden transition-opacity duration-300"
                alt="Custom Software Development"
              />
              <img
                src="/assets/images/service2cols.png"
                className="w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
                alt="Custom Software Development Hover"
              />
            </div>
            <div className="flex flex-col bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white p-4 sm:p-6">
              <div className="text-[#FBBC05] font-semibold text-sm sm:text-base">Multi-Platform</div>
              <div className="font-normal text-lg sm:text-xl md:text-2xl pt-2">
                Custom Software Development
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                Unleash the potential of your online identity with Rotaframe
                Technology's bespoke web design and development services. Our
                expert team crafts captivating websites and robust web
                applications that leave a lasting impression on your visitors.
              </div>
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-4 sm:mt-6 hover:text-[#FBBC05] transition-colors">
                <div>Read more</div>
                <img
                  src="/assets/images/arrowup.png"
                  className="h-[14px] w-[14px]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 - Mobile Application Development */}
      <div className="flex flex-row justify-center lg:justify-start mb-8 lg:mb-12">
        <div className="flex flex-col w-full max-w-[940px] relative group">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col h-[460px] justify-end">
            <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400] transition-colors duration-300">
              <div className="absolute top-0 flex flex-col w-2/5">
                <img
                  src="/assets/images/service3.png"
                  className="h-[405px] w-[480px] group-hover:hidden transition-opacity duration-300"
                  alt="Mobile Application Development"
                />
                <img
                  src="/assets/images/service3cols.png"
                  className="h-[405px] w-[480px] hidden group-hover:block transition-opacity duration-300"
                  alt="Mobile Application Development Hover"
                />
              </div>
              <div className="flex flex-col w-full ml-[380px] bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white rounded-r-2xl justify-center px-6">
                <div className="text-[#FBBC05] font-semibold">Multi-Platform</div>
                <div className="font-normal text-2xl pt-2">
                  Mobile Application Development
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                  Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications. Elevate your user experience, resonate with your audience, and make a lasting impact in the digital realm.
                </div>
                <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6 hover:text-[#FBBC05] transition-colors">
                  <div>Read more</div>
                  <img
                    src="/assets/images/arrowup.png"
                    className="h-[14px] w-[14px]"
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col w-full border border-gray-400 rounded-2xl overflow-hidden group-hover:border-[#FFD400] transition-colors duration-300">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img
                src="/assets/images/service3.png"
                className="w-full h-full object-cover group-hover:hidden transition-opacity duration-300"
                alt="Mobile Application Development"
              />
              <img
                src="/assets/images/service3cols.png"
                className="w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
                alt="Mobile Application Development Hover"
              />
            </div>
            <div className="flex flex-col bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white p-4 sm:p-6">
              <div className="text-[#FBBC05] font-semibold text-sm sm:text-base">Multi-Platform</div>
              <div className="font-normal text-lg sm:text-xl md:text-2xl pt-2">
                Mobile Application Development
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                Stay at the forefront of the mobile-first era with Rotaframe Technology's stellar mobile app development services. Whether it's iOS or Android, our team specializes in creating intuitive and feature-rich applications.
              </div>
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-4 sm:mt-6 hover:text-[#FBBC05] transition-colors">
                <div>Read more</div>
                <img
                  src="/assets/images/arrowup.png"
                  className="h-[14px] w-[14px]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 - UX/UI & Product Development */}
      <div className="flex flex-row justify-center lg:justify-end">
        <div className="flex flex-col w-full max-w-[940px] relative group">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-col h-[460px] justify-end">
            <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400] transition-colors duration-300">
              <div className="absolute top-0 flex flex-col w-2/5">
                <img
                  src="/assets/images/service4.png"
                  className="h-[405px] w-[480px] group-hover:hidden transition-opacity duration-300"
                  alt="UX/UI & Product Development"
                />
                <img
                  src="/assets/images/service4cols.png"
                  className="h-[405px] w-[480px] hidden group-hover:block transition-opacity duration-300"
                  alt="UX/UI & Product Development Hover"
                />
              </div>
              <div className="flex flex-col w-full ml-[380px] bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white rounded-r-2xl justify-center px-6">
                <div className="text-[#FBBC05] font-semibold">Multi-Platform</div>
                <div className="font-normal text-2xl pt-2">
                  UX/UI & Product Development
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                  Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors. From visually stunning interfaces to seamless user experiences, we tailor every aspect to align with your brand and engage your audience effectively.
                </div>
                <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6 hover:text-[#FBBC05] transition-colors">
                  <div>Read more</div>
                  <img
                    src="/assets/images/arrowup.png"
                    className="h-[14px] w-[14px]"
                    alt="Arrow"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex flex-col w-full border border-gray-400 rounded-2xl overflow-hidden group-hover:border-[#FFD400] transition-colors duration-300">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <img
                src="/assets/images/service4.png"
                className="w-full h-full object-cover group-hover:hidden transition-opacity duration-300"
                alt="UX/UI & Product Development"
              />
              <img
                src="/assets/images/service4cols.png"
                className="w-full h-full object-cover hidden group-hover:block transition-opacity duration-300"
                alt="UX/UI & Product Development Hover"
              />
            </div>
            <div className="flex flex-col bg-[#EDEDED] dark:bg-[#171717] text-black dark:text-white p-4 sm:p-6">
              <div className="text-[#FBBC05] font-semibold text-sm sm:text-base">Multi-Platform</div>
              <div className="font-normal text-lg sm:text-xl md:text-2xl pt-2">
                UX/UI & Product Development
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-normal text-sm pt-2">
                Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors.
              </div>
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-4 sm:mt-6 hover:text-[#FBBC05] transition-colors">
                <div>Read more</div>
                <img
                  src="/assets/images/arrowup.png"
                  className="h-[14px] w-[14px]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;