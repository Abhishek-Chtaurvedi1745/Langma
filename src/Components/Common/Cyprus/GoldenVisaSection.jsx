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
              Cyprus – Permanent
Residency
            </h3>

            <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
              Program Overview
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-white">
             Permanent residency is issued through
approved real estate investment.
            </p>

            <button className="bg-[#3cc9a7] hover:bg-[#2fb997] transition px-6 py-3 rounded-xl text-white text-sm font-semibold">
              Connect Us
            </button>
          </div>

          {/* CENTER IMAGE (HIDE ON MOBILE) */}
          <div className="relative hidden md:flex justify-center -mt-70">
            <div className="relative z-10">
              <img
                src="/langma/images/Group 5326.png"
                alt="Greece"
                className="w-[350px] h-[500px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white md:-ml-5 mt-10 md:mt-0">
            <h4 className="text-[20px] md:text-[25px] font-semibold mb-4">
              About Cyprus
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-white">
              Cyprus is the third-largest island in the Mediterranean,
located south of Turkey and west of the Middle East.
It blends European living with Middle Eastern warmth.
The country has about 1.3 million people and uses
Greek and Turkish officially, while English is widely
spoken. Influenced by Greek, Roman, Ottoman, and
British rule, Cyprus offers a peaceful lifestyle
supported by year-round sunshine, seaside towns,
traditional villages, and cuisine centred on olive oil,
seafood, and fresh produce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
