import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Chamikara Kariyapperuma",
    username: "Quality Engineer at Sysco LABS",
    body: "It's a great pleasure to recommend Rotaframe Technology Pvt (Ltd) for their excellent software solutions and exceptional customer support. The team at Rotaframe Technology Pvt (Ltd) is knowledgeable, approachable, and truly concerned about the success of their clients. I have known their team members for a long time and I can attest to their dedication and expertise. Rotaframe Technology Pvt Ltd would leverage its clients' experience to provide better, well-supported, and efficient software solutions.",
    img: "/src/assets/images/testimonials/Chamikara.png",
  },
  {
    name: "Akshitha Sriyanjith",
    username: "Software Engineer at Prime Engineering (pvt) Ltd",
    body: "I highly recommend partnering with Rotaframe Technology Pvt Ltd for their exceptional service and expertise in delivering top-quality software solutions. Their commitment to excellence is evident in every aspect of their work, making them an excellent choice for anyone seeking reliable and cutting-edge software development services. Rotaframe Technology Pvt Ltd consistently demonstrates a deep understanding of client needs and delivers innovative solutions that exceed expectations.",
    img: "/src/assets/images/testimonials/Akshitha.png",
  },
  {
    name: "Ashan Withana",
    username: "Software Engineer at Saberion",
    body: "As Rotaframe Technology Pvt Ltd has outstanding service and proficiency in providing high-caliber software solutions, I heartily suggest collaborating with them. They are a great option for anyone looking for dependable and innovative software development services. Dedication to perfection, which is obvious in every part of their work. Rotaframe Technology Pvt Ltd often exhibits a thorough comprehension of the needs of the client and provides creative solutions. I wholeheartedly recommend Rotaframe Technology Pvt Ltd as the best provider in the sector.",
    img: "/src/assets/images/testimonials/Ashan.png",
  },
  {
    name: "Chamikara Kariyapperuma",
    username: "Quality Engineer at Sysco LABS",
    body: "It's a great pleasure to recommend Rotaframe Technology Pvt (Ltd) for their excellent software solutions and exceptional customer support. The team at Rotaframe Technology Pvt (Ltd) is knowledgeable, approachable, and truly concerned about the success of their clients. I have known their team members for a long time and I can attest to their dedication and expertise. Rotaframe Technology Pvt Ltd would leverage its clients' experience to provide better, well-supported, and efficient software solutions.",
    img: "/src/assets/images/testimonials/Chamikara.png",
  },
  {
    name: "Akshitha Sriyanjith",
    username: "Software Engineer at Prime Engineering (pvt) Ltd",
    body: "I highly recommend partnering with Rotaframe Technology Pvt Ltd for their exceptional service and expertise in delivering top-quality software solutions. Their commitment to excellence is evident in every aspect of their work, making them an excellent choice for anyone seeking reliable and cutting-edge software development services. Rotaframe Technology Pvt Ltd consistently demonstrates a deep understanding of client needs and delivers innovative solutions that exceed expectations.",
    img: "/src/assets/images/testimonials/Akshitha.png",
  },
  {
    name: "Ashan Withana",
    username: "Software Engineer at Saberion",
    body: "As Rotaframe Technology Pvt Ltd has outstanding service and proficiency in providing high-caliber software solutions, I heartily suggest collaborating with them. They are a great option for anyone looking for dependable and innovative software development services. Dedication to perfection, which is obvious in every part of their work. Rotaframe Technology Pvt Ltd often exhibits a thorough comprehension of the needs of the client and provides creative solutions. I wholeheartedly recommend Rotaframe Technology Pvt Ltd as the best provider in the sector.",
    img: "/src/assets/images/testimonials/Ashan.png",
  },
  {
    name: "Chamikara Kariyapperuma",
    username: "Quality Engineer at Sysco LABS",
    body: "It's a great pleasure to recommend Rotaframe Technology Pvt (Ltd) for their excellent software solutions and exceptional customer support. The team at Rotaframe Technology Pvt (Ltd) is knowledgeable, approachable, and truly concerned about the success of their clients. I have known their team members for a long time and I can attest to their dedication and expertise. Rotaframe Technology Pvt Ltd would leverage its clients' experience to provide better, well-supported, and efficient software solutions.",
    img: "/src/assets/images/testimonials/Chamikara.png",
  },
  {
    name: "Akshitha Sriyanjith",
    username: "Software Engineer at Prime Engineering (pvt) Ltd",
    body: "I highly recommend partnering with Rotaframe Technology Pvt Ltd for their exceptional service and expertise in delivering top-quality software solutions. Their commitment to excellence is evident in every aspect of their work, making them an excellent choice for anyone seeking reliable and cutting-edge software development services. Rotaframe Technology Pvt Ltd consistently demonstrates a deep understanding of client needs and delivers innovative solutions that exceed expectations.",
    img: "/src/assets/images/testimonials/Akshitha.png",
  },
  {
    name: "Ashan Withana",
    username: "Software Engineer at Saberion",
    body: "As Rotaframe Technology Pvt Ltd has outstanding service and proficiency in providing high-caliber software solutions, I heartily suggest collaborating with them. They are a great option for anyone looking for dependable and innovative software development services. Dedication to perfection, which is obvious in every part of their work. Rotaframe Technology Pvt Ltd often exhibits a thorough comprehension of the needs of the client and provides creative solutions. I wholeheartedly recommend Rotaframe Technology Pvt Ltd as the best provider in the sector.",
    img: "/src/assets/images/testimonials/Ashan.png",
  },
  {
    name: "Ashan Withana",
    username: "Software Engineer at Saberion",
    body: "As Rotaframe Technology Pvt Ltd has outstanding service and proficiency in providing high-caliber software solutions, I heartily suggest collaborating with them. They are a great option for anyone looking for dependable and innovative software development services. Dedication to perfection, which is obvious in every part of their work. Rotaframe Technology Pvt Ltd often exhibits a thorough comprehension of the needs of the client and provides creative solutions. I wholeheartedly recommend Rotaframe Technology Pvt Ltd as the best provider in the sector.",
    img: "/src/assets/images/testimonials/Ashan.png",
  },
];

const TestimonialCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "w-full max-w-[800px] cursor-pointer overflow-hidden rounded-xl border p-5 mb-3 break-inside-avoid",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-2">
        <img
          className="rounded-full"
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-gray-800 dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-[#898989]">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMasonry() {
  return (
    <div className="w-full bg-white dark:bg-[#121212] transition-colors duration-300 flex flex-col items-center py-12">
      <h2 className="text-[65px] leading-[72px] font-bold mb-10 w-11/12 text-gray-800 dark:text-white text-center">
        Testimonials
      </h2>

      <div className="relative w-full flex justify-center">
        {/* Left Blur Overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[30%] sm:w-[32%] md:w-[30%] lg:w-[28%] xl:w-[28%] bg-gradient-to-r from-white/100 dark:from-[#121212]/100 to-transparent blur-[64px] z-10" />
        {/* Right Blur Overlay */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[30%] sm:w-[32%] md:w-[30%] lg:w-[28%] xl:w-[28%] bg-gradient-to-l from-white/100 dark:from-[#121212]/100 to-transparent blur-[64px] z-10" />
        {/* Bottom-to-Top Blur for Second Row */}
        <div className="pointer-events-none absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-t from-white/100 dark:from-[#121212]/100 to-transparent blur-[64px] z-10" />
        <div
          className="columns-1 md:columns-2 lg:columns-5 gap-5 w-full px-4 text-center"
          style={{ columnGap: "1rem" }}
        >
          {testimonials.map((review, idx) => (
            <TestimonialCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsMasonry;
