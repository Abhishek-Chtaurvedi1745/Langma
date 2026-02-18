import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const tabs = ["Arabic", "German", "Russian", "Balkan"];
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const courses = [
  {
    id: 1,
    tag: "Arabic",
    title: "Arabic Language",
    desc: "Beauty of Expression",
    image: "/langma/images/arabic.jpg",
    link: "/arabic",
  },
  {
    id: 2,
    tag: "German",
    title: "German Language",
    desc: "Language of power and clarity",
    image: "/langma/images/Link (1).png",
    link: "/german",
  },
  {
    id: 3,
    tag: "Russian",
    title: "Russian Language",
    desc: "Captures Powerful Emotions",
    image: "/langma/images/Link.png",
    link: "/russian",
  },
   {
    id: 4,
    tag: "Russian",
    title: "Russian Language",
    desc: "Captures Powerful Emotions",
    image: "/langma/images/Link.png",
    link: "/russian",
  },
  
];


const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState("Arabic");
  const sliderRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const scrollWidth = sliderRef.current.scrollWidth;
        const clientWidth = sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft + clientWidth >= scrollWidth) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section
      className="w-full py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/langma/images/Background.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/langma/images/dot.png" alt="dot" className="w-4 h-4" />
              <p className="text-sm font-semibold text-[#2FC7A1] uppercase">
                Top Popular Course
              </p>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Speak a <span className="text-[#4FA3D1]">language </span>{" "}
              fearlessly
            </h2>

            {/* Tabs */}
            <div className="flex gap-8 mt-6 text-gray-500 font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-1 transition cursor-pointer ${
                    activeTab === tab
                      ? "text-blue-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-500"
                      : "hover:text-blue-500 cursor-pointer"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="mt-6 lg:mt-0 bg-[#006064] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow hover:bg-[#004d4d] transition">
            Browse Our Courses
            <span className="bg-[#80CBC4] text-[#ffffff] w-7 h-7 rounded-full flex items-center justify-center">
              →
            </span>
          </button>
        </div>

        {/* DESKTOP GRID */}
      <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1, // sm
    },
    768: {
      slidesPerView: 2, // md
    },
    1024: {
      slidesPerView: 3, // lg
    },
  }}
  className="mySwiper"
>
  {courses.map((course) => (
    <SwiperSlide key={course.id}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 h-full">
        <div className="relative h-[190px] rounded-xl overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-[#4FA3D1] text-white text-xs px-3 py-1 rounded-md">
            {course.tag}
          </span>
        </div>

        <div className="flex items-center gap-1 text-yellow-400 text-sm mt-4">
          ★★★★★ <span className="text-gray-500 ml-2">(4.7)</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mt-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">{course.desc}</p>

        <Link
          to={course.link}
          className="inline-block mt-4 bg-[#FAFF00] px-4 py-2 rounded-full text-sm font-semibold cursor-pointer hover:bg-yellow-300 transition"
        >
          Enroll Now →
        </Link>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        {/* MOBILE SLIDER */}
        <div className="relative lg:hidden">
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center z-10"
          >
            &#10094;
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 text-white rounded-full flex items-center justify-center z-10"
          >
            &#10095;
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="min-w-[260px] flex-shrink-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
              >
                <div className="relative h-[190px] rounded-xl overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#4FA3D1] text-white text-xs px-3 py-1 rounded-md">
                    {course.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 text-sm mt-4">
                  ★★★★★ <span className="text-gray-500 ml-2">(4.7)</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{course.desc}</p>
                <button className="mt-4 bg-[#FAFF00] border-1 transition px-4 py-2 rounded-full text-sm font-semibold w-full cursor-pointer">
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
