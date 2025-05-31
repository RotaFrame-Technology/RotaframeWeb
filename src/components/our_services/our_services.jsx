function OurServices() {
    return (
        <div className="flex flex-col px-20 pt-24 bg-center bg-cover"
            style={{ backgroundImage: "url('/src/assets/images/serviceBg.png')" }}>
            <div className="text-4xl font-semibold text-center text-white">Our Services</div>
            <div className="pt-4 text-base font-normal text-center text-gray-300">Kickstart your next project with templates built by us and our community.</div>

            <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
                <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
                    <div className="absolute top-0 flex flex-col w-2/5 ">
                        {/* Default image (shown normally, hidden on hover) */}
                        <img
                            src={"/src/assets/images/service1.svg"}
                            className="h-[405px] w-[480px] group-hover:hidden"
                        />

                        {/* Hover image (hidden normally, shown on hover) */}
                        <img
                            src={"/src/assets/images/servicecol1.png"}
                            className="h-[405px] w-[480px] hidden group-hover:block"
                        />
                    </div>


                    <div className="flex flex-col w-full ml-[380px] text-white bg-[#171717] rounded-r-2xl justify-center px-6">
                        <div className="text-[#FBBC05] font-semibold ">Multi-Platform</div>
                        <div className="text-[#ffffff] font-normal text-2xl pt-2">e-Commerce Development</div>
                        <div className="text-[#898989] font-normal text-sm pt-2">Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors. From visually stunning interfaces to seamless user experiences, we tailor every aspect to align with your brand and engage your audience effectively.</div>
                        <button className="text-[#898989] text-start text-sm flex flex-row gap-2 items-center mt-6">
                            <div>Read more</div>
                            <img
                                src={"/src/assets/images/arrowup.png"}
                                className="h-[14px] w-[14px]"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-end">
                <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
                    <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
                        
                        <div className="absolute top-0 flex flex-col w-2/5 ">
                            {/* Default image (shown normally, hidden on hover) */}
                            <img
                                src={"/src/assets/images/service2.png"}
                                className="h-[405px] w-[480px] group-hover:hidden"
                            />

                            {/* Hover image (hidden normally, shown on hover) */}
                            <img
                                src={"/src/assets/images/service2cols.png"}
                                className="h-[405px] w-[480px] hidden group-hover:block"
                            />
                        </div>
                        <div className="flex flex-col w-full ml-[380px] text-white bg-[#171717] rounded-r-2xl justify-center px-6">
                            <div className="text-[#FBBC05] font-semibold ">Multi-Platform</div>
                            <div className="text-[#ffffff] font-normal text-2xl pt-2">e-Commerce Development</div>
                            <div className="text-[#898989] font-normal text-sm pt-2">Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors. From visually stunning interfaces to seamless user experiences, we tailor every aspect to align with your brand and engage your audience effectively.</div>
                            <button className="text-[#898989] text-start text-sm flex flex-row gap-2 items-center mt-6">
                                <div>Read more</div>
                                <img
                                    src={"/src/assets/images/arrowup.png"}
                                    className="h-[14px] w-[14px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-start">
                <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
                    <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
                    
                        <div className="absolute top-0 flex flex-col w-2/5 ">
                            {/* Default image (shown normally, hidden on hover) */}
                            <img
                                src={"/src/assets/images/service3.png"}
                                className="h-[405px] w-[480px] group-hover:hidden"
                            />

                            {/* Hover image (hidden normally, shown on hover) */}
                            <img
                                src={"/src/assets/images/service3cols.png"}
                                className="h-[405px] w-[480px] hidden group-hover:block"
                            />
                        </div>
                        <div className="flex flex-col w-full ml-[380px] text-white bg-[#171717] rounded-r-2xl justify-center px-6">
                            <div className="text-[#FBBC05] font-semibold ">Multi-Platform</div>
                            <div className="text-[#ffffff] font-normal text-2xl pt-2">e-Commerce Development</div>
                            <div className="text-[#898989] font-normal text-sm pt-2">Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors. From visually stunning interfaces to seamless user experiences, we tailor every aspect to align with your brand and engage your audience effectively.</div>
                            <button className="text-[#898989] text-start text-sm flex flex-row gap-2 items-center mt-6">
                                <div>Read more</div>
                                <img
                                    src={"/src/assets/images/arrowup.png"}
                                    className="h-[14px] w-[14px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-row justify-end">
                <div className="flex flex-col w-[940px] h-[460px] relative justify-end group">
                    <div className="flex flex-row w-full h-[360px] border border-gray-400 rounded-2xl group-hover:border-[#FFD400]">
                        
                        <div className="absolute top-0 flex flex-col w-2/5 ">
                            {/* Default image (shown normally, hidden on hover) */}
                            <img
                                src={"/src/assets/images/service4.png"}
                                className="h-[405px] w-[480px] group-hover:hidden"
                            />

                            {/* Hover image (hidden normally, shown on hover) */}
                            <img
                                src={"/src/assets/images/service4cols.png"}
                                className="h-[405px] w-[480px] hidden group-hover:block"
                            />
                        </div>
                        <div className="flex flex-col w-full ml-[380px] text-white bg-[#171717] rounded-r-2xl justify-center px-6">
                            <div className="text-[#FBBC05] font-semibold ">Multi-Platform</div>
                            <div className="text-[#ffffff] font-normal text-2xl pt-2">e-Commerce Development</div>
                            <div className="text-[#898989] font-normal text-sm pt-2">Unleash the potential of your online identity with Rotaframe Technology's bespoke web design and development services. Our expert team crafts captivating websites and robust web applications that leave a lasting impression on your visitors. From visually stunning interfaces to seamless user experiences, we tailor every aspect to align with your brand and engage your audience effectively.</div>
                            <button className="text-[#898989] text-start text-sm flex flex-row gap-2 items-center mt-6">
                                <div>Read more</div>
                                <img
                                    src={"/src/assets/images/arrowup.png"}
                                    className="h-[14px] w-[14px]"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurServices