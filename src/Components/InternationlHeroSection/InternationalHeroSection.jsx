import React from "react";
import StatsCards from "../../Pages/HomePages/StatsCards";
import LanguageProgramSection from "./LanguageProgramSection";
import WhyChooseSection from "./WhyChooseSection";
import PopularCourses from "../../Pages/HomePages/PopularCourses";
import HowWeHelpYouSucceed from "./HowWeHelpYouSucceed";
import CTASection from "../Common/CTASection";
import BlogSection from "../../Pages/HomePages/BlogSection";
import LangmaSection from "../../Pages/HomePages/LangmaSection";
import FAQ from "../../Pages/HomePages/FAQ";
import ContactForm from "../../Pages/HomePages/ContactForm";
import ConnectedSection from "../../Pages/HomePages/ConnectedSection";

const InternationalHeroSection = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F7FAFC]">
        {/* FULL WIDTH HERO */}
        <div className="w-full grid grid-cols-1 min-h-[500px]">
          {/* FULL WIDTH BACKGROUND */}
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/langma/images/Group 4459.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* BUTTON POSITION WRAPPER */}
            <div className="absolute bottom-15 ml-20">
              <button className="inline-flex items-center gap-2 bg-[#006064] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#17a398] transition shadow-lg">
                Let’s Connect →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <StatsCards /> */}
      <ConnectedSection />
      <LanguageProgramSection />
      <WhyChooseSection />
      <PopularCourses />
      <HowWeHelpYouSucceed />
      <CTASection
        title="Begin Your Global Education Story"
        desc=""
        buttonText="Start Your Journey Today."
      />
      {/* <BlogSection />
      <LangmaSection /> */}
      <FAQ />
      {/* <ContactForm /> */}
    </>
  );
};

export default InternationalHeroSection;
