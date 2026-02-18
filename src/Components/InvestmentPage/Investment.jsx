import React from "react";
import ContactForm from "../../Pages/HomePages/ContactForm";
import StatsCards from "../../Pages/HomePages/StatsCards";
import PRByInvestment from "./PRByInvestment";
import WhyChoosePR from "./WhyChoosePR";
import WhoCanApply from "./WhoCanApply";
import PRInvestmentServices from "./PRInvestmentServices";
import BlogSection from "../../Pages/HomePages/BlogSection";
import LangmaSection from "../../Pages/HomePages/LangmaSection";
import FAQ from "../../Pages/HomePages/FAQ";
import CTASection from "../Common/CTASection";
import ConnectedSection from "../../Pages/HomePages/ConnectedSection";

const Investment = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#F7FAFC]">
        <div className="w-full grid grid-cols-1 min-h-[500px]">
          <div
            className="relative w-full "
            style={{
              backgroundImage: "url('/langma/images/Group 4544 copy.png",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-24 ml-20">
              <button className="inline-flex items-center gap-2 bg-[#006064] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#17a398] transition shadow-lg">
                Let’s Connect →
              </button>
            </div>
          </div>
        </div>
      </section>
      <ConnectedSection />
      <PRByInvestment />
      <WhyChoosePR />
      <PRInvestmentServices />
      <WhoCanApply />
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

export default Investment;
