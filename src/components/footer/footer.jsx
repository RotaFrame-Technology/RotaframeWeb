function Footer() {
    return (
        <div className="flex flex-col w-full h-[1100px] items-center">
            {/* Footer GIF */}
            <div className="h-[750px] w-full justify-center flex flex-row">
                <img
                    src="/src/assets/images/ContactUs.gif"
                    alt="Footer Animation"
                    className="w-full h-full object-cover rounded-4xl"
                />
            </div>

            <div className="flex flex-col w-full h-full px-20 py-20 justify-between bg-[#F9F9F9] dark:bg-[#000000] transition-colors duration-300">
                <div className="flex flex-row w-full justify-between">
                    {/* Logo and social icons */}
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <img src="/src/assets/icons/Rotaframe.svg" />
                        </div>
                        <div className="flex flex-row gap-4 mt-10">
                            {[1, 2, 3, 4].map((num) => (
                                <button key={num} className="cursor-pointer">
                                    <img
                                        src={`/src/assets/images/social${num}.svg`}
                                        className="w-[20px] h-[20px]"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="flex flex-row mt-4 gap-16">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                                Services
                            </div>
                            {[
                                "e-Commerce development",
                                "Custom software development",
                                "Mobile Application development",
                                "UX/UI & Product development",
                            ].map((service) => (
                                <div key={service} className="text-normal font-base text-[#5C5C5C] dark:text-[#898989]">
                                    {service}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                                Company
                            </div>
                            {["Home", "Services", "Portfolio", "Contact"].map((link) => (
                                <div key={link} className="text-normal font-base text-[#5C5C5C] dark:text-[#898989]">
                                    {link}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-lg font-semibold mb-2 text-[#000000] dark:text-[#FAFAFA]">
                                Legal
                            </div>
                            {["Terms of Service", "Privacy Policy"].map((legal) => (
                                <div key={legal} className="text-normal font-base text-[#5C5C5C] dark:text-[#898989]">
                                    {legal}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full h-[1px] bg-[#D9D9D9] dark:bg-[#2E2E2E] mt-12"></div>

                <div className="flex flex-row w-full text-normal text-[#5C5C5C] dark:text-[#898989] justify-center mt-5">
                    2025 © Rotaframe Technology
                </div>
            </div>
        </div>
    );
}

export default Footer;
