import { useParams } from "react-router-dom";
import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";
import { CheckCircle } from "lucide-react";

// Project Data
const projectsData = [
  {
    id: "moonbeam-glamour",
    title: "Moonbeam Glamour",
    subtitle: "Cosmetics E-Commerce Platform",
    tagline: "A premium online store built for high performance, visual elegance, and seamless customer experience.",
    industry: "Beauty & Cosmetics",
    duration: "3 Months",
    scope: "UI/UX, Development, Optimization",
    client: "Moonbeam Glamour",
    platform: "",
    heroImage: "/images/moonbeam-glamour-hero.jpg",
    overview: [
      "Moonbeam Glamour partnered with Rotaframe Technology to build a luxury-grade cosmetics eCommerce platform that perfectly blends brand storytelling with cutting-edge performance. The vision was to create a digital experience that reflects elegance, trust, and sophistication while being technically robust and lightning fast.",
      "The platform features intuitive product navigation, engaging visuals, and a smooth checkout experience that encourages users to explore and purchase effortlessly. Every page element was crafted with a focus on speed, stability, and aesthetics—ensuring seamless performance across all devices. Performance optimization was a core part of our process, reducing load times, enhancing mobile usability, and driving measurable business results through better engagement and conversions."
    ],
    solution: "We analysed the requirements and customer flows, then proposed a concise roadmap to prioritize product discovery, reduce checkout steps, and improve perceived speed. Design choices were validated against quick prototypes and user walkthroughs. Implementation focused on three areas of UX clarity, content efficiency (image optimization and selective loading), and reliability (caching and CDN). Each release went through performance testing and iterative refinement until metrics met our targets.",
    performanceMetrics: [
      ["Performance Score", "93%", "Excellent"],
      ["TBT", "0ms", "Zero Blocking"],
      ["Page Size", "954KB", "Lightweight"],
      ["LCP", "1.6s", "Fast"],
      ["CLS", "0", "Perfect Stability"],
      ["Bounce Rate", "35%", "Engagement Boost"],
      ["TTI", "0.76s", "Smooth"],
      ["Fully Loaded Time", "1.7s", "Quick Load"],
      ["Conversion Rate", "25%", "Sales Growth"],
    ],
    businessImpact: "Optimized speed, design, and usability led to increased engagement and sales. The fast and stable experience built user trust and supported measurable business growth.",
    clientFeedback: {
      quote: "Rotaframe transformed our vision into a fast, elegant, and reliable online store. We noticed higher engagement and a clear lift in conversions within weeks.",
      author: "Moonbeam Glamour"
    },
    highlights: [
      "1.7s average load time",
      "Simplified navigation for 300+ products",
      "Optimized SEO for higher visibility",
      "Responsive design matching brand aesthetic",
      "Fast, secure checkout flow"
    ],
    finalDesignText: "The completed website reflects the harmony of design and functionality. Below are visuals of the full landing page along with performance reports demonstrating the site’s exceptional responsiveness and speed consistency across devices.",
    finalImage: "/images/moonbeam-landing.jpg"
  },
  {
    id: "cloothik",
    title: "Cloothik",
    subtitle: "Online Clothing Store Platform",
    tagline: "A modern eCommerce platform built to deliver a stylish, fast, and seamless fashion shopping experience.",
    industry: "Fashion & Apparel",
    duration: "3 Months",
    scope: "UI/UX Design, Development, SEO Optimization",
    client: "Cloothik Store",
    platform: "Web",
    heroImage: "/images/cloothik-hero.jpg",
    overview: [
      "Cloothik partnered with Rotaframe Technology (Pvt) Ltd to develop a visually engaging and high-performing online clothing store designed to represent elegance, trend, and trust.",
      "The platform was conceptualized to reflect the brand’s youthful, fashionable identity through a minimal and responsive interface creating a shopping experience that’s intuitive and conversion-focused.",
      "Our goal was to design and develop a user-friendly website that simplifies the entire online purchase journey from browsing collections to secure checkout while maintaining top-tier performance and scalability."
    ],
    solution: "After gathering the client’s requirements, our team analyzed the target market and user flow to design an optimized structure focusing on product visibility, checkout simplicity, and brand trust. We built the website using a performance-driven approach emphasizing visual storytelling, fast-loading product galleries, and seamless navigation across all devices. Performance and usability testing were carried out throughout development to ensure the website achieved our speed and stability benchmarks. SEO optimization and responsive design further enhanced visibility and accessibility across search engines and mobile devices.",
    performanceMetrics: [
      ["Performance Score", "92%", "Excellent"],
      ["TBT", "0ms", "Zero Blocking"],
      ["CLS", "0", "Perfect Stability"],
      ["Fully Loaded Time", "1.9s", "Quick Load"],
      ["Conversion Rate", "23%", "Consistent Sales Growth"],
      ["LCP", "1.8s", "Fast"],
      ["Bounce Rate", "32%", "Strong Retention"],
    ],
    businessImpact: "Through its optimized design, structure, and responsiveness, Cloothik.com experienced a noticeable improvement in user engagement, session time, and online sales. The mobile-friendly layout and appealing visual presentation helped establish credibility and position the brand strongly in the competitive online fashion market.",
    clientFeedback: {
      quote: "Rotaframe built a stylish and smooth online store that perfectly represents our brand. The performance and design exceeded expectations—customers love how easy it is to shop and check out.",
      author: "Cloothik Store"
    },
    highlights: [
      "1.9s average load time",
      "Simplified navigation for 30+ clothing products",
      "Optimized SEO structure for higher online visibility",
      "Fully responsive design matching brand aesthetics",
      "Fast, secure checkout process with multiple payment options",
      "Integrated dynamic sections for New Arrivals, Best Sellers & Offers",
      "Enhanced user engagement through feedback and wish-list features"
    ],
    finalDesignText: "The final website showcases a balance of modern fashion design and high technical performance. Below are visuals of the homepage and selected key pages, demonstrating the platform’s speed, layout consistency, and visual appeal across desktop and mobile devices.",
    finalImage: "/images/cloothik-landing.jpg"
  },
  {
    id: "cineru",
    title: "CineRu",
    subtitle: "Mobile Subtitle Downloading App",
    tagline: "A minimal, fast, and user-friendly mobile app designed for seamless subtitle search and downloading.",
    industry: "Entertainment / Cinema",
    duration: "Case Study (Concept → Hi-Fi Prototype)",
    scope: "User Research, App UI/UX, Prototyping, Interaction Design",
    client: null,
    platform: "Mobile (iOS / Android focus)",
    heroImage: "/images/cineru-hero.jpg",
    overview: [
      "CineRu is a mobile UI/UX design project that reimagines the subtitle downloading experience for movie lovers. The goal was to create an app that makes it quick and intuitive for users to find accurate subtitles for their favorite movies and series without ads, clutter, or confusion.",
      "The app’s interface was built around clarity, efficiency, and modern aesthetics. Through elegant typography, dark cinematic visuals, and an intuitive search experience, CineRu offers a simple yet engaging platform that prioritizes user satisfaction and usability.",
      "The design process focused on reducing steps to download, improving readability, and introducing a fluid user flow that enhances accessibility across devices."
    ],
    solution: "Our design team conducted research into existing subtitle apps and identified common frustrations such as complicated navigation, intrusive ads, and confusing file management. We then mapped user journeys to create a seamless flow from searching for a title to previewing and downloading subtitles within seconds. Key UX priorities included a unified search and filter system, preview screens with detailed metadata, minimal steps, and lightweight animations. Visual design adopted a dark cinematic theme with contrasting highlights for interactive elements, ensuring a polished, film-inspired experience.",
    performanceMetrics: null,
    businessImpact: "While conceptual, the CineRu prototype demonstrates strong potential for market adoption among entertainment users. The app’s focus on simplicity and performance could significantly improve user retention and engagement in a segment often dominated by ad-heavy or complex alternatives. The design showcases how a refined UX approach can transform a basic tool into an enjoyable, trustworthy platform encouraging users to return frequently.",
    clientFeedback: null,
    highlights: [
      "Average app load time under 2 seconds",
      "Streamlined flow for search → preview → download",
      "Optimized dark UI for cinematic and elegant aesthetics",
      "Clear file organization and progress feedback",
      "Minimal interaction steps and gesture-friendly navigation",
      "Enhanced usability and accessibility across mobile devices"
    ],
    finalDesignText: "The final design presents a smooth and cinematic user journey from searching movie titles to previewing and downloading subtitles. Users can easily search, filter, and preview subtitles with a visually rich yet minimal layout. The download process features clear progress indicators, visual confirmation screens, and micro-interactions that enhance the overall feedback experience.",
    finalImage: null
  },
  {
    id: "jayanath-spices",
    title: "Jayanath Spices",
    subtitle: "Website UI/UX Design",
    tagline: "A refreshed and user-centric design for a premium organic spice exporter, delivering heritage, clarity and global appeal.",
    industry: "Food & Beverage / Organic Spices",
    duration: "1 Month (UI/UX Design & Prototype)",
    scope: "Website UI/UX Design, Responsive Web Interface, Storytelling & Brand Alignment",
    client: "Jayanath Spices (Pvt) Ltd",
    platform: "Web (Desktop & Mobile)",
    heroImage: "/images/jayanath-hero.jpg",
    overview: [
      "Jayanath Spices approached us to elevate their digital presence by redesigning their website to reflect their legacy of over four decades in organic spice farming, and reach new global export markets.",
      "The objective was to craft a website that communicates trust, premium quality, and sustainability while enhancing usability for both international clients and end consumers.",
      "The new design emphasizes immersive visuals of products, clear storytelling of origin and certifications, and a streamlined browsing experience across devices."
    ],
    solution: "We started by reviewing the brand’s heritage, range of certified organic products and global market positioning. Using this, we mapped key user journeys discovering the product range, understanding the brand story, and contacting for export. Key design decisions included a bold hero section, clear product categories and filters, dedicated sections for certifications and sustainability, fully responsive design, and optimized navigation with minimal hierarchy.",
    performanceMetrics: null,
    businessImpact: "By aligning the digital experience with the brand’s premium positioning and global export focus, the redesigned website strengthens Jayanath Spices’ appeal in competitive international markets. Key benefits include improved first impressions, increased confidence for wholesale buyers, and a clearer export-ready image. The simplified user flows reduce friction in inquiry submission and improve engagement metrics.",
    clientFeedback: null,
    highlights: [
      "Fully responsive design tailored for global export and local visitors",
      "Streamlined navigation for 40+ product SKUs with category filtering",
      "Elevated brand storytelling for heritage, certifications & sustainability",
      "Rapid load-time homepage with rich imagery and minimal clutter",
      "Optimised user journey from landing → product exploration → contact form",
      "Visual design aligned with premium organic aesthetic and global markets"
    ],
    finalDesignText: "The final design delivers a refined, story-driven website that blends the rich heritage of Sri Lankan spices with a modern digital experience. Each page was crafted to highlight authenticity, product quality, and the brand’s global export strength. The homepage opens with immersive spice imagery and a clear brand story, while product pages showcase each item with detailed descriptions, certifications, and high-quality visuals.",
    finalImage: null
  }
];

