import React from "react";

const GoldenVisaSection = () => {
  return (
    <section className="w-full bg-[#2f6668] py-20 mt-10 px-6 ">
      <div className="max-w-7xl mx-auto relative">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white md:-mt-20">
            <h3 className="text-[26px] md:text-[32px] font-semibold mb-2">
Singapore – Global
Investor Program
            </h3>

            <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
              Program Overview
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-white">
           Permanent residency is granted to established
global business owners and entrepreneurs.
            </p>

            <button className="bg-[#3cc9a7] hover:bg-[#2fb997] transition px-6 py-3 rounded-xl text-white text-sm font-semibold">
              Connect Us
            </button>
          </div>

          {/* CENTER IMAGE (HIDE ON MOBILE) */}
          <div className="relative hidden md:flex justify-center -mt-50">
            <div className="relative z-10">
              <img
                src="/langma/images/singaporerectangle.png"
                alt="hongkongrectangle"
                className="w-[350px] h-[400px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white md:-ml-5 mt-10 md:mt-0">
            <h4 className="text-[20px] md:text-[25px] font-semibold mb-4">
              About Singapore
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-white">
             Singapore is a strategically located city-state in
Southeast Asia with approximately 6 million
residents. It is recognised globally for efficient
governance, business transparency, advanced
healthcare systems, and strong public safety.
English, Mandarin, Malay, and Tamil are official
languages, supporting its multicultural
economic environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
