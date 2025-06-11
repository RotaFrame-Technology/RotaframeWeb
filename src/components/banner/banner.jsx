function Banner() {
  return (
    <div className="flex flex-row justify-center mt-20">
        <div className="w-[940px] h-[130px] flex flex-row items-center px-10">
            <div className="flex flex-col w-2/5 gap-1">
                  <div className="text-4xl text-[#898989] font-semibold">What can you get </div>
                  <div className="text-4xl font-semibold text-gray-800 dark:text-white">from Rotaframe</div>
            </div>
              <div className="flex flex-row justify-between w-3/5 px-12">
                <div className="flex flex-col items-center gap-1">
                    <div className="text-3xl font-semibold text-gray-800 dark:text-white">24/7</div>
                    <div className="text-[#898989] text-sm font-semibold">Availability</div>
                </div>

                  <div className="flex flex-col items-center gap-1">
                      <div className="text-3xl font-semibold text-gray-800 dark:text-white">100%</div>
                      <div className="text-[#898989] text-sm font-semibold">Customer Satisfaction</div>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                      <div className="text-3xl font-semibold text-gray-800 dark:text-white">FREE</div>
                      <div className="text-[#898989] text-sm font-semibold">Consultation</div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Banner