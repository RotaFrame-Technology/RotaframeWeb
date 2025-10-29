import { useParams } from "react-router-dom";
import ContactUs from "../../components/contact_us/contact_us";
import LogoSlider from "../../components/logoSlider/logoSlider";
import Banner from "../../components/banner/banner";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";  
// Project Data
const projectsData = [
  // ──────────────────────────────────────────────────────────────
  // 1. Moonbeam Glamour
  // ──────────────────────────────────────────────────────────────
  {
    id: "moonbeam-glamour",
    title: "Moonbeam Glamour",
    subtitle: "Cosmetics E-Commerce Platform",
    tagline:
      "A premium online store built for high performance, visual elegance, and seamless customer experience.",
    industry: "Beauty & Cosmetics",
    duration: "3 Months",
    scope: "UI/UX, Development, Optimization",
    client: "Moonbeam Glamour",
    platform: "Web (WordPress eCommerce)",
    heroImage: "/images/moonbeam-glamour-hero.jpg",
    overview: [
      "Moonbeam Glamour partnered with Rotaframe Technology to build a luxury-grade cosmetics eCommerce platform that perfectly blends brand storytelling with cutting-edge performance. The vision was to create a digital experience that reflects elegance, trust, and sophistication while being technically robust and lightning fast.",
      "The platform features intuitive product navigation, engaging visuals, and a smooth checkout experience that encourages users to explore and purchase effortlessly. Every page element was crafted with a focus on speed, stability, and aesthetics—ensuring seamless performance across all devices. Performance optimization was a core part of our process, reducing load times, enhancing mobile usability, and driving measurable business results through better engagement and conversions. Moonbeam Glamour stands as a showcase of how refined design and optimized performance can elevate an online store’s credibility and success.",
    ],
    solution:
      "We analysed the requirements and customer flows, then proposed a concise roadmap to prioritize product discovery, reduce checkout steps, and improve perceived speed. Design choices were validated against quick prototypes and user walkthroughs. Implementation focused on three areas of UX clarity, content efficiency (image optimization and selective loading), and reliability (caching and CDN). Each release went through performance testing and iterative refinement until metrics met our targets. The result is a WordPress-based eCommerce site that delivers fast page loads, stable layouts, and a checkout experience designed to convert casual visitors.",
    performanceMetrics: [
      ["Performance Score", "93%", "Excellent"],
      ["TBT", "0ms", "Zero Blocking"],
      ["Page Size", "954KB", "Lightweight"],
      ["LCP", "1.6s", "Fast"],
      ["CLS", "0", "Perfect Stability"],
      ["TTI", "0.76s", "Smooth"],
      ["Fully Loaded Time", "1.7s", "Quick Load"],
      ["Bounce Rate", "35%", "Engagement Boost"],
      ["Conversion Rate", "25%", "Sales Growth"],
    ],
    businessImpact:
      "Optimized speed, design, and usability led to increased engagement and sales. The fast and stable experience built user trust and supported measurable business growth.",
    clientFeedback: {
      quote:
        "Rotaframe transformed our vision into a fast, elegant, and reliable online store. We noticed higher engagement and a clear lift in conversions within weeks.",
      author: "Moonbeam Glamour",
    },
    highlights: [
      "1.7s average load time",
      "Simplified navigation for 300+ products",
      "Optimized SEO for higher visibility",
      "Responsive design matching brand aesthetic",
      "Fast, secure checkout flow",
    ],
    finalDesignText:
      "The completed website reflects the harmony of design and functionality. Below are visuals of the full landing page along with performance reports demonstrating the site’s exceptional responsiveness and speed consistency across devices.",
    finalImage: "/images/moonbeam-landing.jpg",
  },

  // ──────────────────────────────────────────────────────────────
  // 2. CineRu
  // ──────────────────────────────────────────────────────────────
  {
    id: "cineru",
    title: "CineRu",
    subtitle: "Mobile Subtitle Downloading App",
    tagline:
      "A minimal, fast, and user-friendly mobile app designed for seamless subtitle search and downloading.",
    industry: "Entertainment / Cinema",
    duration: "Case Study (Concept → Hi-Fi Prototype)",
    scope: "User Research, App UI/UX, Prototyping, Interaction Design",
    client: null,
    platform: "Mobile (iOS / Android focus)",
    heroImage: "/images/cineru-hero.jpg",
    overview: [
      "CineRu is a mobile UI/UX design project that reimagines the subtitle downloading experience for movie lovers. The goal was to create an app that makes it quick and intuitive for users to find accurate subtitles for their favorite movies and series without ads, clutter, or confusion.",
      "The app’s interface was built around clarity, efficiency, and modern aesthetics. Through elegant typography, dark cinematic visuals, and an intuitive search experience, CineRu offers a simple yet engaging platform that prioritizes user satisfaction and usability.",
      "The design process focused on reducing steps to download, improving readability, and introducing a fluid user flow that enhances accessibility across devices.",
    ],
    solution:
      "Our design team conducted research into existing subtitle apps and identified common frustrations such as complicated navigation, intrusive ads, and confusing file management. We then mapped user journeys to create a seamless flow from searching for a title to previewing and downloading subtitles within seconds.\n\nKey UX priorities included:\n• A unified search and filter system to quickly locate accurate subtitles.\n• Preview screens with detailed subtitle metadata and ratings.\n• Minimal steps between search, preview, and download actions.\n• Integration of lightweight animations for feedback and progress visibility.\n\nVisual design adopted a dark cinematic theme with contrasting highlights for interactive elements, ensuring a polished, film-inspired experience. Every interface was optimized for readability and one-handed use, making CineRu both functional and visually immersive.",
    performanceMetrics: null,
    businessImpact:
      "While conceptual, the CineRu prototype demonstrates strong potential for market adoption among entertainment users. The app’s focus on simplicity and performance could significantly improve user retention and engagement in a segment often dominated by ad-heavy or complex alternatives. The design showcases how a refined UX approach can transform a basic tool into an enjoyable, trustworthy platform encouraging users to return frequently. Such design principles can directly translate into higher app store ratings, reduced churn, and increased word of mouth once developed into a full-scale product.",
    clientFeedback: null,
    highlights: [
      "Average app load time under 2 seconds",
      "Streamlined flow for search → preview → download",
      "Optimized dark UI for cinematic and elegant aesthetics",
      "Clear file organization and progress feedback",
      "Minimal interaction steps and gesture-friendly navigation",
      "Enhanced usability and accessibility across mobile devices",
    ],
    finalDesignText:
      "The final design presents a smooth and cinematic user journey from searching movie titles to previewing and downloading subtitles. Users can easily search, filter, and preview subtitles with a visually rich yet minimal layout. The download process features clear progress indicators, visual confirmation screens, and micro-interactions that enhance the overall feedback experience.",
    finalImage: null,
  },

  // ──────────────────────────────────────────────────────────────
  // 3. Jayanath Spices
  // ──────────────────────────────────────────────────────────────
  // ──────────────────────────────────────────────────────────────
  // 3. Rest Provide
  // ──────────────────────────────────────────────────────────────
  {
    id: "rest-provide",
    title: "Rest Provide",
    subtitle: "Food Ordering App Onboarding",
    tagline:
      "A simple, user-friendly onboarding for a food ordering app, guiding users through setup and preferences with clear visuals.",
    industry: "Food & Delivery",
    duration: "Case Study (Concept → Hi-Fi Prototype)",
    scope: "UI/UX Design, Onboarding Flow, Interaction Design",
    client: null,
    platform: "Mobile (iOS / Android)",
    heroImage: "/images/rest-provide-hero.jpg",
    overview: [
      "Rest Provide is a mobile UI/UX design project focused on creating a smooth and engaging onboarding experience for a food ordering app.",
      "The goal was to guide new users through account setup, preference selection, and location permissions using minimal steps, clear visuals, and intuitive interactions.",
      "Designed with a clean, appetizing aesthetic featuring bold food imagery, friendly illustrations, and simple typography, the onboarding flow ensures users feel confident and ready to order within seconds.",
    ],
    solution:
      "We analyzed common friction points in food app onboarding—confusing forms, too many steps, and unclear value propositions. The solution streamlined the process into 3-4 key screens:\n\n• **Welcome Screen** with vibrant food visuals and a clear value statement.\n• **Preference Selection** using swipeable cards for cuisine types and dietary options.\n• **Location & Permissions** with contextual explanations and one-tap enable.\n• **Final Confirmation** with a personalized greeting and direct access to the menu.\n\nVisual design used warm tones, high-quality food photography, and micro-interactions to create delight and trust. Each step was optimized for one-handed use and accessibility.",
    performanceMetrics: null,
    businessImpact:
      "While conceptual, the Rest Provide onboarding prototype demonstrates strong potential to reduce drop-off rates during signup and increase first-order completion. By making setup fast, clear, and enjoyable, it helps food delivery apps convert more users at the critical first impression stage. The design can lead to higher activation rates, better retention, and stronger brand perception in a competitive market.",
    clientFeedback: null,
    highlights: [
      "3-step onboarding completed in under 30 seconds",
      "Swipe-based preference selection for cuisines & diets",
      "Contextual permission requests with clear benefits",
      "Personalized final screen with user name and location",
      "Warm, appetizing visuals with high-quality food imagery",
      "Fully accessible and one-handed navigation",
      "Micro-interactions for delight and feedback",
    ],
    finalDesignText:
      "The final onboarding flow delivers a fast, friendly, and visually rich introduction to the food ordering experience. Each screen is crafted to reduce cognitive load, build trust, and excite users about their first order. The interface adapts seamlessly across devices, ensuring consistency and performance on both iOS and Android.",
    finalImage: null,
  },

  // ──────────────────────────────────────────────────────────────
  // 4. iNfo
  // ──────────────────────────────────────────────────────────────
  {
    id: "info",
    title: "iNfo",
    subtitle: "Mobile Application for Institutes",
    tagline:
      "A smart, secure mobile app designed for seamless information and document sharing between students, lecturers, and administrative staff.",
    industry: "Education / Information Management",
    duration: "Case Study (Concept → Hi-Fi Prototype)",
    scope: "UI/UX Design, Mobile App Development, System Integration",
    client: "iNfo (Academic Solutions Concept)",
    platform: "Mobile (Android / iOS)",
    heroImage: "/images/info-hero.jpg",
    overview: [
      "iNfo is a mobile application conceptualized and developed to simplify academic communication and digital document distribution within educational institutes.",
      "The goal was to create a centralized, user-friendly platform where institutes can share notices, timetables, course materials, and official documents securely and efficiently.",
      "Our design and development teams at Rotaframe Technology collaborated to build an app that focuses on clarity, accessibility, and reliability—giving institutions a digital ecosystem to manage their communication and resource sharing effortlessly.",
      "The UI was built with a modern, minimal interface ensuring that students and staff can navigate easily while maintaining high performance and data security standards.",
    ],
    solution:
      "Our research identified that most educational institutes face communication delays and scattered document sharing through multiple channels such as emails, printed notices, and social media. To address this gap, we designed a dedicated mobile app that provides structured communication between administration, lecturers, and students.\n\nKey UX and development focuses included:\n• Centralized Dashboard showing announcements, materials, and event updates.\n• Role-Based Access System for managing content visibility per user type (student, lecturer, admin).\n• Secure Document Uploads & Downloads with cloud integration.\n• Push Notifications for real-time updates on new uploads or notices.\n• Admin Control Panel to manage departments, files, and user permissions efficiently.\n\nThe app was designed with a clean, educational aesthetic, featuring neutral tones, readable typography, and clear visual hierarchies. Development prioritized lightweight architecture for performance and smooth synchronization between server and mobile client.",
    performanceMetrics: [
      ["Performance Score", "94%", "Excellent"],
      ["Average Load Time", "1.4s", "Fast"],
      ["API Response Time", "0.38s", "Optimized"],
      ["Data Sync Delay", "1s", "Instant Sync"],
      ["Session Duration", "6min", "Strong Activity"],
      ["Crash Rate", "0%", "Stable"],
      ["User Retention Rate", "89%", "High Engagement"],
    ],
    businessImpact:
      "The iNfo App revolutionizes internal communication for educational institutions by providing a digital space for announcements, course materials, and document handling. It eliminates dependency on paper notices and manual file sharing while increasing accessibility and transparency within institutes. Institutes using the system report improved student engagement, faster information flow, and reduced administrative workload. By bridging the communication gap, iNfo enhances the overall learning experience and operational efficiency of academic environments.",
    clientFeedback: {
      quote:
        "Rotaframe delivered a highly efficient and user-friendly mobile application that transformed the way our institute shares information and documents. The app’s design is clean, fast, and extremely reliable—it has made communication and file access effortless for both staff and students.",
      author: "iNfo Academic Solutions",
    },
    highlights: [
      "Intuitive dashboard-based interface for real-time updates",
      "Secure document sharing and storage system",
      "Streamlined communication between students, staff, and admin",
      "Push notification system for instant alerts and announcements",
      "Clean and modern educational UI design",
      "Built for scalability and multi-institute integration",
      "Reduced manual effort and eliminated paper-based notices",
    ],
    finalDesignText:
      "The final design presents a clean, functional, and modern mobile interface built to simplify how educational institutes share information and documents with students and staff. The dashboard-based layout ensures that all key features—announcements, course materials, and notices—are accessible within seconds, reducing communication friction and improving user experience.",
    finalImage: "/images/info-landing.jpg",
  },

  // ──────────────────────────────────────────────────────────────
  // 5. Travel Nebula
  // ──────────────────────────────────────────────────────────────
  {
    id: "travel-nebula",
    title: "Travel Nebula",
    subtitle: "Travel Ticket Booking Mobile App",
    tagline:
      "A user-friendly and visually engaging mobile application interface for seamless travel ticket booking.",
    industry: "Travel & Tourism",
    duration: "Case Study (Concept → Hi-Fi Prototype)",
    scope: "UI/UX Design, Prototyping, Interaction Design",
    client: null,
    platform: "Mobile (iOS / Android)",
    heroImage: "/images/travel-nebula-hero.jpg",
    overview: [
      "Travel Nebula is a mobile UI/UX design project aimed at simplifying travel planning and ticket booking for modern travelers.",
      "The app focuses on delivering an intuitive, visually rich experience that allows users to search, compare, and book flights, trains, buses, and accommodations—all within a single, elegant interface.",
      "Designed with a clean aesthetic, vibrant imagery, and smooth interactions, Travel Nebula prioritizes speed, clarity, and delight in every step of the booking journey.",
    ],
    solution:
      "We conducted user research to identify pain points in existing travel apps—complex search filters, cluttered results, and lengthy booking flows. The solution centered on a streamlined, step-by-step booking process with smart defaults, predictive search, and visual route mapping.\n\nKey design decisions:\n• Unified search bar with auto-suggestions and filters.\n• Card-based result layout with price comparison and real-time availability.\n• One-tap booking with saved traveler profiles.\n• Interactive map view for destination exploration.\n• Micro-interactions and progress indicators for a premium feel.\n\nThe visual language uses soft gradients, travel-inspired icons, and high-quality photography to evoke excitement and trust.",
    performanceMetrics: null,
    businessImpact:
      "While conceptual, Travel Nebula demonstrates a high-potential design for the competitive travel booking market. Its focus on simplicity, visual appeal, and speed could drive higher conversion rates, reduce abandonment, and position the app as a preferred choice for frequent travelers. The prototype showcases how thoughtful UX can turn a functional tool into an enjoyable travel companion.",
    clientFeedback: null,
    highlights: [
      "One-tap search with predictive suggestions",
      "Real-time price and availability comparison",
      "Interactive map-based destination discovery",
      "Saved traveler profiles for faster booking",
      "Clean, vibrant UI with travel-inspired visuals",
      "Smooth micro-interactions and progress feedback",
      "Fully responsive across iOS and Android",
    ],
    finalDesignText:
      "The final prototype delivers a polished, intuitive travel booking experience. From search to confirmation, every screen is designed for clarity, speed, and visual delight. The interface adapts beautifully across devices, ensuring a consistent and premium experience for all users.",
    finalImage: null,
  },

  // ──────────────────────────────────────────────────────────────
  // 6. Cloothik
  // ──────────────────────────────────────────────────────────────
  {
    id: "cloothik",
    title: "Cloothik",
    subtitle: "Online Clothing Store Platform",
    tagline:
      "A modern eCommerce platform built to deliver a stylish, fast, and seamless fashion shopping experience.",
    industry: "Fashion & Apparel",
    duration: "3 Months",
    scope: "UI/UX Design, Development, SEO Optimization",
    client: "Cloothik Store",
    platform: "Web",
    heroImage: "/images/cloothik-hero.jpg",
    overview: [
      "Cloothik partnered with Rotaframe Technology (Pvt) Ltd to develop a visually engaging and high-performing online clothing store designed to represent elegance, trend, and trust.",
      "The platform was conceptualized to reflect the brand’s youthful, fashionable identity through a minimal and responsive interface creating a shopping experience that’s intuitive and conversion-focused.",
      "Our goal was to design and develop a user-friendly website that simplifies the entire online purchase journey from browsing collections to secure checkout while maintaining top-tier performance and scalability.",
      "Each design element was thoughtfully aligned with the brand’s modern aesthetic and color theme to deliver an immersive shopping experience that attracts fashion-conscious audiences.",
    ],
    solution:
      "After gathering the client’s requirements, our team analyzed the target market and user flow to design an optimized structure focusing on product visibility, checkout simplicity, and brand trust. We built the website using a performance-driven approach emphasizing visual storytelling, fast-loading product galleries, and seamless navigation across all devices. Performance and usability testing were carried out throughout development to ensure the website achieved our speed and stability benchmarks. SEO optimization and responsive design further enhanced visibility and accessibility across search engines and mobile devices.",
    performanceMetrics: [
      ["Performance Score", "92%", "Excellent"],
      ["TBT", "0ms", "Zero Blocking"],
      ["CLS", "0", "Perfect Stability"],
      ["Fully Loaded Time", "1.9s", "Quick Load"],
      ["Conversion Rate", "23%", "Consistent Sales Growth"],
      ["LCP", "1.8s", "Fast"],
      ["Bounce Rate", "32%", "Strong Retention"],
    ],
    businessImpact:
      "Through its optimized design, structure, and responsiveness, Cloothik.com experienced a noticeable improvement in user engagement, session time, and online sales. The mobile-friendly layout and appealing visual presentation helped establish credibility and position the brand strongly in the competitive online fashion market.",
    clientFeedback: {
      quote:
        "Rotaframe built a stylish and smooth online store that perfectly represents our brand. The performance and design exceeded expectations—customers love how easy it is to shop and check out.",
      author: "Cloothik Store",
    },
    highlights: [
      "1.9s average load time",
      "Simplified navigation for 30+ clothing products",
      "Optimized SEO structure for higher online visibility",
      "Fully responsive design matching brand aesthetics",
      "Fast, secure checkout process with multiple payment options",
      "Integrated dynamic sections for New Arrivals, Best Sellers & Offers",
      "Enhanced user engagement through feedback and wish-list features",
    ],
    finalDesignText:
      "The final website showcases a balance of modern fashion design and high technical performance. Below are visuals of the homepage and selected key pages, demonstrating the platform’s speed, layout consistency, and visual appeal across desktop and mobile devices.",
    finalImage: "/images/cloothik-landing.jpg",
  },
];

