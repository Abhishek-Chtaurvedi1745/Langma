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
              Greece – Golden Visa
            </h3>

            <h4 className="text-[20px] md:text-[25px] font-semibold mb-3">
              Program Overview
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 text-white">
              Applicants acquire residential property that meets Golden Visa
              requirements. A five-year renewable residence permit is issued to
              the main applicant and eligible family members.
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
              About Greece
            </h4>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-white">
              Greece lies in southeastern Europe and features a mountainous
              mainland with over 3,000 islands spread across the Aegean and
              Ionian seas. It covers nearly 132,000 sq km and shares borders
              with Albania, North Macedonia, Bulgaria, and Turkey. With around
              10 million residents, Greece is the cradle of Western
              civilisation, influencing democracy, medicine, and philosophy. Its
              Mediterranean climate, strong Orthodox traditions, family values,
              coastal lifestyle, and historic cities such as Athens and
              Thessaloniki create an exceptional living environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldenVisaSection;
