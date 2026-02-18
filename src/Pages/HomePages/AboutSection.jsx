import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ================= LEFT : IMAGE LAYOUT ================= */}
        <div className="flex justify-center lg:justify-start gap-6">
          {/* Main Image */}
          <div className="w-[200px] h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/langma/images/onegirl.png"
              alt="Student"
              className="w-full h-full object-fit"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Experience Card */}
            <div className="w-[170px] h-[170px] rounded-xl flex items-center justify-center bg-white">
              <img
                src="/langma/images/yearexperince.png"
                alt="Experience"
                className="w-full h-full"
              />
            </div>

            {/* Second Image */}
            <div className="w-[220px] h-[220px] rounded-2xl overflow-hidden ">
              <img
                src="/langma/images/twogirl.png"
                alt="Students"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= RIGHT : CONTENT ================= */}
        <div>
         
          <div className="flex items-center gap-2 mb-3">
              <img src="/langma/images/dot.png" alt="dot" className="w-4 h-4" />
              <p className="text-sm font-semibold text-[#2FC7A1] uppercase">
                 About Us
              </p>
            </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-3">
            Shape Tomorrow <br />
            Connect <span className="text-[#4FA3D1]">Beyond Borders</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            At Langma, we offer comprehensive insight into language and culture
            with tailored programs for all learners. Our expert trainers and
            cultural immersion workshops help students achieve international
            exam certifications.
          </p>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            <span className="font-semibold text-gray-900">Since 2007,</span>{" "}
            we’ve delivered top foreign language training and linguist services,
            offering 50+ international and regional language courses for
            corporates, individuals, governments, NGOs, & more.
            <span className="text-[#3BA4D7] font-medium cursor-pointer ml-1 hover:underline">
              Read More...
            </span>
          </p>

          {/* CTA */}
         <button className="mt-8 inline-flex items-center gap-3 bg-[#006064] hover:bg-[#004d4d] transition text-white px-7 py-0.5 rounded-full text-sm font-medium shadow-md">
  Admission Open
  <span className="bg-[#80CBC4] text-[#ffff] text-[15px] -mr-7 rounded-full flex items-center justify-center px-4 py-3">
    →
  </span>
</button>

        </div>
      </div>

      {/* ================= CLIENT LOGO ================= */}
      {/* ================= CLIENT LOGO FULL WIDTH ================= */}
      <div className="w-full mt-16">
        <img
          src="/langma/images/Ourclient.png"
          alt="Our Clients"
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
};

export default AboutSection;
