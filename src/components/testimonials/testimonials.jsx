function Testimonials() {
    const testimonials = [
        {
            img: '/src/assets/images/testimonials/Chamikara.png',
            title: 'Pleasure to Recommend!',
            text: "It's a great pleasure to recommend Rotaframe Technology Pvt (Ltd) for their excellent software solutions and exceptional customer support. The team at Rotaframe Technology Pvt (Ltd) is knowledgeable, approachable, and truly concerned about the success of their clients. I have known their team members for a long time and I can attest to their dedication and expertise. Rotaframe Technology Pvt Ltd would leverage its clients' experience to provide better, well-supported, and efficient software solutions.",
            name: 'Chamikara Kariyapperuma',
            position: 'Quality Engineer at Sysco LABS'
        },
        {
            img: '/src/assets/images/testimonials/Akshitha.png',
            title: 'Highly Recommend!',
            text: 'I highly recommend partnering with Rotaframe Technology Pvt Ltd for their exceptional service and expertise in delivering top-quality software solutions. Their commitment to excellence is evident in every aspect of their work, making them an excellent choice for anyone seeking reliable and cutting-edge software development services. Rotaframe Technology Pvt Ltd consistently demonstrates a deep understanding of client needs and delivers innovative solutions that exceed expectations.',
            name: 'Akshitha Sriyanjith',
            position: 'Software Engineer at Prime Engineering (pvt) Ltd'
        },
        {
            img: '/src/assets/images/testimonials/Ashan.png',
            title: 'Wholeheartedly Recommend!',
            text: 'As Rotaframe Technology Pvt Ltd has outstanding service and proficiency in providing high-caliber software solutions, I heartily suggest collaborating with them. They are a great option for anyone looking for dependable and innovative software development services. Dedication to perfection, which is obvious in every part of their work. Rotaframe Technology Pvt Ltd often exhibits a thorough comprehension of the needs of the client and provides creative solutions. I wholeheartedly recommend Rotaframe Technology Pvt Ltd as the best provider in the sector.',
            name: 'Ashan Withana',
            position: 'Software Engineer at Saberion'
        }
    ];

    return (
        <section className="w-full bg-white dark:bg-[#121212] transition-colors duration-300 flex justify-center">
            <div className="flex flex-col items-center justify-center text-center px-4 w-full max-w-[1440px] mt-[100px] md:mt-[240px] md:mb-20">
                
                {/* Section Title */}
                <h2 className="text-[65px] leading-[72px] font-bold mb-4 w-11/12 text-gray-800 dark:text-white">
                    Testimonials
                </h2>

                {/* Slider Container */}
                <div className="w-full overflow-x-auto mt-10">
                    <div className="flex flex-row gap-6 px-4 w-fit">
                        {testimonials.map((item, index) => (
                            <div
    key={index}
    className="group bg-[#F3F3F3] dark:bg-[#1e1e1e] rounded-lg h-[540px] min-w-[300px] md:min-w-[400px] flex flex-col items-center justify-center p-6 transition-all duration-300 border border-transparent hover:border-[#FFD400] hover:shadow-lg dark:hover:bg-gradient-to-br dark:hover:from-[#333] dark:hover:to-black"

>

                                <img
                                    src={item.img}
                                    alt={item.name}
                                    width={70}
                                    height={70}
                                    className="border-2 border-black dark:border-white rounded-full group-hover:border-[#FFD400] dark:group-hover:border-white transition-colors duration-300"
                                />
                                <div className="mt-4 text-xl font-bold text-center text-black dark:text-white dark:group-hover:text-white">
                                    {item.title}
                                </div>
                                <div className="my-2">
                                    <img src="src/assets/images/testimonials/rating.svg" alt="rating" width={150} height={8} />
                                </div>
                                <div className="text-sm px-2 text-black dark:text-gray-300 dark:group-hover:text-white text-center">
                                    {item.text}
                                </div>
                                <div className="mt-4 text-base font-semibold text-black dark:text-white dark:group-hover:text-white">
                                    {item.name}
                                </div>
                                <div className="text-xs font-light text-black dark:text-gray-400 dark:group-hover:text-white">
                                    {item.position}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
