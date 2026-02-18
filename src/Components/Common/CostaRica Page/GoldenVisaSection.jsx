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
Costa Rica – Investor
Residency
            </h3>

            <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
              Program Overview
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-white">
            Residency is granted to investors
contributing to local businesses or
approved development projects.
            </p>

            <button className="bg-[#3cc9a7] hover:bg-[#2fb997] transition px-6 py-3 rounded-xl text-white text-sm font-semibold">
              Connect Us
            </button>
          </div>

          {/* CENTER IMAGE (HIDE ON MOBILE) */}
          <div className="relative hidden md:flex justify-center -mt-50">
            <div className="relative z-10">
              <img
                src="/langma/images/CostaRicabannerrectangle.png"
                alt="CostaRicabanner"
                className="w-[350px] h-[400px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white md:-ml-5 mt-10 md:mt-0">
            <h4 className="text-[20px] md:text-[25px] font-semibold mb-4">
              About Costa Rica
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-white">
             Costa Rica is a Central American country located
between Nicaragua and Panama, bordered by both
the Pacific Ocean and Caribbean Sea. It has a
population of approximately 5.2 million. Known for
biodiversity, political stability, and environmental
conservation, Costa Rica promotes sustainable living,
strong healthcare access, and a relaxed lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