const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) return <div className="text-center py-20">Project not found</div>;

  return (
    <section className="w-full  text-white">
      {/* HERO */}
      <div className="w-full py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="uppercase text-sm tracking-wider text-[#FFD400] font-semibold">
              {project.industry}
            </h2>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-tight text-white">
              {project.title}
            </h1>
            <p className="text-gray-400 text-[17px] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Thumbnail */}
          <div className="relative w-full md:w-1/2 max-w-md aspect-video rounded-lg overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
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

      {/* PROJECT DETAILS */}
      <div className="py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left text-sm">
          <div>
            <h4 className="font-semibold text-gray-400">Industry</h4>
            <p className="text-white mt-1">{project.industry}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-400">Duration</h4>
            <p className="text-white mt-1">{project.duration}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-400">Scope</h4>
            <p className="text-white mt-1">{project.scope}</p>
          </div>
          {project.client && (
            <div>
              <h4 className="font-semibold text-gray-400">Client</h4>
              <p className="text-white mt-1">{project.client}</p>
            </div>
          )}
          {project.platform && (
            <div className="md:col-start-1 md:col-end-5 mt-4">
              <h4 className="font-semibold text-gray-400">Platform</h4>
              <p className="text-white mt-1">{project.platform}</p>
            </div>
          )}
        </div>
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Project Overview</h2>
        {project.overview.map((para, i) => (
          <p key={i} className="text-gray-400 text-[17px] leading-relaxed mt-4">
            {para}
          </p>
        ))}
      </div>

      

      {/* SOLUTION & ANALYSIS */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Solution & Analysis</h2>
        <p className="text-gray-400 text-[17px] leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* PERFORMANCE METRICS (Only for eCommerce) */}
      {project.performanceMetrics && (
        <div className="py-16 bg-gradient-to-b">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">Performance Metrics</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
              {project.performanceMetrics.map(([label, value, sub], i) => (
                <div key={i} className="p-4 bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg">
                  <h4 className="text-[#FFD400] font-semibold text-lg">{label}</h4>
                  <p className="text-3xl font-bold text-white mt-1">{value}</p>
                  <p className="text-sm text-gray-500 mt-1">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BUSINESS IMPACT */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Business Impact</h2>
        <p className="text-gray-400 text-[17px] leading-relaxed">
          {project.businessImpact}
        </p>

        {/* Impact Pills */}
        {project.id === "moonbeam-glamour" && (
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">+25% Conversions</div>
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">+40% Session Duration</div>
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">+50% Mobile Engagement</div>
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">-35% Bounce Rate</div>
          </div>
        )}
      </div>

      {/* FINAL DESIGN & SHOWCASE */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-white">Final Design & Performance Showcase</h2>
        <p className="text-gray-400 text-[17px] leading-relaxed mb-8">
          {project.finalDesignText}
        </p>
        {project.finalImage && (
          <img src={project.finalImage} alt={`${project.title} Landing`} className="w-full rounded-lg shadow-2xl" />
        )}
      </div>

      {/* PROJECT HIGHLIGHTS */}
      <div className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-8 text-white text-center">Project Highlights</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400 text-[17px]">
                <CheckCircle className="text-[#FFD400] w-5 h-5 flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CLIENT FEEDBACK */}
      {project.clientFeedback && (
        <div className="py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">Client Feedback</h2>
            <blockquote className="text-lg italic text-gray-400 max-w-3xl mx-auto">
              “{project.clientFeedback.quote}”
            </blockquote>
            <p className="mt-4 font-semibold text-white">
              — {project.clientFeedback.author} —
            </p>
          </div>
        </div>
      )}

      {/* LOGO SLIDER & CONTACT */}
      <div className="services-container flex flex-col items-center w-full py-14 sm:py-16 ">
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