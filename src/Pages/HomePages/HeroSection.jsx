import React, { useState } from "react";
import { Search, Play } from "lucide-react";
import StatsCards from "./StatsCards";
import GlobalOpportunity from "./GlobalOpportunity";
import GlobalPlacement from "./GlobalPlacement";
import StudyAbroad from "./StudyAbroad";
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";
import PopularCourses from "./PopularCourses";
import StudyDestinations from "./StudyDestinations";
import BlogSection from "./BlogSection";
import LangmaSection from "./LangmaSection";
import FAQ from "./FAQ";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  const videoId = "wToP5K9CNF8";

  const overlayImages = [
    "/langma/images/overlay1.png",
    "/langma/images/overlay2.png",
    "/langma/images/overlay3.png",
  ];

  const randomImage =
    overlayImages[Math.floor(Math.random() * overlayImages.length)];

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full bg-white py-8  relative">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center relative">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left z-10">
            <span className="inline-block bg-[#E6F8F3] text-[#2FC7A1] px-3 py-1 rounded-sm text-[11px]">
              Learn & Get Certificates
            </span>

            <h1 className="mt-4 font-bold text-[#15224C] leading-tight text-[28px] sm:text-[36px] lg:text-[48px]">
              Your Global{" "}
              <span className="relative inline-block">
                <span className="bg-yellow-300 px-2 rounded-md">Journey</span>
                <img
                  src="/langma/images/Journyicon.png"
                  alt=""
                  className="absolute -top-6 -right-6 w-8 sm:w-10 lg:w-12 hidden sm:block"
                />
              </span>
              <br />
              Of Career <span className="text-[#4FA3D1]">Culture</span>
              <br />
              <span className="text-[#4FA3D1]">Wellness & Beyond</span>
            </h1>

            {/* SEARCH BAR */}
            <div className="mt-6 mx-auto lg:mx-0 flex items-center bg-white shadow-md rounded-full w-full max-w-md xl:max-w-lg px-4 py-2">
              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="text-gray-600 text-sm flex items-center gap-1"
                >
                  Categories ▾
                </button>
                {open && (
                  <div className="absolute mt-2 bg-white shadow-lg rounded-lg w-44 py-2 z-50">
                    {[
                      "Language Courses",
                      "Study Abroad",
                      "Work Abroad",
                      "Global Placement",
                    ].map((item) => (
                      <p
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-5 w-px bg-gray-300 mx-3"></div>

              <input
                type="text"
                placeholder="Search For Course..."
                className="flex-1 outline-none text-[13px] sm:text-sm"
              />
              <button className="bg-[#2FC7A1] p-2 rounded-full">
                <Search size={16} color="white" />
              </button>
            </div>

            {/* CTA BUTTON */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
  <button className="bg-[#0A6B64] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-md cursor-pointer">
    Let's Connect →
  </button>
  <button className="bg-[#4FA3D1] text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-md cursor-pointer">
    Book Instant Online Counselling
  </button>
</div>

          </div>

          {/* RIGHT VIDEO */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative border-2 border-[#333931] rounded-[26px] p-2">

              {/* VIDEO CONTAINER */}
              <div className="relative w-[320px] sm:w-[380px] lg:w-[460px] h-[300px] aspect-video rounded-2xl overflow-hidden bg-black">
                
                {/* RANDOM OVERLAY IMAGE */}
                {/* <img
                  src={randomImage}
                  alt="Overlay"
                  className="absolute top-3 left-3 w-14 z-20 pointer-events-none"
                /> */}

                {!playVideo ? (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div
                      onClick={() => setPlayVideo(true)}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <div className="bg-white p-4 rounded-full shadow-lg">
                        <Play size={28} className="text-[#2FC7A1]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )}
              </div>

              {/* STUDENT BADGE */}
              <div className="absolute -top-10 left-0 bg-white shadow-md px-3 py-4 rounded-[30px] flex items-center gap-2 text-xs sm:text-sm lg:text-base">
                <span className="font-semibold text-[#704FE6] text-[18px]">2k+</span>
                <span className="text-[#17254E] text-[18px]">Student</span>
                <div className="flex -space-x-2">
  <img
    src="https://i.pravatar.cc/40?img=1"
    alt="Avatar 1"
    className="w-6 h-6 rounded-full object-cover border-2 border-white"
  />
  <img
    src="https://i.pravatar.cc/40?img=2"
    alt="Avatar 2"
    className="w-6 h-6 rounded-full object-cover border-2 border-white"
  />
  <img
    src="https://i.pravatar.cc/40?img=3"
    alt="Avatar 3"
    className="w-6 h-6 rounded-full object-cover border-2 border-white"
  />
</div>

              </div>

              {/* SUCCESS COURSES BADGE */}
              <div className="absolute -bottom-4 -right-5 bg-white shadow-md px-3 py-1.5 rounded-[30px] text-center text-xs sm:text-sm">
                <span className="text-[#2FC7A1] font-bold bloc text-[19px]">5.8k</span>
                <span className="text-[#333931] block">Success Courses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF SECTIONS */}
      <StatsCards />
      <GlobalOpportunity />
      <GlobalPlacement />
      <StudyAbroad />
      <ExperienceSection />
      <AboutSection />
      <PopularCourses />
      <StudyDestinations />
      <BlogSection />
      <LangmaSection />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default HeroSection;
