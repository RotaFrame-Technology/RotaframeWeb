import React from "react";
import { useParams } from "react-router-dom";
import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";
import portfolioItems from "../../components/portfolio/portfolioItemsData";

const ProjectPage = () => {
  const { projectId } = useParams();

  const project = portfolioItems.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === projectId
  );

  if (!project) return <div>Project not found</div>;

  return (
    <section className="w-full">
      {/* HERO */}
      <div className="w-full  text-white py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="uppercase text-sm tracking-wider text-[#FFD400] font-semibold">
              Beauty & Cosmetics
            </h2>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-tight">
              Moonbeam Glamour
            </h1>
            <p className="text-gray-300 text-[17px] leading-relaxed">
              A premium online store built for high performance, visual elegance,
              and seamless customer experience.
            </p>
          </div>

          {/* Thumbnail or Video */}
          <div className="relative w-full md:w-1/2 max-w-md aspect-video  rounded-lg overflow-hidden">
            <img
              src="/images/moonbeam-glamour-hero.jpg"
              alt="Moonbeam Glamour"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="none"
                className="w-14 h-14 opacity-90"
              >
                <path d="M5.25 5.25v13.5L19.5 12 5.25 5.25z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-[17px] text-[#333] leading-relaxed">
          Moonbeam Glamour partnered with Rotaframe Technology to build a
          luxury-grade cosmetics eCommerce platform that perfectly blends brand
          storytelling with cutting edge performance. The vision was to create a
          digital experience that reflects elegance, trust, and sophistication
          while being technically robust and lightning fast.
        </p>
        <p className="text-[17px] text-[#333] leading-relaxed mt-4">
          The platform features intuitive product navigation, engaging visuals,
          and a smooth checkout experience that encourages users to explore and
          purchase effortlessly. Every page element was crafted with a focus on
          speed, stability, and aesthetics—ensuring seamless performance across
          all devices.
        </p>
      </div>

      {/* PROJECT DETAILS */}
      <div className=" py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="font-semibold text-lg">Industry</h4>
            <p className="text-gray-700 mt-1">Beauty & Cosmetics</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Duration</h4>
            <p className="text-gray-700 mt-1">3 Months</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Scope</h4>
            <p className="text-gray-700 mt-1">UI/UX, Development, Optimization</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Client</h4>
            <p className="text-gray-700 mt-1">Moonbeam Glamour</p>
          </div>
        </div>
      </div>

      {/* SOLUTION & ANALYSIS */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-4">Solution & Analysis</h2>
        <p className="text-[17px] text-[#333] leading-relaxed">
          We analysed the requirements and customer flows, then proposed a
          roadmap to prioritize product discovery, reduce checkout steps, and
          improve perceived speed. Implementation focused on UX clarity, content
          efficiency (image optimization and selective loading), and reliability
          (caching and CDN). Each release underwent performance testing and
          refinement until metrics met our targets.
        </p>
      </div>

      {/* PERFORMANCE METRICS */}
      <div className=" text-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-8">Performance Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
            {[
              ["Performance Score", "93%", "Excellent"],
              ["TBT", "0ms", "Zero Blocking"],
              ["LCP", "1.6s", "Fast"],
              ["CLS", "0", "Perfect Stability"],
              ["Page Size", "954KB", "Lightweight"],
              ["TTI", "0.76s", "Smooth"],
              ["Fully Loaded", "1.7s", "Quick Load"],
              ["Conversion Rate", "25%", "Sales Growth"],
            ].map(([label, value, sub], i) => (
              <div key={i} className="p-4 border border-[#222] rounded-lg">
                <h4 className="text-[#FFD400] font-semibold text-lg">
                  {label}
                </h4>
                <p className="text-3xl font-bold mt-1">{value}</p>
                <p className="text-sm text-gray-400 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUSINESS IMPACT */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-4">Business Impact</h2>
        <p className="text-[17px]  leading-relaxed">
          Optimized speed, design, and usability led to increased engagement and
          sales. The fast and stable experience built user trust and supported
          measurable business growth.
        </p>
      </div>

      {/* CLIENT FEEDBACK */}
      <div className=" py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Client Feedback</h2>
          <blockquote className="text-lg italic text-gray-700 max-w-3xl mx-auto">
            “Rotaframe transformed our vision into a fast, elegant, and reliable
            online store. We noticed higher engagement and a clear lift in
            conversions within weeks.”
          </blockquote>
          <p className="mt-4 font-semibold text-gray-800">
            — Moonbeam Glamour —
          </p>
        </div>
      </div>

      {/* LOGO SLIDER & CONTACT */}
      <div className="services-container flex flex-col items-center w-full py-14 sm:py-16">
        <hr className="w-full border-t border-[#2E2E2E]" />
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20">
          <LogoSlider noMargin />
        </div>
        <hr className="w-full border-t mt-20 border-[#2E2E2E]" />
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16">
          <ContactUs />
        </div>
      </div>

      {/* FOOTER BANNER */}
      <Banner />
    </section>
  );
};

export default ProjectPage;
