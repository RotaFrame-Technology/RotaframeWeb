import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";

const ServicesPage = () => {
  const sections = [
    {
      title: "eCommerce Development",
      subtitle: "Empower your brand with seamless online experiences",
      paragraphs: [
        "We craft high performance eCommerce platforms that blend technology and creativity. From product management and secure payments to intelligent analytics, our solutions are designed to scale your business.",
        "Whether you’re launching a startup or upgrading an enterprise store, we help you build a digital shopping experience that customers love and trust.",
      ],
      keyFocus: "Shopify | WooCommerce | Magento | Custom eCommerce Systems",
    },
    {
      title: "Custom Software Development",
      subtitle: "Tailored digital systems that drive efficiency",
      paragraphs: [
        "We build robust, secure, and scalable software solutions customized to your business needs. Our team ensures every line of code adds measurable value—improving operations, automating workflows, and unlocking new opportunities.",
        "From concept to deployment, we deliver software that grows with your business.",
      ],
      keyFocus:
        "Business Applications | ERP Systems | SaaS Solutions | API Integrations",
    },
    {
      title: "Mobile Application Development",
      subtitle: "Innovative apps that connect your business to the world",
      paragraphs: [
        "Deliver world-class mobile experiences with our cross-platform development expertise. We design and develop mobile apps that combine functionality with flawless user experience, helping you engage, retain, and grow your audience across iOS and Android devices.",
      ],
      keyFocus:
        "React Native | Flutter | Native iOS & Android | App Maintenance",
    },
    {
      title: "UI/UX & Product Design",
      subtitle: "Crafting interfaces that inspire and perform",
      paragraphs: [
        "Our design philosophy is simple—create experiences that users remember. We combine research, creativity, and usability to design intuitive and visually stunning digital products.",
        "From wireframes to prototypes, every detail is shaped to ensure your product stands out in the digital landscape.",
      ],
      keyFocus:
        "Wireframing | Prototyping | Product Branding | Interaction Design",
    },
    {
      title: "Digital Marketing",
      subtitle: "Elevate your brand. Expand your reach.",
      paragraphs: [
        "We help brands connect, engage, and convert through data-driven digital marketing strategies. From social media and SEO to performance campaigns and content marketing, our team ensures your message reaches the right audience at the right time, delivering measurable business results.",
      ],
      keyFocus: "Social Media | SEO | Paid Ads | Content Strategy | Analytics",
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[400px] sm:h-[300px] md:h-[300px] lg:h-[300px] bg-cover bg-center relative mt-16">
        <div className="w-full max-w-[1300px] px-4 mx-auto h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10">
          {/* Text */}
          <div className="text-left md:w-1/2">
            <p className="text-[18px] sm:text-[20px] font-bold text-gray-800 dark:text-white ml-1">
              Our Services
            </p>
            <h1 className="mt-2 text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight">
              <span className="text-gray-600 dark:text-gray-400 block">
                Innovating the
              </span>
              <div className="text-gray-800 dark:text-white">Future</div>
            </h1>
          </div>

          {/* Video Thumbnail */}
          <div className="relative w-full md:w-1/2 max-w-md aspect-video bg-black rounded-lg overflow-hidden cursor-pointer">
            <img
              src="/assets/images/video-thumbnail.png"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="none"
                className="w-14 h-14 sm:w-16 sm:h-16"
              >
                <path d="M5.25 5.25v13.5L19.5 12 5.25 5.25z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-12 sm:mt-28 md:mt-28">
        <Banner noMargins={true} />
      </div>

      {/* Services Section */}
      <div className="services-container flex flex-col items-center w-full ">
        {/* Top Divider */}
        <hr className="w-full border-t border-[#2E2E2E] mt-16 sm:mt-28 md:mt-28" />

        {/* Services List */}
        <div className="w-full max-w-[1300px] flex flex-col px-4  mt-14 sm:mt-20 space-y-18 sm:space-y-20">
          {sections.map((section, index) => (
            <div key={index} className="w-full">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold lg:w-1/4 text-left">
                  {section.title}
                </h2>
                <div className="lg:w-3/4 text-left space-y-4">
                  <p className="text-base sm:text-lg font-semibold text-gray-600 dark:text-gray-400">
                    {section.subtitle}
                  </p>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  <p className="pt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <strong>Key focus:</strong> {section.keyFocus}
                  </p>
                </div>
              </div>

              {/* Divider between sections */}
              {index !== sections.length - 1 && (
                <hr className="w-full border-t mt-12 sm:mt-20 border-[#2E2E2E]" />
              )}
            </div>
          ))}
        </div>

        <hr className="w-full border-t  border-[#2E2E2E] mt-16 sm:mt-28 md:mt-28" />
        <div className="w-full px-4">
          <LogoSlider noMargin />
        </div>
        <hr className="w-full border-t border-[#2E2E2E]" />

        {/* Contact Section */}
       <div
          id="contact"
          className="w-full max-w-[1300px]  mt-16 sm:mt-28 md:mt-28"
        >
          <ContactUs noMargin />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
