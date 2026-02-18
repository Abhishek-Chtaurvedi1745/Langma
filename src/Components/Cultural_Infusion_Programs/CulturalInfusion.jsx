import React from "react";

const features = [
  {
    title: "Experience Authentic Local Life",
    desc: "Engage closely with communities, traditions, and everyday culture.",
  },
  {
    title: "Create Meaningful Global Connections",
    desc: "Form lifelong friendships with people from diverse backgrounds.",
  },
  {
    title: "Learn Through Hands-On Activities",
    desc: "Take part in workshops, festivals, heritage walks, and immersive sessions.",
  },
  {
    title: "Discover Arts, Traditions & Cuisine",
    desc: "Explore cultural expressions through art, music, and food.",
  },
  {
    title: "Gain Personal & Global Perspective",
    desc: "Grow personally while gaining a broader understanding of the world.",
  },
];

const CulturalInfusion = () => {
  return (
    <section className="w-full bg-white py-5">
      {/* Top section - white background */}
      <div className="">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[32px] font-semibold text-teal-800">
            Why Choose Langma International's Cultural Infusion Programs?
          </h2>
          <p className="text-teal-700 mt-2 mb-12 text-[25px]">
            Our programs are thoughtfully designed to help you:
          </p>

          {/* Main container with same size boxes */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            
            {/* Left side - 2 cards stacked */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="bg-white border border-teal-800 rounded-lg shadow p-8 w-80 text-center min-h-[200px] flex flex-col justify-center hover:bg-[#80CBC4] transition-all duration-300 group cursor-pointer">
                <h3 className="text-[25px] font-semibold text-[#296166] mb-3 group-hover:text-white transition-colors duration-300">
                  {features[0].title}
                </h3>
                <p className="text-[18px] text-[#0E2A46] group-hover:text-white transition-colors duration-300">
                  {features[0].desc}
                </p>
              </div>
              <div className="bg-white border border-teal-800 rounded-lg shadow p-8 w-80 text-center min-h-[200px] flex flex-col justify-center hover:bg-[#80CBC4] transition-all duration-300 group cursor-pointer">
                <h3 className="text-[25px] font-semibold text-[#296166] mb-3 group-hover:text-white transition-colors duration-300">
                  {features[1].title}
                </h3>
                <p className="text-[18px] text-[#0E2A46] group-hover:text-white transition-colors duration-300">
                  {features[1].desc}
                </p>
              </div>
            </div>

            {/* Center - highlighted card */}
            <div className="bg-[#80CBC4] rounded-lg shadow-xl p-8 w-80 text-center min-h-[200px] flex flex-col justify-center -mt-10 cursor-pointer hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-[25px] font-bold text-white mb-3">
                Build Cross-Cultural Intelligence
              </h3>
              <p className="text-[18px] text-white">
                Develop global awareness and cultural sensitivity for a connected world.
              </p>
            </div>

            {/* Right side - 2 cards stacked */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="bg-white border border-teal-800 rounded-lg shadow p-8 w-80 text-center min-h-[200px] flex flex-col justify-center hover:bg-[#80CBC4] transition-all duration-300 group cursor-pointer">
                <h3 className="text-[25px] font-semibold text-[#296166] mb-3 group-hover:text-white transition-colors duration-300">
                  {features[2].title}
                </h3>
                <p className="text-[18px] text-[#0E2A46] group-hover:text-white transition-colors duration-300">
                  {features[2].desc}
                </p>
              </div>
              <div className="bg-white border border-teal-800 rounded-lg shadow p-8 w-80 text-center min-h-[200px] flex flex-col justify-center hover:bg-[#80CBC4] transition-all duration-300 group cursor-pointer">
                <h3 className="text-[25px] font-semibold text-[#296166] mb-3 group-hover:text-white transition-colors duration-300">
                  {features[3].title}
                </h3>
                <p className="text-[18px] text-[#0E2A46] group-hover:text-white transition-colors duration-300">
                  {features[3].desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom section - 80% background color with custom color */}
      <div className="bg-[#296166] w-full -mt-50 py-5">
        <div className="relative max-w-7xl mx-auto px-6 pt-30">
          {/* Bottom single card centered */}
          <div className="flex justify-center">
            <div className="bg-white border border-teal-800 rounded-lg shadow p-8 w-80 text-center min-h-[200px] flex flex-col justify-center hover:bg-[#80CBC4] transition-all duration-300 group cursor-pointer">
              <h3 className="text-[25px] font-semibold text-[#296166] mb-3 group-hover:text-white transition-colors duration-300">
                {features[4].title}
              </h3>
              <p className="text-[18px] text-[#0E2A46] group-hover:text-white transition-colors duration-300">
                {features[4].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalInfusion;