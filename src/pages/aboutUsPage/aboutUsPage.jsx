import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import { Link, useNavigate } from "react-router-dom";

const AboutUsPage = () => {
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We embrace new technologies and creative approaches to build future-ready solutions.",
    },
    {
      icon: "🏆",
      title: "Excellence",
      description:
        "We maintain uncompromising quality and deliver results that exceed expectations.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We believe in working closely with our clients — as partners in success.",
    },
    {
      icon: "🔒",
      title: "Integrity",
      description:
        "We act with honesty, transparency, and accountability in every project.",
    },
    {
      icon: "📈",
      title: "Results-Driven",
      description:
        "Every solution we build is designed to generate measurable business impact.",
    },
  ];

  const services = [
    {
      title: "Web Development",
      description:
        "Custom built, responsive websites and web apps that deliver seamless performance.",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Scalable online stores and multi vendor platforms that help brands grow.",
    },
    {
      title: "Mobile Applications",
      description:
        "Intuitive, high performance mobile apps that connect users and businesses.",
    },
    {
      title: "UI/UX Design",
      description:
        "Human centered design that enhances user experience and engagement.",
    },
    {
      title: "Cloud & System Solutions",
      description:
        "Robust, scalable, and secure cloud infrastructure for modern businesses.",
    },
    {
      title: "Quality Assurance & Maintenance",
      description:
        "Continuous testing, support, and optimization to ensure reliability and long term success.",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns that drive visibility, engagement, and growth.",
    },
  ];

  const navigate = useNavigate();

  // Smooth scroll to contact section
  const scrollToContact = () => {
    const isPortfolioSingle =
      location.pathname.startsWith("/portfolio/") &&
      location.pathname !== "/portfolio";

    if (isPortfolioSingle) {
      navigate("/", { state: { scrollTo: "contact" } });
    } else {
      const element = document.getElementById("contact");
      if (element) {
        const headerOffset = 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const approachSteps = [
    {
      number: "1",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and challenges.",
    },
    {
      number: "2",
      title: "Strategy",
      description:
        "We develop a comprehensive plan and technical architecture.",
    },
    {
      number: "3",
      title: "Execution",
      description: "Our team builds your solution using agile methodologies.",
    },
    {
      number: "4",
      title: "Support",
      description: "We provide ongoing maintenance and optimization support.",
    },
  ];

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className="w-full h-full sm:h-full md:h-full lg:h-full bg-cover bg-center relative mt-0 sm:mt-16 md:mt-20">
        <div className="w-full max-w-[1300px] px-4 mx-auto h-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 py-12 md:py-0">
          {/* Text */}
          <div className="text-left md:w-1/2 w-full">
            <p className="text-[18px] sm:text-[20px] font-bold text-gray-800 dark:text-white ml-1 mt-8 md:mt-0">
              About Us
            </p>
            <h1 className="mt-2 text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight">
              <span className="text-gray-600 dark:text-gray-400 block">
                Building Digital
              </span>
              <div className="text-gray-800 dark:text-white">Excellence</div>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              At Rotaframe Technology (Pvt) Ltd, we're passionate about
              transforming ideas into powerful digital experiences. As a Sri
              Lankan based technology company, we specialize in building
              innovative software and design solutions that empower businesses
              and people to thrive in the digital era.
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Our multidisciplinary team of developers, designers, and
              strategists work collaboratively to craft user-focused,
              high-performing digital products that drive measurable results.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="w-full sm:w-auto px-6 py-4 border bg-black text-white text-base sm:text-lg font-semibold rounded-[16px] transition-all duration-200 hover:brightness-95 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  scrollToContact();
                }}
              >
                Get in Touch →
              </button>
              <Link
                className="w-full sm:w-auto px-6 py-4 border dark:border-gray-600 text-white text-base sm:text-lg font-semibold rounded-[16px] transition-all duration-200 hover:brightness-200 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  navigate("/portfolio");
                }}
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 max-w-md aspect-video bg-black rounded-lg overflow-hidden cursor-pointer mt-8 md:mt-0">
            <img
              src="/assets/images/about-us-1.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="w-full max-w-[1300px] bg- px-4 mx-auto mt-8 sm:mt-16 md:mt-20">
        <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold text-center">
          Our Vision & Mission
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center">
          Guiding principles that drive our commitment to innovation, integrity,
          and lasting impact.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
          {/* Vision Card */}
          <div className="bg-black rounded-lg p-6 shadow-md flex flex-col items-center text-center max-w-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-500 text-2xl">👁️</span>
            </div>
            <h3 className="text-xl font-bold">Vision</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              To become a leading IT service provider in Sri Lanka and expand
              our presence internationally. We aim to achieve this by delivering
              development and design solutions that surpass industry standards
              for quality and customer satisfaction.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-black rounded-lg p-6 shadow-md flex flex-col items-center text-center max-w-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-purple-500 text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold">Mission</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              To provide innovative and tailored IT solutions that enable
              businesses to achieve their goals. Committed to upholding the
              highest standards of quality, fostering a culture of continuous
              improvement, and ensuring outstanding customer satisfaction
              through a dedicated team of professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="w-full max-w-[1300px] px-4 mx-auto mt-8 sm:mt-16 md:mt-28 flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-1/2">
          <img
            src="/assets/images/about-us-2.jpg"
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold text-center">
            Our Story
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Founded in 2024, Rotaframe Technology was created with a clear
            purpose to help businesses evolve through digital transformation.
            What began as a small team of passionate innovators has grown into a
            full service IT company delivering exceptional results across
            industries.
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            We've evolved our expertise across web development, mobile
            applications, cloud solutions, and enterprise software. We've had
            the privilege of working with startups, SMEs, and large enterprises
            across various industries.
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            We're more than just a development company we're a team that builds
            lasting relationships and drives growth through technology,
            innovation, creative problem solving and commitment to delivering
            solutions that drive real business value.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="w-full max-w-[1300px] px-4 mx-auto mt-8 sm:mt-16 md:mt-28">
        <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold text-center">
          Our Values
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center">
          These core values define who we are and how we work every day.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-6 shadow-md flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do Section */}
      <div className="w-full max-w-[1300px] px-4 mx-auto mt-8 sm:mt-16 md:mt-28">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold">
              What We Do
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              We provide a complete range of digital services tailored to modern
              business challenges.
            </p>
            <ul className="mt-6 space-y-5">
              {services.map((service, index) => (
                <li key={index} className="flex flex-col">
                  <strong className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </strong>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Image*/}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/about-us-3.jpg"
                alt="Professional team collaborating in a modern office meeting"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="w-full max-w-[1300px] px-4 mx-auto mt-16 sm:mt-28">
        <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold text-center">
          Our Approach
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center">
          We follow a proven methodology that ensures successful project
          delivery every time.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              className="bg-black rounded-lg p-6 flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-[#E6C200] mt-16 sm:mt-28 py-12 text-center">
        <div className="w-full max-w-[1300px] px-4 mx-auto">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[35px] font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-800">
            Let’s discuss how we can help bring your digital vision to life. Our
            team is ready to transform your ideas into reality.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={scrollToContact}
              className="bg-black text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:brightness-90 cursor-pointer"
            >
              Schedule a Consultation
            </button>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 hover:brightness-90 cursor-pointer"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Slider */}
      <hr className="w-full border-t border-[#2E2E2E] mt-16 sm:mt-28 md:mt-28" />
      <div className="w-full px-4">
        <LogoSlider noMargin />
      </div>
      <hr className="w-full border-t border-[#2E2E2E]" />

      {/* Contact Section */}
      <div
        id="contact"
        className="w-full max-w-[1300px] mx-auto mt-16 sm:mt-28 md:mt-28"
      >
        <ContactUs noMargin />
      </div>
    </section>
  );
};

export default AboutUsPage;
