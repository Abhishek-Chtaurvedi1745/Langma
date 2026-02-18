import React from "react";

const OurPromise = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE AREA */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Image container - BIGGER + LEFT TOUCH */}
            <div
              className="
              relative 
              w-[340px] h-[380px]
              md:w-[420px] md:h-[460px]
              lg:w-[480px] lg:h-[520px]
              -ml-4 lg:-ml-20
            "
            >
              <img
                src="/langma/images/Group 4361.png"
                alt="Our Promise"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl lg:pl-6 text-[#296166]">
            <h3 className="text-[28px] md:text-[32px] font-semibold mb-1">
              Our Promise
            </h3>

            <h2 className="text-[22px] md:text-[25px] font-bold mb-4 text-[#0E2A46]">
              We believe trust is more important than business.
            </h2>

            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#0E2A46]">
              At Langma International, we keep everything transparent — from
              your chances of selection to the real process timeline. If
              something is not possible, we tell you honestly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
