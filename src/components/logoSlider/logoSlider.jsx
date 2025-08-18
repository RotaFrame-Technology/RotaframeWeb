import Marquee from "react-fast-marquee";

function LogoSlider() {
  const logoData = [
    { src: "/assets/images/logoSlider/Figma.png", alt: "Figma" },
    { src: "/assets/images/logoSlider/Illustrator.png", alt: "Illustrator" },
    { src: "/assets/images/logoSlider/Photoshop.png", alt: "Photoshop" },
    { src: "/assets/images/logoSlider/React.png", alt: "React" },
    { src: "/assets/images/logoSlider/WooCommerce.png", alt: "WooCommerce" },
    { src: "/assets/images/logoSlider/Dotnet.png", alt: "Dotnet" },
    { src: "/assets/images/logoSlider/Wordpress.png", alt: "Wordpress" },
    { src: "/assets/images/logoSlider/Swift.png", alt: "Swift" },
  ];

  const mobileFallbackLogos = [
    { src: "images/asp.png", alt: "ASP.NET" },
    { src: "images/woo.png", alt: "WooCommerce" },
    { src: "images/wordpress.png", alt: "WordPress" },
    { src: "images/Figma.png", alt: "Figma" },
    { src: "images/framer.png", alt: "Framer" },
    { src: "images/Photoshop.png", alt: "Photoshop" },
    { src: "images/Illustrator.png", alt: "Illustrator" },
    { src: "images/React.svg", alt: "React" },
    { src: "images/Next.svg", alt: "Next.js" },
    { src: "images/view.png", alt: "Vue.js" },
    { src: "images/Flutter.png", alt: "Flutter" },
    { src: "images/swift.png", alt: "Swift" },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row w-full justify-center mt-16 sm:mt-20 lg:mt-[100px]">
        {/* Desktop/Tablet Logo Slider */}
        <div className="hidden sm:flex justify-center w-full px-4 lg:px-10">
          <Marquee direction="left" speed={20} className="mb-8">
            {[...Array(3)].map((_, repeatIndex) =>
              logoData.map((logo, index) => (
                <img
                  key={`${repeatIndex}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-4 sm:mx-6 lg:mx-8 object-contain"
                />
              ))
            )}
          </Marquee>
        </div>

        {/* Mobile Logo Slider */}
        <div className="w-full sm:hidden">
          <Marquee
            direction="left"
            speed={20}
            gradient
            gradientColor="transparent"
            className="mb-8"
          >
            {[...Array(3)].map((_, repeatIndex) =>
              mobileFallbackLogos.map((logo, index) => (
                <img
                  key={`mobile-${repeatIndex}-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-12 h-12 mx-4 object-contain"
                />
              ))
            )}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;