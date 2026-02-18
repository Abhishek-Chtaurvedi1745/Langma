import React from "react";
import { FiChevronDown } from "react-icons/fi";

const ConnectedSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">

          {/* CARD 1 */}
          <div className="bg-[#006064] text-white rounded-2xl p-6 shadow-lg 
            w-full max-w-[254px] flex flex-col justify-between">
            <div>
              <img
                src="/langma/images/Mask group.png"
                alt="icon"
                className="w-10 h-10 mb-4"
              />

              <h2 className="text-3xl font-bold">50</h2>
              <p className="uppercase tracking-wide text-sm mt-1">Languages</p>

              <p className="text-sm mt-4 leading-relaxed">
                Master a new language across four continents.
              </p>
            </div>

            <img
              src="/langma/images/learning-foreign-languages 1.png"
              alt="learning"
              className="mt-4 rounded-xl"
            />
          </div>

          {/* CARD 2 */}
          <div className="bg-[#80CBC4] text-[#004D40] rounded-2xl p-6 shadow-lg
            w-full max-w-[254px]">
            <h2 className="text-3xl font-bold">100k+</h2>
            <p className="uppercase tracking-wide text-sm mt-1">
              Students Taught
            </p>
            <p className="text-sm mt-4 leading-relaxed">
              Successful career placements worldwide.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#80CBC4] text-[#004D40] rounded-2xl p-6 shadow-lg
            w-full max-w-[254px]">
            <h2 className="text-3xl font-bold">300+</h2>
            <p className="uppercase tracking-wide text-sm mt-1">Trainers</p>
            <p className="text-sm mt-4 leading-relaxed">
              Certified experts in fluency and culture.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#E0F7FA] text-[#004D40] rounded-2xl p-6 shadow-lg
            w-full max-w-[254px]">
            <h2 className="text-3xl font-bold">50k+</h2>
            <p className="uppercase tracking-wide text-sm mt-1">Jobs</p>
            <p className="text-sm mt-4 leading-relaxed">
              Students empowered globally.
            </p>
          </div>
        </div>

    
        <div className="relative rounded-[40px]  shadow-sm overflow-hidden p-10 max-w-xl">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 ">
            <img
              src="/langma/images/Group 4568.png"
              alt="background"
              className="w-full h-full  "
            />
          </div>

          {/* FORM CONTENT */}
          <div className="relative z-10 ">
            <h2 className="text-[32px] font-semibold text-center text-[#296166]">
              Let’s Get Connected
            </h2>

            <p className="text-center text-sm text-[#212529] mb-8">
              We’re Here to Help You Better
            </p>

            <form className="space-y-4">
              {/* NAME */}
              <div className="relative">
                <img
                  src="/langma/images/user.png" // ← yahan apna icon image
                  alt="user"
                  className="absolute left-4 top-1/3 -translate-y-1/2 w-5 h-5"
                />
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Enter Your Name"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <img
                  src="/langma/images/call.png"
                  alt="phone"
                  className="absolute left-4 top-1/3 -translate-y-1/2 w-5 h-5"
                />
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Enter Your Contact Number"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <img
                  src="/langma/images/mail.png"
                  alt="email"
                  className="absolute left-4 top-1/3 -translate-y-1/2 w-5 h-5"
                />
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="relative">
                {/* LEFT ICON */}
                <img
                  src="/langma/images/service.png"
                  alt="services"
                  className="absolute left-4 top-1/3 -translate-y-1/2 w-5 h-5"
                />

                {/* RIGHT DROPDOWN ARROW */}
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-lg pointer-events-none" />

                {/* SELECT */}
                <select
                  className="
      w-full border border-gray-200 rounded-xl
      px-4 py-3 pl-12 pr-12
      bg-white text-gray-500
      appearance-none
      focus:outline-none focus:ring-2 focus:ring-[#27C4A8]
       cursor-pointer
    "
                >
                  <option>Services</option>
                  <option>Visa Assistance</option>
                  <option>Language Training</option>
                  <option>Job Placement</option>
                </select>
              </div>

              {/* TEXTAREA */}
              <div className="relative">
                <img
                  src="/langma/images/describ.png"
                  alt="pen"
                  className="absolute left-4 top-4 w-5 h-5"
                />
                <textarea
                  rows="3"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Describe Your Requirement"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                className="w-full mt-6 bg-gradient-to-r from-[#8ED1C7] to-[#0B6B6B]
               text-white py-3 rounded-xl font-semibold shadow-md
               hover:opacity-95 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedSection;
