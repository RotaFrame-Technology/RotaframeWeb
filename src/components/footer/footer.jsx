import { FiUpload } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";

function Footer() {
    return (
        <div className="flex flex-col w-full h-[900px] items-center relative">
            {/* Footer image */}
            <div className="h-[550px] w-5/6 absolute justify-center flex flex-row top-0 left-1/2 transform -translate-x-1/2 rounded-4xl shadow-2xl items-center px-16 z-20 gap-20" style={{ backgroundImage: "url('/src/assets/images/footerImg.png')" }}>
                <div className="w-4/6 h-full rounded-4xl flex flex-col px-4 py-5 items-center justify-center">
                    <div className="flex flex-col w-full pr-5">
                        <div className="px-4 py-3 rounded-full border-2 border-[#035371] w-[250px] text-lg text-center text-[#035371] font-semibold">Start building today</div>
                        <div className="text-6xl font-black mt-4"><span className="text-[#0C94C7]">Get your Matched</span> Jobs in a few minutes.</div>
                        <div className="text-lg pt-4 pr-24">Advertise your jobs to millions of monthly users and search 15.8 Million CV in our database.</div>
                        <div className="flex flex-row bg-white py-2 h-[65px] mt-4 rounded-full px-2 w-3/4 justify-between">
                            <input
                                type="text"
                                placeholder="enter your email"
                                className="rounded-md px-2 py-1 flex-1 border-0"
                            />
                            <button className="px-8 text-white h-full bg-[#035371] hover:bg-[#0C94C7] cursor-pointer rounded-full">Subscribe</button>
                        </div>

                    </div>

                </div>
                <div className="w-2/6 h-4/6 bg-white rounded-4xl flex flex-col px-4 py-2 items-center justify-center">
                    <div className="flex flex-col gap-8">
                        <button className="px-10 py-4 rounded-full flex flex-row gap-2 items-center font-semibold bg-[#ACE9FF] text-[#035371] border-2 border-[#035371]">
                            <div className="w-4 h-4"><FiUpload /></div>
                            <div>Upload your CV</div>
                        </button>

                        <button className="px-10 py-4 rounded-full flex flex-row gap-2 justify-center items-center font-semibold bg-[#ACE9FF] text-[#035371] border-2 border-[#035371]">
                            <div className="w-4 h-4"><FiUpload /></div>
                            <div>Create CV</div>
                        </button>

                        <button className="px-10 py-4 rounded-full flex flex-row gap-2 justify-center items-center font-semibold bg-[#ACE9FF] text-[#035371] border-2 border-[#035371]">
                            <div className="w-4 h-4"><LuDownload /></div>
                            <div>Download App</div>
                        </button>
                    </div>

                </div>
            </div>
            <div className="h-[600px] w-full bg-[#042938] absolute justify-center bottom-0 left-1/2 transform -translate-x-1/2 shadow-2xl items-center px-8 z-2 flex flex-col">

            </div>
        </div>
    )
}

export default Footer