import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";

function LogoSlider({ noMargin = false }) {
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

  const mobileFallbackLogos = [...logoData];

  return (
    <div
      className={`w-full max-w-[1300px] mx-auto overflow-hidden px-2 ${
        noMargin ? "" : "mt-16 sm:mt-20 lg:mt-[100px]"
      }`}
    >
      <div className="flex flex-row w-full justify-center">
        {/* Desktop & Tablet */}
        <div className="hidden sm:flex justify-center w-full">
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

        {/* Mobile */}
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

LogoSlider.propTypes = {
  noMargin: PropTypes.bool,
};

export default LogoSlider;
