import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

function ContactUs({ noMargin }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5qe72vj",
        "template_r1108tv",
        form.current,
        "CveuwAuQ3YH0yrgvF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent! We'll get back to you shortly.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px",
            },
          });
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.", {
            duration: 4000,
            position: "top-center",
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px",
            },
          });
        }
      );
  };

  return (
    <div
      id="contact"
      className={`flex flex-col items-center w-full px-8 sm:px-6 lg:px-8 ${noMargin ? "" : " mt-28 sm:mt-32 md:mt-48"}`}
    >
      <Toaster />
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-8 lg:gap-12 ">
        {/* Contact Info Section */}

        <div className="flex flex-col justify-between w-full lg:w-1/2">
          <div className="flex flex-col ">
            <h2 className="text-sm sm:text-base font-semibold text-[#FBBC05] mt-2">
              <span className="bg-black px-4 py-2 pb-3 rounded-full">
                Contact Us
              </span>
            </h2>

            <p className=" sm:pt-4 mt-4 md:mt-0 text-[32px] sm:text-[52px] font-semibold  text-gray-700 dark:text-gray-300 max-w-3xl ">
              <span className="text-gray-600 dark:text-gray-400">
                Let&apos;s
              </span>{" "}
              Work Together
            </p>

            <p className=" sm:pt-4 mt-2 sm:mt-0 md:mt-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mx-auto max-w-[800px]  ">
              Reach out to us today to{" "}
              <span className="text-black dark:text-white">discuss</span> your
              project ideas, goals, and challenges. Let&apos;s leverage our
              expertise and experience to create{" "}
              <span className="text-black dark:text-white">
                impactful solutions
              </span>{" "}
              tailored to your needs.
            </p>

          </div>

          <div className="flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-0 md:mt-0 ">
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
                <div className="text-gray-900 dark:text-white text-base sm:text-[20px]">
                  info@rotaframetechnology.com
                </div>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex flex-row items-center gap-2 mb-4">
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
                <div className="text-gray-900 dark:text-white text-base sm:text-[20px]">
                  +94 (74) 309 4183
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full lg:w-[512px] bg-[#F3F3F3] dark:bg-[#171717] items-center px-4 sm:px-5 py-6 sm:py-8 rounded-2xl border border-gray-300 dark:border-gray-600">
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex flex-col w-full sm:w-1/2">
                <div className="text-xs sm:text-[18px] text-gray-600 dark:text-[#898989]">
                  First name
                </div>
                <input
                  type="text"
                  placeholder="First name"
                  name="first_name"
                  className="border border-gray-300 dark:border-[#898989] rounded-lg px-3 text-gray-900 dark:text-[#898989] text-xs sm:text-[16px] py-2 mt-3 w-full bg-white dark:bg-transparent"
                  required
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2">
                <div className="text-xs sm:text-[18px] text-gray-600 dark:text-[#898989]">
                  Last Name
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  className="border border-gray-300 dark:border-[#898989] rounded-lg px-3 text-gray-900 dark:text-[#898989] text-xs sm:text-[16px] py-2 mt-3 w-full bg-white dark:bg-transparent"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col w-full mt-5">
              <div className="text-xs sm:text-[18px] text-gray-600 dark:text-[#898989]">
                Email
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-3 text-gray-900 dark:text-[#898989] text-xs sm:text-[16px] py-2 mt-3 w-full bg-white dark:bg-transparent"
                required
              />
            </div>

            <div className="flex flex-col w-full mt-5">
              <div className="text-xs sm:text-[18px] text-gray-600 dark:text-[#898989]">
                What are you interested in?
              </div>
              <textarea
                placeholder="Share more about what you want to accomplish"
                name="message"
                className="border border-gray-300 dark:border-[#898989] rounded-lg px-3 text-gray-900 dark:text-[#898989] text-xs sm:text-[16px] py-2 mt-3 w-full h-24 sm:h-32 bg-white dark:bg-transparent"
                required
              />
            </div>

            <button
              className="flex flex-row justify-center items-center w-full py-2 mt-5 text-sm sm:text-base font-semibold text-black rounded-lg bg-amber-300 hover:bg-amber-400"
              type="submit"
            >
              <span>Send</span>
              <RiSendPlaneFill className="ml-2" />
            </button>

            <div className="text-xs text-gray-600 dark:text-[#898989] mt-4 text-center">
              By submitting this form, I confirm that I have read and understood
              the{" "}
              <span className="text-black dark:text-white">Privacy Policy</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
