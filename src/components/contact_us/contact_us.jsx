function ContactUs() {
  return (
    <div className="flex flex-row justify-center w-full mt-24">
      <div className="w-[1100px] flex flex-row">
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex flex-col">
            <div className="text-4xl font-semibold text-gray-900 dark:text-white">
              <span className="text-gray-500 dark:text-[#898989]">
                Let&apos;s
              </span>{" "}
              Work Together
            </div>
            <div className="text-gray-600 dark:text-[#898989] font-normal text-sm pt-4 pr-16">
              Reach out to us today to{" "}
              <span className="text-black dark:text-white">discuss</span> your
              project ideas, goals, and challenges. Let&apos;s leverage our
              expertise and experience to create{" "}
              <span className="text-black dark:text-white">
                impactful solutions
              </span>{" "}
              tailored to your needs.
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {/* Email Row */}
            <div className="flex flex-row items-center gap-2">
              {/* Light Mode Image */}
              <img
                src="/src/assets/images/email-black.png"
                className="h-[40px] w-[40px] block dark:hidden"
              />
              {/* Dark Mode Image */}
              <img
                src="/src/assets/images/email.png"
                className="h-[40px] w-[40px] hidden dark:block"
              />
              <div className="flex flex-col">
                <div className="text-gray-600 dark:text-[#898989] text-sm">
                  Email
                </div>
                <div className="text-gray-900 dark:text-white text-lg">
                  rotaframetechnology@gmail.com
                </div>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex flex-row items-center gap-2">
              <img
                src="/src/assets/images/phone-black.svg"
                className="h-[40px] w-[40px] block dark:hidden"
              />
              <img
                src="/src/assets/images/phone.svg"
                className="h-[40px] w-[40px] hidden dark:block"
              />
              <div className="flex flex-col">
                <div className="text-gray-600 dark:text-[#898989] text-sm">
                  Phone
                </div>
                <div className="text-gray-900 dark:text-white text-lg">
                  +94 (74) 309 4183
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-[512px] bg-[#F3F3F3] dark:bg-[#171717] items-center px-5 justify-center py-8 rounded-2xl border border-gray-300 dark:border-gray-600">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <div className="text-sm text-gray-600 dark:text-[#898989]">
                First name
              </div>
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-sm py-2 mt-2 w-[225px] bg-white dark:bg-transparent"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-sm text-gray-600 dark:text-[#898989]">
                Last Name
              </div>
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-sm py-2 mt-2 w-[225px] bg-white dark:bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-row justify-start w-full gap-4 mt-3">
            <div className="flex flex-col w-full">
              <div className="text-sm text-gray-600 dark:text-[#898989]">
                Company Email
              </div>
              <input
                type="text"
                placeholder="Company Email"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-sm py-2 mt-2 w-full bg-white dark:bg-transparent"
              />
            </div>
          </div>

          <div className="flex flex-row justify-start w-full gap-4 mt-3">
            <div className="flex flex-col w-full">
              <div className="text-sm text-gray-600 dark:text-[#898989]">
                What are you interested in?
              </div>
              <textarea
                placeholder="Share more about what you want to accomplish"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-2 text-gray-900 dark:text-[#898989] text-sm py-2 mt-2 w-full h-32 bg-white dark:bg-transparent"
              />
            </div>
          </div>

          <button className="flex flex-row justify-center w-full py-2 mt-4 text-base font-semibold text-black rounded-lg bg-amber-300 hover:bg-amber-400">
            Send
          </button>

          <div className="text-xs text-gray-600 dark:text-[#898989] mt-4">
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
