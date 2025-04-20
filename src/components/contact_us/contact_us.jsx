function ContactUs() {
    return (
        <div className="flex flex-row justify-center w-full mt-32">
            <div className="w-[1100px] flex flex-row">
                <div className="flex flex-col justify-between w-1/2">
                    <div className="flex flex-col">
                        <div className="text-4xl font-semibold text-white"><span className="text-[#898989]">Let's</span> Work Together</div>
                        <div className="text-[#898989] font-normal text-sm pt-4 pr-16">Reach out to us today to <span className="text-white">discuss</span> your project ideas, goals, and challenges. Let's leverage our expertise and experience to create <span className="text-white">impactful solutions</span> tailored to your needs.</div>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div className="flex flex-row items-center gap-2">
                            <img
                                src={"/src/assets/images/email.png"}
                                className="h-[40px] w-[40px]"
                            />
                            <div className="flex flex-col">
                                <div className="text-[#898989] text-sm">Email</div>
                                <div className="text-[#ffffff] text-lg">rotaframetechnology@gmail.com</div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-2">
                            <img
                                src={"/src/assets/images/phone.svg"}
                                className="h-[40px] w-[40px]"
                            />
                            <div className="flex flex-col">
                                <div className="text-[#898989] text-sm">Phone</div>
                                <div className="text-[#ffffff] text-lg">+94 (74) 309 4183</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-[512px] bg-[#2c2c2c] items-center px-5 justify-center py-8 rounded-2xl border border-gray-600">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col">
                            <div className="text-sm text-[#898989]">First name</div>
                            <input
                                type="text"
                                placeholder="First name"
                                className="border border-[#898989] rounded-lg px-2 text-[#898989] text-sm py-2 mt-2 w-[225px]"
                            />
                        </div>

                        <div className="flex flex-col">
                            <div className="text-sm text-[#898989]">Last Name</div>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="border border-[#898989] rounded-lg px-2 text-[#898989] text-sm py-2 mt-2 w-[225px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-start w-full gap-4 mt-3">
                        <div className="flex flex-col w-full">
                            <div className="text-sm text-[#898989]">Company Email</div>
                            <input
                                type="text"
                                placeholder="Company Email"
                                className="border border-[#898989] rounded-lg px-2 text-[#898989] text-sm py-2 mt-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row justify-start w-full gap-4 mt-3">
                        <div className="flex flex-col w-full">
                            <div className="text-sm text-[#898989]">What are you interested in?</div>
                            <textarea
                                type="text"
                                placeholder="Share more about what you want to accomplish"
                                className="border border-[#898989] rounded-lg px-2 text-[#898989] text-sm py-2 mt-2 w-full h-32"
                            />
                        </div>
                    </div>

                    <button className="flex flex-row justify-center w-full py-2 mt-4 text-base font-semibold text-black rounded-lg bg-amber-300">Send</button>

                    <div className="text-xs text-[#898989] mt-4">By submitting this form, I confirm that I have read and understood the <span className="text-white">Privacy Policy</span></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs