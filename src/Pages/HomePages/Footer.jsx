// Footer.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-gray-300 mt-10 relative bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{ backgroundImage: "url('/langma/images/pngwing.com 2.png')" }}
    >
      {/* Top contact info */}
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-500 px-6 md:px-20 ">
  {/* ADDRESS */}
  <div className="flex items-center mb-3 md:mb-0">
    <span className="flex items-center justify-center border rounded-full h-[50px] w-[50px] mr-3">
      <FaMapMarkerAlt className="text-[#80CBC4]" />
    </span>
    <span className="text-sm">
      <strong className="text-[#80CBC4]">Address:</strong> E 73, South Extension Part-1, <br />
      New Delhi - 110049, India
    </span>
  </div>

  {/* VERTICAL DIVIDER */}
  <div className="hidden md:block border-l border-gray-500 h-20 mx-4"></div>

  {/* PHONE */}
  <div className="flex items-center mb-3 md:mb-0">
    <span className="flex items-center justify-center border rounded-full h-[50px] w-[50px] mr-3">
      <FaPhone className="text-[#80CBC4]" />
    </span>
    <span className="text-sm">+91-9810117094</span>
  </div>

  {/* VERTICAL DIVIDER */}
  <div className="hidden md:block border-l border-gray-500 h-20 mx-4"></div>

  {/* EMAIL */}
  <div className="flex items-center">
    <span className="flex items-center justify-center border rounded-full h-[50px] w-[50px] mr-3">
      <FaEnvelope className="text-[#80CBC4]" />
    </span>
    <span className="text-sm">info@langmainternational.com</span>
  </div>
</div>



      {/* Middle section */}
      <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
        {/* Logo + Description */}
        <div>
          <img
            src="/langma/images/Whitelogo.png"
            alt="Langma International"
            className="w-32 mb-4"
          />
          <p className="text-sm leading-relaxed">
            At Langma we offer you a complete insight into the language and the
            culture. We provide tailored programmes which cater to the needs of
            all the learners.
          </p>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Site Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Our Expertise */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Expertise</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Languages Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Global Placement
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Study Abroad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Wellness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Cultural Holidays
              </a>
            </li>
          </ul>
        </div>

        {/* Reach Us + Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Reach Us</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#80CBC4]">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="flex space-x-3 mt-2">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaPinterestP />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-[#80CBC4]"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="bg-gray-900 bg-opacity-80 text-center py-3 text-sm text-gray-400">
        Copyrights © 2025, Langma International
      </div>
    </footer>
  );
};

export default Footer;
