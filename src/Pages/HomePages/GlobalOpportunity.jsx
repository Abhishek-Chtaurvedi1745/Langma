import React, { useEffect, useState } from "react";

const slides = [
  { id: 1, image: "/langma/images/Langusegirl.png" },
  { id: 2, image: "/langma/images/Langusegirl.png" },
];

const GlobalOpportunity = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    // ✅ FULL WIDTH BACKGROUND
    <section className="w-full py-8 bg-[#F2FEFF]">
      {/* ✅ CENTERED CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[22px] sm:text-3xl xl:text-4xl font-semibold text-gray-900">
            Your Global <span className="text-[#4FA3D1]">Opportunity</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-2xl mx-auto">
            We have simplified the path from language proficiency to global
            employment and education.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            items-center
            w-full
          "
        >
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              key={current}
              src={slides[current].image}
              alt="Language"
              className="
                w-full
                max-w-[280px]
                sm:max-w-[360px]
                lg:max-w-[420px]
                xl:max-w-[480px]
                rounded-3xl
                object-cover
                transition-opacity duration-700
              "
            />
          </div>

          {/* CONTENT */}
          <div className="text-center lg:text-left">
            <p
              className="
                text-[#0F2A4F]
                text-sm sm:text-base xl:text-lg
                leading-relaxed
                max-w-xl
                mx-auto lg:mx-0
              "
            >
              Certified fluency that prepares professionals for global careers,
              international workplaces, confident communication, cultural
              adaptability, career growth, leadership readiness, worldwide
              mobility and long-term success across industries.
            </p>

            {/* LANGUAGE CARD */}
            <div
              className="
                mt-8
                bg-white
                rounded-2xl
                p-5 sm:p-6
                shadow-sm
                inline-block
                mx-auto lg:mx-0
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg overflow-hidden">
                  <img
                    src="/langma/images/flag.png"
                    alt="Japan Flag"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1E5C5A] text-base sm:text-lg">
                    Learn Japanese (日本語を学ぶ)
                  </h3>

                  <button
                    className="
                      mt-3
                      bg-[#1E5C5A]
                      text-white
                      text-sm
                      px-5 py-2
                      rounded-full
                      hover:opacity-90
                      transition
                    "
                  >
                    More Details →
                  </button>
                </div>
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center lg:justify-start gap-2 mt-6">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === current ? "bg-gray-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOpportunity;
