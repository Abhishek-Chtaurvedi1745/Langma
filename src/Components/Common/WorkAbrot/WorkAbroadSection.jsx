import React from "react";

const WorkAbroadSection = () => {
  return (
    <section className="w-full bg-[#F4FEFF] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-[26px] md:text-[32px] font-semibold text-[#296166] mb-2">
              Work Abroad with Langma International
            </h3>

            <h2 className="text-[22px] md:text-[25px] font-bold text-[#0E2A46] mb-4">
              Your Dream Job Overseas Starts With the Right Guidance
            </h2>

            <p className="text-[#0E2A46] text-[16px] md:text-[20px] mb-4">
              Many people want to work abroad but don’t know where to start.
              Confusing visa rules, fake job offers, rejected applications —
              these fears stop thousands from taking the first step.
            </p>

            <p className="text-gray-600 text-sm md:text-base">
              At Langma International, we make your overseas job journey simple,
              honest, and clear. From finding the right job to helping you apply
              for your work visa, we stay with you at every stage.
            </p>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="lg:w-1/2 relative flex justify-center items-start mt-10 lg:mt-0">
            {/* Badge */}
            <div className="absolute -top-6 right-1/2 translate-x-1/2 lg:right-10 lg:translate-x-0 bg-white shadow-md rounded-full px-4 py-2 flex items-center gap-2 z-20">
              <span className="text-xs text-gray-500">
                Placed Professionals
              </span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-300 border"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300 border"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300 border"></div>
              </div>
            </div>

            {/* MAIN IMAGE */}
            <div className="w-[220px] h-[320px] md:w-[260px] md:h-[360px] rounded-[40px] shadow-lg overflow-hidden">
              <img
                src="/langma/images/agency 1.png"
                alt="Agency"
                className="w-full h-full object-cover"
              />
            </div>

            {/* SIDE IMAGE */}
            <div
              className="
              absolute 
              right-1/2 translate-x-1/2 bottom-[-40px]
              md:right-[-40px] md:translate-x-0 md:bottom-[-30px]
              lg:right-[-90px]
              w-[180px] h-[250px] md:w-[220px] md:h-[300px]
              rounded-[40px] shadow-lg overflow-hidden
            "
            >
              <img
                src="/langma/images/young-pleased-pretty-caucasian-schoolgirl-with-headphones-neck-wearing-glasses-back-bag-holds-plane-globe-looking-up-pink-with-copy-space 1.png"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAbroadSection;
