function Footer() {
    return (
        <div className="flex flex-col w-full h-[1100px] items-center">
            {/* Footer GIF */}
            <div className="h-[750px] w-full justify-center flex flex-row">
                <img src="/src/assets/images/ContactUs.gif" alt="Footer Animation" className="w-full h-full object-cover rounded-4xl" />
            </div>
            <div className="flex flex-col bg-black w-full h-full px-20 py-20 justify-between">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <img src="/src/assets/icons/Rotaframe.svg" />
                        </div>
                        <div className="flex flex-row gap-4 mt-10">
                            <button className="cursor-pointer"><img src="/src/assets/images/social1.svg" className="w-[20px] h-[20px]" /></button>
                            <button className="cursor-pointer"><img src="/src/assets/images/social2.svg" className="w-[20px] h-[20px]" /></button>
                            <button className="cursor-pointer"><img src="/src/assets/images/social3.svg" className="w-[20px] h-[20px]" /></button>
                            <button className="cursor-pointer"><img src="/src/assets/images/social4.svg" className="w-[20px] h-[20px]" /></button>
                        </div>
                    </div>

                    <div className="flex flex-row mt-4 gap-16">
                        <div className="flex flex-col gap-2">
                            <div className="text-lg text-[#FAFAFA] font-semibold mb-2">Services</div>
                            <div className="text-normal text-[#898989] font-base">e-Commerce development</div>
                            <div className="text-normal text-[#898989] font-base">Custom software development</div>
                            <div className="text-normal text-[#898989] font-base">Mobile Application development</div>
                            <div className="text-normal text-[#898989] font-base">UX/UI & Product development</div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-lg text-[#FAFAFA] font-semibold mb-2">Company</div>
                            <div className="text-normal text-[#898989] font-base">Home</div>
                            <div className="text-normal text-[#898989] font-base">Services</div>
                            <div className="text-normal text-[#898989] font-base">Portfolio</div>
                            <div className="text-normal text-[#898989] font-base">Contact</div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="text-lg text-[#000000] font-semibold mb-2">.</div>
                            <div className="text-normal text-[#898989] font-base">Terms of Service</div>
                            <div className="text-normal text-[#898989] font-base">Privacy Policy</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full h-[1px] bg-[#2E2E2E] mt-12"></div>
                <div className="flex flex-row w-full text-normal text-[#898989] justify-center mt-5">2025 © Rotaframe Technology</div>
            </div>
        </div>
    );
}

export default Footer;
