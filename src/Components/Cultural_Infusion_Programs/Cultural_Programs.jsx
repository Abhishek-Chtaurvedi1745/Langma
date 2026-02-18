import React from "react";
import ContactForm from "../../Pages/HomePages/ContactForm";
import StatsCards from "../../Pages/HomePages/StatsCards";
// import PRByInvestment from "./PRByInvestment";
// import WhyChoosePR from "./WhyChoosePR";
// import PRInvestmentServices from "./PRInvestmentServices";
import BlogSection from "../../Pages/HomePages/BlogSection";
import LangmaSection from "../../Pages/HomePages/LangmaSection";
import FAQ from "../../Pages/HomePages/FAQ";
import CTASection from "../Common/CTASection";
import Cultural_Infusion_Programs from "./Cultural_Infusion_Programs";
import CulturalInfusion from "./CulturalInfusion";
import Program_Highlights from "./Program_Highlights";
import WhoProgramsFor from "./WhoProgramsFor";
import ConnectedSection from "../../Pages/HomePages/ConnectedSection";

const Cultural_Programs = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F7FAFC]">
        {/* FULL WIDTH HERO */}
        <div className="w-full grid grid-cols-1 min-h-[500px]">
          {/* FULL WIDTH BACKGROUND */}
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/langma/images/Group1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* BUTTON POSITION WRAPPER */}
            <div className="absolute bottom-24 ml-20">
              <button className="inline-flex items-center gap-2 bg-[#006064] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#17a398] transition shadow-lg">
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

      <CulturalInfusion />
      <Program_Highlights />
      <WhoProgramsFor />

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

export default Cultural_Programs;
