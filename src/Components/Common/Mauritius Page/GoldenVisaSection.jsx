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
Mauritius – Investment
Residency
            </h3>

            <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
              Program Overview
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-white">
          Residency is issued to business and
property investors.
            </p>

            <button className="bg-[#3cc9a7] hover:bg-[#2fb997] transition px-6 py-3 rounded-xl text-white text-sm font-semibold">
              Connect Us
            </button>
          </div>

          {/* CENTER IMAGE (HIDE ON MOBILE) */}
          <div className="relative hidden md:flex justify-center -mt-40">
            <div className="relative z-10">
              <img
                src="/langma/images/mauritiusrectangle.png"
                alt="unitedtarabrectangle"
                className="w-[350px] h-[400px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-white md:-ml-5 mt-10 md:mt-0">
            <h4 className="text-[20px] md:text-[25px] font-semibold mb-4">
              About Mauritius
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-white">
             Mauritius is an island nation in the Indian Ocean
with a population of about 1.3 million. The country
is known for economic stability, investor-friendly
policies, and cultural diversity influenced by African,
Indian, European, and Chinese heritage. Its low-tax 
structure and growing financial sector make it an
emerging investment destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
