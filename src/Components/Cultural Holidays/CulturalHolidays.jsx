import React from "react";
import ContactForm from "../../Pages/HomePages/ContactForm";
import StatsCards from "../../Pages/HomePages/StatsCards";

import BlogSection from "../../Pages/HomePages/BlogSection";
import LangmaSection from "../../Pages/HomePages/LangmaSection";
import FAQ from "../../Pages/HomePages/FAQ";
import CTASection from "../Common/CTASection";
import Cultural from "./Cultural";
import CulturalHolidayPackages from "./CulturalHolidayPackages";
import WhoCultural from "./WhoCultural";
import Cultural_Infusion_Programs from "./Cultural_Holidays ";
import ConnectedSection from "../../Pages/HomePages/ConnectedSection";
// import CulturalInfusion from "./CulturalInfusion";
// import Program_Highlights from "./Program_Highlights";
// import WhoProgramsFor from "./WhoProgramsFor";

const CulturalHolidays = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F7FAFC]">
        <div className="w-full  grid grid-cols-1 h-[150px] md:h-[300px] lg:h-[400px] xl:h-[600px]">
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/langma/images/Group 1 (1).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 md:bottom-8 ml-5 md:ml-20">
              <button className="inline-flex items-center gap-2 bg-[#006064] text-white px-3 py-1 md:px-8 md:py-3 rounded-full text-sm font-medium hover:bg-[#17a398] transition shadow-lg">
                Let’s Connect →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <ContactForm/> */}
      {/* <StatsCards/> */}
      <ConnectedSection />
      <Cultural_Infusion_Programs />
      <Cultural />
      <CulturalHolidayPackages />
      <WhoCultural />

      <CTASection
        title="Begin Your Global Education Story"
        desc=""
        buttonText="Start Your Journey Today."
      />
      {/* <BlogSection />
      <LangmaSection /> */}
      <FAQ />
    </>
  );
};

export default CulturalHolidays;
