import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col items-center w-full mt-12 sm:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Contact Info Section */}
        <div className="flex flex-col justify-between w-full lg:w-1/2">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
              <span className="text-gray-500 dark:text-[#898989]">
                Let&apos;s
              </span>{" "}
              Work Together
            </div>
            <div className="text-gray-600 dark:text-[#898989] font-normal text-xs sm:text-sm pt-4 pr-0 lg:pr-16">
              Reach out to us today to{" "}
              <span className="text-black dark:text-white">discuss</span> your
              project ideas, goals, and challenges. Let&apos;s leverage our
              expertise and experience to create{" "}
              <span className="text-black dark:text-white">
                impactful solutions
              </span>{" "}
              tailored to your Diversity your needs.
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-10">
            {/* Email Row */}
            <div className="flex flex-row items-center gap-2">
              <img
                src="/assets/images/email-black.png"
                className="h-8 w-8 sm:h-10 sm:w-10 block dark:hidden"
                alt="Email icon"
              />
              <img
                src="/assets/images/email.png"
                className="h-8 w-8 sm:h-10 sm:w-10 hidden dark:block"
                alt="Email icon"
              />
              <div className="flex flex-col">
                <div className="text-gray-600 dark:text-[#898989] text-xs sm:text-sm">
                  Email
                </div>
                <div className="text-gray-900 dark:text-white text-base sm:text-lg">
                  rotaframetechnology@gmail.com
                </div>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex flex-row items-center gap-2">
              <img
                src="/assets/images/phone-black.svg"
                className="h-8 w-8 sm:h-10 sm:w-10 block dark:hidden"
                alt="Phone icon"
              />
              <img
                src="/assets/images/phone.svg"
                className="h-8 w-8 sm:h-10 sm:w-10 hidden dark:block"
                alt="Phone icon"
              />
              <div className="flex flex-col">
                <div className="text-gray-600 dark:text-[#898989] text-xs sm:text-sm">
                  Phone
                </div>
                <div className="text-gray-900 dark:text-white text-base sm:text-lg">
                  +94 (74) 309 4183
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-[512px] bg-[#F3F3F3] dark:bg-[#171717] items-center px-4 sm:px-5 py-6 sm:py-8 rounded-2xl border border-gray-300 dark:border-gray-600">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex flex-col w-full sm:w-1/2">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-[#898989]">
                First name
              </div>
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-xs sm:text-sm py-2 mt-2 w-full bg-white dark:bg-transparent"
              />
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <div className="text-xs sm:text-sm text-gray-600 dark:text-[#898989]">
                Last Name
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-xs sm:text-sm py-2 mt-2 w-full bg-white dark:bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-3">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-[#898989]">
              Company Email
            </div>
            <input
              type="text"
              placeholder="Company Email"
              className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-xs sm:text-sm py-2 mt-2 w-full bg-white dark:bg-transparent"
            />
          </div>

          <div className="flex flex-col w-full mt-3">
            <div className="text-xs sm:text-sm text-gray-600 dark:text-[#898989]">
              What are you interested in?
            </div>
            <textarea
              placeholder="Share more about what you want to accomplish"
              className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-xs sm:text-sm py-2 mt-2 w-full h-24 sm:h-32 bg-white dark:bg-transparent"
            />
          </div>

          <button className="flex flex-row justify-center w-full py-2 mt-4 text-sm sm:text-base font-semibold text-black rounded-lg bg-amber-300 hover:bg-amber-400">
            Send
          </button>

          <div className="text-xs text-gray-600 dark:text-[#898989] mt-4 text-center">
            By submitting this form, I confirm that I have read and understood
            the{" "}
            <span className="text-black dark:text-white">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;