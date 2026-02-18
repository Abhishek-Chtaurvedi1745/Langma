import React from "react";

const StatsCards = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* IMPORTANT CHANGE: items-end */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {/* 50 LANGUAGES – TALLEST CARD */}
          <div className="bg-[#006064] text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between h-[321px]w-[254px]">
            <div>
              <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center">
                <img src="/langma/images/Mask group.png" alt="Mask group.png" />
              </div>

              <h2 className="text-3xl font-bold">50</h2>
              <p className="uppercase tracking-wide text-sm mt-1">Languages</p>

              <p className="text-sm mt-4 leading-relaxed">
                Master a new language. We offer certified training across four
                continents.
              </p>
            </div>

            <div className="h-36 rounded-xl flex items-center justify-center text-xl">
              <img
                src="/langma/images/learning-foreign-languages 1.png"
                alt="learning-foreign-languages 1.png"
                className="w-full h-full object-cover rounded-xl mt-12"
              />
            </div>
          </div>

          {/* 300+ TRAINERS – SHORTEST */}
          <div className="bg-[#80CBC4] text-[#004D40] rounded-2xl p-6 shadow-lg h-[186px] w-[254px]">
            <h2 className="text-3xl font-bold">300+</h2>
            <p className="uppercase tracking-wide text-sm mt-1">Trainers</p>

            <p className="text-sm mt-4 leading-relaxed">
              Learn from experienced certified trainers who are experts in
              fluency and culture.
            </p>
          </div>

          {/* 50K+ JOBS – MEDIUM */}
          <div className="bg-[#E0F7FA] text-[#004D40] rounded-2xl p-6 shadow-lg h-[225px] w-[254px]">
            <h2 className="text-3xl font-bold">50k+</h2>
            <p className="uppercase tracking-wide text-sm mt-1">Jobs</p>

            <p className="text-sm mt-4 leading-relaxed">
              Students empowered globally, achieving their educational and
              professional aspirations with Langma.
            </p>
          </div>

          {/* 100K+ STUDENTS – SECOND TALL */}
          <div className="bg-[#80CBC4] text-[#004D40] rounded-2xl p-6 shadow-lg h-[270px] w-[254px]">
            <h2 className="text-3xl font-bold">100k+</h2>
            <p className="uppercase tracking-wide text-sm mt-1">
              Students Taught
            </p>

            <p className="text-sm mt-4 leading-relaxed">
              Successful career placements worldwide, matching talent with top
              international companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
