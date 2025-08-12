function OurServices() {
  return (
    <div className="flex flex-col px-20 bg-center bg-cover bg-none dark:bg-[url('/src/assets/images/serviceBg.png')]">
      <div className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
        Our Services
      </div>
      <div className="pt-4 text-base font-normal text-center text-gray-700 dark:text-gray-300">
        Kickstart your next project with templates built by us and our
        community.
      </div>

      <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
        <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
          <div className="absolute top-0 flex flex-col w-2/5">
            <img
              src={"/src/assets/images/service1.svg"}
              className="h-[405px] w-[480px] group-hover:hidden"
              alt="Service 1"
            />
            <img
              src={"/src/assets/images/servicecol1.png"}
              className="h-[405px] w-[480px] hidden group-hover:block"
              alt="Service 1 Hover"
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
            <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6">
              <div>Read more</div>
              <img
                src={"/src/assets/images/arrowup.png"}
                className="h-[14px] w-[14px]"
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
          <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
            <div className="absolute top-0 flex flex-col w-2/5">
              <img
                src={"/src/assets/images/service2.png"}
                className="h-[405px] w-[480px] group-hover:hidden"
                alt="Service 2"
              />
              <img
                src={"/src/assets/images/service2cols.png"}
                className="h-[405px] w-[480px] hidden group-hover:block"
                alt="Service 2 Hover"
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
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6">
                <div>Read more</div>
                <img
                  src={"/src/assets/images/arrowup.png"}
                  className="h-[14px] w-[14px]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start">
        <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
          <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
            <div className="absolute top-0 flex flex-col w-2/5">
              <img
                src={"/src/assets/images/service3.png"}
                className="h-[405px] w-[480px] group-hover:hidden"
                alt="Service 3"
              />
              <img
                src={"/src/assets/images/service3cols.png"}
                className="h-[405px] w-[480px] hidden group-hover:block"
                alt="Service 3 Hover"
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
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6">
                <div>Read more</div>
                <img
                  src={"/src/assets/images/arrowup.png"}
                  className="h-[14px] w-[14px]"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end">
        <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
          <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
            <div className="absolute top-0 flex flex-col w-2/5">
              <img
                src={"/src/assets/images/service4.png"}
                className="h-[405px] w-[480px] group-hover:hidden"
                alt="Service 4"
              />
              <img
                src={"/src/assets/images/service4cols.png"}
                className="h-[405px] w-[480px] hidden group-hover:block"
                alt="Service 4 Hover"
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
              <button className="text-gray-600 dark:text-gray-400 text-start text-sm flex flex-row gap-2 items-center mt-6">
                <div>Read more</div>
                <img
                  src={"/src/assets/images/arrowup.png"}
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
