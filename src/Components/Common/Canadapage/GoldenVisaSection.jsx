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
            Canada – Startup &
Entrepreneur PR
            </h3>

            <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
              Program Overview
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-white">
            Entrepreneurs obtain permanent residency
through approved innovation, startup, or
business investment programs.
            </p>

            <button className="bg-[#3cc9a7] hover:bg-[#2fb997] transition px-6 py-3 rounded-xl text-white text-sm font-semibold">
              Connect Us
            </button>
          </div>

          {/* CENTER IMAGE (HIDE ON MOBILE) */}
          <div className="relative hidden md:flex justify-center -mt-50">
            <div className="relative z-10">
              <img
                src="/langma/images/Canadarectangle.png"
                alt="Canadarectangle"
                className="w-[350px] h-[400px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white md:-ml-5 mt-10 md:mt-0">
            <h4 className="text-[20px] md:text-[25px] font-semibold mb-4">
              About Canada
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-white">
              Canada stretches from the Atlantic to the Pacific and
Arctic Oceans, making it the world’s second-largest
country by land area. Its population exceeds 40
million. Canada is officially bilingual in English and
French and is known for political stability, public
healthcare, global education standards, and safe
urban environments. Its immigration-friendly policies
attract families and entrepreneurs worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