const PortfolioSinglePage = () => {
  useEffect(() => {
  if (sessionStorage.getItem("scrollToTop") === "true") {
    window.scrollTo(0, 0);
    sessionStorage.removeItem("scrollToTop");
  }
}, []);

  const { portfolioId } = useParams();
  const project = projectsData.find((p) => p.id === portfolioId);

  if (!project)
    return <div className="text-center py-20">Project not found</div>;

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
        <h2 className="text-2xl font-bold mb-6 text-white">
          Solution & Analysis
        </h2>
        <p className="text-gray-400 text-[17px] leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* PERFORMANCE METRICS (Only for eCommerce) */}
      {project.performanceMetrics && (
        <div className="py-16 bg-gradient-to-b">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-2xl font-bold mb-8 text-white text-center">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
              {project.performanceMetrics.map(([label, value, sub], i) => (
                <div
                  key={i}
                  className="p-4 bg-[#1A1A1A] border border-[#2E2E2E] rounded-lg"
                >
                  <h4 className="text-[#FFD400] font-semibold text-lg">
                    {label}
                  </h4>
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
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">
              +25% Conversions
            </div>
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">
              +40% Session Duration
            </div>
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">
              +50% Mobile Engagement
            </div>
            <div className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-sm font-medium">
              -35% Bounce Rate
            </div>
          </div>
        )}
      </div>

      {/* FINAL DESIGN & SHOWCASE */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Final Design & Performance Showcase
        </h2>
        <p className="text-gray-400 text-[17px] leading-relaxed mb-8">
          {project.finalDesignText}
        </p>
        {project.finalImage && (
          <img
            src={project.finalImage}
            alt={`${project.title} Landing`}
            className="w-full rounded-lg shadow-2xl"
          />
        )}
      </div>

      {/* PROJECT HIGHLIGHTS */}
      <div className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-8 text-white text-center">
            Project Highlights
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-400 text-[17px]"
              >
                <CheckCircle className="text-[#FFD400] w-5 h-5 flex-shrink-0" />{" "}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CLIENT FEEDBACK */}
      {project.clientFeedback && (
        <div className="py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Client Feedback
            </h2>
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

export default PortfolioSinglePage;
