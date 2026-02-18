// HeroSection.jsx
import React from "react";
import StatsCards from "../../../Pages/HomePages/StatsCards";
import StudyAbroadSection from "./StudyAbroadSection";
import SupportBoxes from "./SupportBoxes";
import StudyDestinations from "../../../Pages/HomePages/StudyDestinations";
import CTASection from "../CTASection";
import BlogSection from "../../../Pages/HomePages/BlogSection";
import LangmaSection from "../../../Pages/HomePages/LangmaSection";
import FAQ from "../../../Pages/HomePages/FAQ";
import ContactForm from "../../../Pages/HomePages/ContactForm";
import ConnectedSection from "../../../Pages/HomePages/ConnectedSection";

const StudyAbrotHeroSection = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F7FAFC]">
        {/* FULL WIDTH HERO */}
        <div className="w-full grid grid-cols-1 h-[150px] md:h-[300px] lg:h-[600px]">
          <div
            className="relative w-full"
            style={{
              backgroundImage: "url('/langma/images/Background (4).png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute -bottom-0 md:bottom-8 ml-20">
              <button className="inline-flex items-center gap-2 bg-[#006064] text-white px-3 py-1 md:px-7 md:py-3 rounded-full text-sm font-medium hover:bg-[#17a398] transition shadow-lg">
                Let’s Connect →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <StatsCards /> */}
      <ConnectedSection />
      <StudyAbroadSection />
      <SupportBoxes />
      <StudyDestinations />
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

export default StudyAbrotHeroSection;
