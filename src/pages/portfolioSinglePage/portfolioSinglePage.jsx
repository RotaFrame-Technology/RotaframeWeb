import { useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const projectsData = [
  // ──────────────────────────────────────────────────────────────
  // 1. Moonbeam Glamour
  // ──────────────────────────────────────────────────────────────
  {
    id: "moonbeam-glamour",
    title: "Moonbeam Glamour",
    icon: "/assets/images/portfolioicon.png",
    subtitle: "Cosmetics E-Commerce Platform",
    tagline:
      "A premium online store built for high performance, visual elegance, and seamless customer experience.",
    industry: "Beauty & Cosmetics",
    scope: "UI/UX, Development, Optimization",
    duration: "3 Months",
    client: "Moonbeam Glamour",
    heroImage: "/assets/images/moonbeam-glamour-hero.png",
    overview: [
      "Moonbeam Glamour partnered with Rotaframe Technology to build a luxury-grade cosmetics eCommerce platform that perfectly blends brand storytelling with cutting-edge performance. The vision was to create a digital experience that reflects elegance, trust, and sophistication while being technically robust and lightning fast. The website was designed to embody the brand’s premium identity through a clean, modern interface that resonates with its target audience—beauty enthusiasts seeking quality and style.",
      "The platform features intuitive product navigation, engaging visuals, and a smooth checkout experience that encourages users to explore and purchase effortlessly. Every page element was crafted with a focus on speed, stability, and aesthetics ensuring seamless performance across all devices. Performance optimization was a core part of our process, reducing load times, enhancing mobile usability, and driving measurable business results through better engagement and conversions. Moonbeam Glamour stands as a showcase of how refined design and optimized performance can elevate an online store’s credibility and success.",
    ],
    solution: [
      "We analysed the requirements and customer flows, then proposed a concise roadmap prioritize product discovery, reduce checkout steps, and improve perceived speed. Design choices were validated against quick prototypes and user walkthroughs.",
      "Implementation focused on three areas of UX clarity, content efficiency (image optimization and selective loading), and reliability (caching and CDN). Each release went through performance testing and iterative refinement until metrics met our targets.",
      "The result is a WordPress-based eCommerce site that delivers fast page loads, stable layouts, and a checkout experience designed to convert casual visitors.",
    ],
    performanceMetrics: [
      ["Performance Score", "93%", "Excellent"],
      ["TBT", "0ms", "Zero Blocking"],
      ["Page Size", "954KB", "Lightweight"],
      ["LCP", "1.6s", "Fast"],
      ["CLS", "0", "Perfect Stability"],
      ["TTI", "0.76s", "Smooth"],
      ["Fully Loaded Time", "1.7s", "Quick Load"],
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
    finalImage: "/assets/images/moonbeam-glamour-final.png",
  },

  // ──────────────────────────────────────────────────────────────
  // 2. CineRu
  // ──────────────────────────────────────────────────────────────
  {
    id: "cineru",
    title: "CineRu",
    subtitle: "Mobile Subtitle Downloading App",
    icon: "/assets/images/portfoliomobileicon.png",
    tagline:
      "A minimal, fast, and user-friendly mobile app designed for seamless subtitle search and downloading.",
    industry: "Entertainment / Cinema",
    scope: "User Research, App UI/UX, Prototyping, Interaction Design",
    platform: "Mobile (iOS / Android focus)",
    duration: "Case Study (Concept → Hi-Fi Prototype)",
    heroImage: "/assets/images/moonbeam-glamour-hero.png",
    overview: [
      "CineRu is a mobile UI/UX design project that reimagines the subtitle downloading experience for movie lovers. The goal was to create an app that makes it quick and intuitive for users to find accurate subtitles for their favorite movies and series without ads, clutter, or confusion.",
      "The app’s interface was built around clarity, efficiency, and modern aesthetics. Through elegant typography, dark cinematic visuals, and an intuitive search experience, CineRu offers a simple yet engaging platform that prioritizes user satisfaction and usability.",
      "The design process focused on reducing steps to download, improving readability, and introducing a fluid user flow that enhances accessibility across devices.",
    ],
    solution: [
      "Our design team conducted research into existing subtitle apps and identified common frustrations such as complicated navigation, intrusive ads, and confusing file management. We then mapped user journeys to create a seamless flow from searching for a title to previewing and downloading subtitles within seconds.",
      {
        type: "list",
        items: [
          "A unified search and filter system to quickly locate accurate subtitles.",
          "Preview screens with detailed subtitle metadata and ratings.",
          "Minimal steps between search, preview, and download actions.",
          "Integration of lightweight animations for feedback and progress visibility.",
        ],
      },
      "Visual design adopted a dark cinematic theme with contrasting highlights for interactive elements, ensuring a polished, film-inspired experience. Every interface was optimized for readability and one-handed use, making CineRu both functional and visually immersive.",
    ],
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
    finalDesignText: [
      "The final design presents a smooth and cinematic user journey from searching movie titles to previewing and downloading subtitles. The app interface highlights clarity, accessibility, and consistency throughout every interaction.",
      " Users can easily search, filter, and preview subtitles with a visually rich yet minimal layout. The download process features clear progress indicators, visual confirmation screens, and micro-interactions that enhance the overall feedback experience. ",
      " Every screen was optimized for fast performance, dark theme readability, and touch-friendly controls, ensuring that CineRu feels both elegant and effortless to use across mobile devices.",
    ],
    finalImage: "/assets/images/moonbeam-glamour-final.png",
  },

  // ──────────────────────────────────────────────────────────────
  // 3. Rest Provider
  // ──────────────────────────────────────────────────────────────
  {
    id: "rest-provider",
    title: "Rest Provider",
    subtitle: "Online Food Ordering Platform",
    icon: "/assets/images/portfoliomobileicon.png",
    tagline:
      "A fast, user-friendly food ordering application designed and developed to connect customers with nearby restaurants, ensuring a smooth browsing, ordering, and delivery experience.",
    industry: "Food & Beverage / On-Demand Delivery",
    scope:
      "UI/UX Design, Mobile App Development, API Integration, Real Time Tracking",
    platform: "Mobile (Android / iOS)",
    heroImage: "/assets/images/rest-provider-hero.png",
    overview: [
      "Rest Provider is a fully developed online food ordering platform that enables users to discover restaurants, browse menus, place orders, and track deliveries in real time.",
      "The project aimed to create a high-performance mobile application with an engaging interface and reliable backend infrastructure to deliver a smooth, end-to-end experience.",
      "The Rotaframe team handled both UI/UX design and mobile app development, ensuring the platform achieved visual excellence and technical stability. From restaurant listings to secure payments, every feature was optimized for ease of use, speed, and customer satisfaction.",
    ],
    solution: [
      "To build a food ordering experience that stands out in a competitive market, our team conducted in-depth research into user behaviors and key frustrations such as slow load times, complicated checkouts, and poor restaurant discovery. Our solution combined strong visual identity with robust functionality to create a digital platform that feels both simple and intelligent.",
      {
        type: "list",
        items: [
          "Interactive Home Screen – Featuring curated restaurants and trending dishes.",
          "Advanced Search & Filters – Allowing users to browse by cuisine, distance, or ratings.",
          "Smooth Ordering Flow – Cart management, order customization, and instant checkout.",
          "Real-Time Order Tracking – Live updates from preparation to delivery.",
          "Restaurant Dashboard – Enabling vendors to manage menus, orders, and deliveries.",
          "Secure Payment Gateway – Supporting multiple payment methods with transaction safety.",
        ],
      },
      "The result is a complete digital ecosystem for users, restaurants, and delivery services—fast, secure, and scalable for future growth.",
    ],
    performanceMetrics: [
      ["Performance Score", "95%", "Excellent"],
      ["Average Load Time", "1.3s", "Fast"],
      ["API Response Time", "0.41s", "Optimized"],
      ["Restaurant Sync Delay", "<1s", "Instant Update"],
      ["Average Order Completion Time", "2.5min", "Smooth Flow"],
      ["Crash Rate", "0%", "Stable"],
      ["User Retention Rate", "88%", "High Engagement"],
    ],
    businessImpact:
      "The Rest Provider platform transformed the client’s business from manual order handling to a fully digital, automated system. The app helped improve customer satisfaction, reduce order errors, and increase restaurant efficiency. Early deployments showed a 40% improvement in order handling speed and a significant rise in repeat customers. With its scalable architecture, Rest Provider is ready to integrate with third-party delivery APIs and expand into new regional markets.",
    clientFeedback: {
      quote:
        "Rotaframe built a complete food ordering solution that perfectly blends design and performance. The app feels modern, loads fast, and works flawlessly—it has simplified our entire restaurant operation and given customers a better way to order.",
      author: "Rest Provider Team",
    },
    highlights: [
      "Average load time – 1.3 seconds",
      "Fast and secure ordering and payment process",
      "Real-time tracking with instant restaurant updates",
      "Responsive design for mobile-first experience",
      "Optimized backend for high performance and zero crashes",
      "Smooth and intuitive UI enhancing customer engagement",
    ],
    finalDesignText:
      "The final design showcases a vibrant and intuitive mobile experience that captures the essence of food discovery and quick service. The home interface highlights top restaurants and offers dynamic visuals of dishes, while the ordering and tracking screens maintain clarity and precision.",
    finalImage: "/assets/images/rest-provider-final.png",
  },

  // ──────────────────────────────────────────────────────────────
  // 4. iNfo
  // ──────────────────────────────────────────────────────────────
  {
    id: "info",
    title: "iNfo",
    subtitle: "Mobile Application for Institutes",
    icon: "/assets/images/portfoliomobileicon.png",
    tagline:
      "A smart, secure mobile app designed for seamless information and document sharing between students, lecturers, and administrative staff.",
    industry: "Education / Information Management",
    scope: "UI/UX Design, Mobile App Development, System Integration",
    platform: "Mobile (Android / iOS)",
    client: "iNfo (Academic Solutions Concept)",
    heroImage: "/assets/images/moonbeam-glamour-hero.png",
    overview: [
      "iNfo is a mobile application conceptualized and developed to simplify academic communication and digital document distribution within educational institutes.",
      "The goal was to create a centralized, user-friendly platform where institutes can share notices, timetables, course materials, and official documents securely and efficiently.",
      "Our design and development teams at Rotaframe Technology collaborated to build an app that focuses on clarity, accessibility, and reliability—giving institutions a digital ecosystem to manage their communication and resource sharing effortlessly.",
      "The UI was built with a modern, minimal interface ensuring that students and staff can navigate easily while maintaining high performance and data security standards.",
    ],
    solution: [
      "Our research identified that most educational institutes face communication delays and scattered document sharing through multiple channels such as emails, printed notices, and social media. To address this gap, we designed a dedicated mobile app that provides structured communication between administration, lecturers, and students.",
      {
        type: "list",
        items: [
          "Centralized Dashboard showing announcements, materials, and event updates.",
          "Role-Based Access System for managing content visibility per user type (student, lecturer, admin).",
          "Secure Document Uploads & Downloads with cloud integration.",
          "Push Notifications for real-time updates on new uploads or notices.",
          "Admin Control Panel to manage departments, files, and user permissions efficiently.",
        ],
      },
      "The app was designed with a clean, educational aesthetic, featuring neutral tones, readable typography, and clear visual hierarchies. Development prioritized lightweight architecture for performance and smooth synchronization between server and mobile client.",
    ],
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
    finalImage: "/assets/images/moonbeam-glamour-final.png",
  },

  // ──────────────────────────────────────────────────────────────
  // 5. Travel Nebula
  // ──────────────────────────────────────────────────────────────
  {
    id: "travel-nebula",
    title: "Travel Nebula",
    subtitle: "Travel Booking Mobile Application",
    icon: "/assets/images/portfoliomobileicon.png",
    tagline:
      "A modern, user-centric mobile app built to simplify trip planning, bookings, and travel discovery with an intuitive and visually engaging experience.",
    industry: "Travel & Hospitality",
    scope: "UI/UX Design, Mobile App Development, Booking Flow Optimization",
    platform: "Mobile (Android / iOS)",
    heroImage: "/assets/images/travel-nebula-hero.png",
    overview: [
      "This Travel Booking Mobile App was developed to offer users a seamless experience for discovering destinations, comparing travel options (flights, hotels, tours), and completing bookings all from one mobile interface.",
      "The goal was to reduce booking complexity, highlight rich visuals of travel experiences, and ensure high performance across mobile devices.",
    ],
    solution: [
      "Following user research into common travel app pain points (complex booking flows, slow load times, lack of intuitive discovery), the team mapped key user journeys—search → compare → book → confirm.",
      "The design features a clean, image-led UI showcasing destinations, interactive filters for travel options, one-tap booking flows, and real-time confirmation screens. Performance was optimized through streamlined navigation, light image assets, and efficient backend integration. The app was developed with responsiveness and ease of use in mind, targeting both first-time travelers and experienced users.",
    ],
    performanceMetrics: [
      ["Performance Score", "95%", "Excellent"],
      ["Average Load Time", "1.2s", "Fast"],
      ["API Response Time", "0.42s", "Optimized"],
      ["Booking Completion Rate", "87%", "Strong Conversion"],
      ["Session Duration", "8min", "Active Usage"],
      ["Crash Rate", "0%", "Stable"],
      ["User Retention Rate", "91%", "High Engagement"],
    ],
    businessImpact:
      "By delivering a streamlined, visually compelling booking experience, the app sets a strong foundation to reduce abandonment during booking, increase user trust, and improve engagement. The design strengthens the brand’s position as a modern travel platform and supports future scalability into global markets, additional travel categories (tours, experiences), and partner integrations.",
    clientFeedback: {
      quote:
        "Rotaframe designed a beautiful and lightning-fast travel app that feels effortless to use. The attention to detail in both design and performance truly stands out—everything from searching to booking works flawlessly and delivers an enjoyable experience for our users.",
      author: "Travel Nebula Project Team",
    },
    highlights: [
      "Dynamic search & filter system for travel options",
      "One-tap booking flow with simplified checkout",
      "Rich visual storytelling of destinations and travel experiences",
      "Optimized performance for mobile with fast load times",
      "Responsive UI for Android & iOS with consistent visual identity",
      "Scalable architecture for future expansion and feature growth",
    ],
    finalDesignText:
      "The final product features a clean, immersive interface that guides users through destination exploration, booking, and itinerary management in just a few taps. High-quality visuals, smooth transitions, and gesture-based navigation create a delightful travel planning experience.",
    finalImage: "/assets/images/travel-nebula-final.png",
  },

  // ──────────────────────────────────────────────────────────────
  // 6. Cloothik
  // ──────────────────────────────────────────────────────────────
  {
    id: "cloothik",
    title: "Cloothik",
    subtitle: "Online Clothing Store Platform",
    icon: "/assets/images/portfolioicon.png",
    tagline:
      "A modern eCommerce platform built to deliver a stylish, fast, and seamless fashion shopping experience.",
    industry: "Fashion & Apparel",
    scope: "UI/UX Design, Development, SEO Optimization",
    duration: "3 Months",
    client: "Cloothik Store",
    platform: "Web",
    heroImage: "/assets/images/cloothik-hero.png",
    overview: [
      "Cloothik partnered with Rotaframe Technology (Pvt) Ltd to develop a visually engaging and high-performing online clothing store designed to represent elegance, trend, and trust.",
      "The platform was conceptualized to reflect the brand’s youthful, fashionable identity through a minimal and responsive interface creating a shopping experience that’s intuitive and conversion-focused.",
      "Our goal was to design and develop a user-friendly website that simplifies the entire online purchase journey from browsing collections to secure checkout while maintaining top-tier performance and scalability.",
      "Each design element was thoughtfully aligned with the brand’s modern aesthetic and color theme to deliver an immersive shopping experience that attracts fashion-conscious audiences.",
    ],
    solution: [
      "After gathering the client’s requirements, our team analyzed the target market and user flow to design an optimized structure focusing on product visibility, checkout simplicity, and brand trust.",
      "We built the website using a performance-driven approach emphasizing visual storytelling, fast-loading product galleries, and seamless navigation across all devices.",
      "Performance and usability testing were carried out throughout development to ensure the website achieved our speed and stability benchmarks. SEO optimization and responsive design further enhanced visibility and accessibility across search engines and mobile devices.",
    ],
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
    finalImage: "/assets/images/cloothik-final.png",
  },
  // ──────────────────────────────────────────────────────────────
  // 7. Jayanath Spices
  // ──────────────────────────────────────────────────────────────
  {
    id: "jayanath-spices",
    title: "Jayanath Spices",
    subtitle: "Premium Organic Spice Exporter Website",
    icon: "/assets/images/portfolioicon.png",
    tagline:
      "A refreshed and user-centric design for a premium organic spice exporter, delivering heritage, clarity and global appeal.",
    industry: "Food & Beverage / Organic Spices",
    scope:
      "Website UI/UX Design, Responsive Web Interface, Storytelling & Brand Alignment",
    duration: "1 Month (UI/UX Design & Prototype)",
    client: "Jayanath Spices (Pvt) Ltd",
    platform: "Web (Desktop & Mobile)",
    heroImage: "/assets/images/jayanath-spices-hero.png",
    overview: [
      "Jayanath Spices approached us to elevate their digital presence by redesigning their website to reflect their legacy of over four decades in organic spice farming, and reach new global export markets.",
      "The objective was to craft a website that communicates trust, premium quality, and sustainability while enhancing usability for both international clients and end consumers.",
      "The new design emphasizes immersive visuals of products, clear storytelling of origin and certifications, and a streamlined browsing experience across devices.",
    ],
    solution: [
      "We started by reviewing the brand’s heritage, range of certified organic products and global market positioning. Using this, we mapped key user journeys discovering the product range, understanding the brand story, and contacting for export.",
      {
        type: "list",
        items: [
          "A bold hero section showing premium spice photography and authentic heritage context.",
          "Clear product categories and filters to facilitate quick browsing of dozens of spice types.",
          "Dedicated sections for certifications, sustainability practices and global export capabilities to build trust.",
          "Fully responsive design ensuring performance, readability and conversion on mobile, tablet and desktop.",
          "Optimised navigation with minimal levels of hierarchy so international buyers can access key info in 2-3 clicks.",
        ],
      },
    ],
    performanceMetrics: [
      ["Performance Score", "96%", "Excellent"],
      ["Fully Loaded Time", "1.4s", "Lightning Fast"],
      ["LCP", "1.2s", "Fast First Paint"],
      ["CLS", "0.02", "Near Perfect"],
      ["TTI", "0.9s", "Instant Interaction"],
      ["SEO Visibility", "High", "Optimized"],
      ["Mobile Usability", "100%", "Flawless"],
    ],
    businessImpact:
      "By aligning the digital experience with the brand’s premium positioning and global export focus, the redesigned website strengthens Jayanath Spices’ appeal in competitive international markets. Key benefits include improved first impressions, increased confidence for wholesale buyers, and a clearer export-ready image. The simplified user flows reduce friction in inquiry submission and improve engagement metrics. Through efficient design and storytelling, the site now supports positioning as a sustainability-driven leader in Sri Lankan organic spices.",
    clientFeedback: {
      quote:
        "Rotaframe delivered a beautiful, fast, and authentic digital experience that truly reflects our heritage and global ambitions. The website has become a powerful tool for connecting with international buyers.",
      author: "Jayanath Spices (Pvt) Ltd",
    },
    highlights: [
      "Fully responsive design tailored for global export and local visitors",
      "Streamlined navigation for 40+ product SKUs with category filtering",
      "Elevated brand storytelling for heritage, certifications & sustainability",
      "Rapid load-time homepage with rich imagery and minimal clutter",
      "Optimised user journey from landing → product exploration → contact form",
      "Visual design aligned with premium organic aesthetic and global markets",
    ],
    finalDesignText: [
      "The final design delivers a refined, story-driven website that blends the rich heritage of Sri Lankan spices with a modern digital experience. Each page was crafted to highlight authenticity, product quality, and the brand’s global export strength.",
      "The homepage opens with immersive spice imagery and a clear brand story, while product pages showcase each item with detailed descriptions, certifications, and high-quality visuals. A responsive grid layout ensures smooth navigation and consistent design across devices.",
      "The site’s performance was optimized for fast load times and SEO visibility, ensuring an excellent user experience for both international buyers and local customers. The design achieves a balance of beauty, performance, and trust, effectively positioning Jayanath Spices as a premium exporter in the global organic market.",
    ],
    finalImage: "/assets/images/jayanath-spices-final.png",
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
    <section className="w-full text-white dark:text-white">
      {/* HERO */}
      <div className="w-full py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-stretch gap-10">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-4 flex flex-col">
            <h2 className="uppercase text-sm tracking-wider font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-300">
              <img
                src={project.icon}
                alt={project.industry}
                className="w-5 h-5 object-contain invert dark:invert-0"
              />
              {project.industry}
            </h2>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-tight text-gray-800 dark:text-white">
              {project.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed">
              {project.tagline}
            </p>

            {/* Project Details */}
            <div className="py-6 flex flex-wrap gap-6 text-left text-sm">
              {project.industry && (
                <div className="flex-1 min-w-[150px]">
                  <h4 className="font-semibold text-gray-400 dark:text-gray-400">
                    Industry
                  </h4>
                  <p className="text-gray-800 dark:text-white mt-1">
                    {project.industry}
                  </p>
                </div>
              )}
              {project.duration && (
                <div className="flex-1 min-w-[150px]">
                  <h4 className="font-semibold text-gray-400 dark:text-gray-400">
                    Duration
                  </h4>
                  <p className="text-gray-800 dark:text-white mt-1">
                    {project.duration}
                  </p>
                </div>
              )}
              {project.scope && (
                <div className="flex-1 min-w-[150px]">
                  <h4 className="font-semibold text-gray-400 dark:text-gray-400">
                    Scope
                  </h4>
                  <p className="text-gray-800 dark:text-white mt-1">
                    {project.scope}
                  </p>
                </div>
              )}
              {project.client && (
                <div className="flex-1 min-w-[150px]">
                  <h4 className="font-semibold text-gray-400 dark:text-gray-400">
                    Client
                  </h4>
                  <p className="text-gray-800 dark:text-white mt-1">
                    {project.client}
                  </p>
                </div>
              )}
              {project.platform && (
                <div className="flex-1 min-w-[150px]">
                  <h4 className="font-semibold text-gray-400 dark:text-gray-400">
                    Platform
                  </h4>
                  <p className="text-gray-800 dark:text-white mt-1">
                    {project.platform}
                  </p>
                </div>
              )}
            </div>

            {/* Live Demo Button (moved up slightly) */}
            <button className="mt-4 w-[120px] h-[42px] flex items-center justify-center bg-[#FFD400] text-black border rounded-lg font-semibold text-base transition-all duration-200 hover:bg-[#FFD400]/90 hover:brightness-95 cursor-pointer">
              Live Demo
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-end">
            <div className="w-[90%] max-h-[500px] rounded-lg overflow-hidden">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT OVERVIEW */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Project Overview
        </h2>
        {project.overview.map((para, i) => (
          <p
            key={i}
            className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed mt-4"
          >
            {para}
          </p>
        ))}
      </div>

      {/* SOLUTION & ANALYSIS */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Solution & Analysis
        </h2>

        {Array.isArray(project.solution) ? (
          project.solution.map((item, i) => {
            if (typeof item === "string") {
              return (
                <p
                  key={i}
                  className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed mt-4"
                >
                  {item}
                </p>
              );
            }
            if (item.type === "list" && Array.isArray(item.items)) {
              return (
                <ul
                  key={i}
                  className="list-disc list-inside text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed ml-4 mt-4 space-y-2"
                >
                  {item.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })
        ) : (
          <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed mt-4">
            {project.solution}
          </p>
        )}
      </div>

      {/* PERFORMANCE METRICS */}
      {project.performanceMetrics && (
        <div className="flex flex-row justify-center mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-[1440px] mx-auto min-h-[130px] flex flex-col lg:flex-row items-center gap-6 lg:gap-0 px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col w-full lg:w-2/5 gap-1 text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 dark:text-gray-400 font-semibold">
                Performance
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                Metrics Overview
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-6 sm:gap-4 lg:gap-0 lg:px-12">
              {project.performanceMetrics.map(([label, value], i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">
                    {value}
                  </div>
                  <div className="text-gray-400 dark:text-gray-400 text-xs sm:text-sm font-semibold text-center">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BUSINESS IMPACT */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Business Impact
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed text-center">
          {project.businessImpact}
        </p>
      </div>

      {/* PROJECT HIGHLIGHTS */}
      <div className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">
            Project Highlights
          </h2>
          <ul className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {project.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-400 dark:text-gray-400 text-[17px]"
              >
                <CheckCircle className="text-[#FFD400] w-5 h-5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FINAL DESIGN & SHOWCASE */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          Final Design & Performance Showcase
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-relaxed mb-8 text-center">
          {project.finalDesignText}
        </p>
      </div>

      {/* FINAL IMAGE SHOWCASE */}
      {project.finalImage && (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
          <div className="w-full overflow-hidden">
            <img
              src={project.finalImage}
              alt="Final Showcase"
              className="w-full max-h-[80vh] object-cover"
            />
          </div>
        </div>
      )}

      {/* CLIENT FEEDBACK */}
      {project.clientFeedback && (
        <div className="py-8">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Client Feedback
            </h2>
            <blockquote className="text-lg italic text-gray-400 dark:text-gray-400 max-w-3xl mx-auto">
              “{project.clientFeedback.quote}”
            </blockquote>
            <p className="mt-4 font-semibold text-gray-800 dark:text-white">
              — {project.clientFeedback.author} —
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSinglePage;
