import React from "react";
import { FiChevronDown } from "react-icons/fi";

const ContactForm = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - SINGLE BIG IMAGE */}
        <div className="flex justify-center">
          <img
            src="/langma/images/young-happy-businesswoman-working-desktop-pc-communicating-mobile-phone-office 1.png"
            alt="Contact Visual"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative rounded-[40px] shadow-sm overflow-hidden p-8 max-w-lg mx-auto lg:mx-0">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0">
            <img
              src="/langma/images/Group 4568.png"
              alt="background"
              className="w-full h-full "
            />
          </div>

          {/* FORM CONTENT */}
          <div className="relative z-10">
            <h2 className="text-[28px] font-semibold text-center text-[#296166]">
              Let’s Get Connected
            </h2>

            <p className="text-center text-sm text-[#212529] mb-6">
              We’re Here to Help You Better
            </p>

            <form className="space-y-3">
              {/* NAME */}
              <div className="relative">
                <img
                  src="/langma/images/user.png"
                  alt="user"
                  className="absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4"
                />
                <input
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 pl-10
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Enter Your Name"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <img
                  src="/langma/images/call.png"
                  alt="phone"
                  className="absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4"
                />
                <input
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 pl-10
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Enter Your Contact Number"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <img
                  src="/langma/images/mail.png"
                  alt="email"
                  className="absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4"
                />
                <input
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 pl-10
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* SERVICE SELECT */}
              <div className="relative">
                <img
                  src="/langma/images/service.png"
                  alt="services"
                  className="absolute left-3 top-1/3 -translate-y-1/2 w-4 h-4"
                />
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0B6B6B] text-base pointer-events-none" />
                <select
                  className="
                    w-full border border-gray-200 rounded-xl
                    px-3 py-2 pl-10 pr-10
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
                  className="absolute left-3 top-3 w-4 h-4"
                />
                <textarea
                  rows="3"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2 pl-10
                 bg-white focus:outline-none focus:ring-2 focus:ring-[#27C4A8]"
                  placeholder="Describe Your Requirement"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                className="w-full mt-4 bg-gradient-to-r from-[#8ED1C7] to-[#0B6B6B]
               text-white py-2.5 rounded-xl font-semibold shadow-md
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

export default ContactForm;
