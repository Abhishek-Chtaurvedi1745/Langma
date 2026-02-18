import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  { id: 1, title: "Asia", image: "/langma/images/asia.png", path: "/asia" },
  { id: 2, title: "Europe", image: "/langma/images/eroup.png", path: "/europe" },
  { id: 3, title: "Australia", image: "/langma/images/astralia.png", path: "/aust" },
  { id: 4, title: "UK", image: "/langma/images/uk.png", path: "/uk" },
  { id: 5, title: "USA", image: "/langma/images/uk.png", path: "/america" },
  { id: 6, title: "Canada", image: "/langma/images/uk.png", path: "/canada" },
];

const Study = () => {
  return (
    <section className="w-full py-14 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-full mx-auto">
        <h2 className="text-center text-[34px] font-bold text-gray-900 mb-12 px-4">
          Study in Top Higher{" "}
          <span className="text-[#4FA3D1]">Education Destinations</span>
        </h2>

        <div className="relative flex flex-col xl:flex-row items-center">
          
          <div className="hidden xl:block w-[340px] h-[620px] rounded-tr-[10px] rounded-br-[10px] overflow-hidden shadow-xl flex-shrink-0">
            <img
              src="/langma/images/Group 4467.png"
              alt="Study Abroad"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full ml-0 xl:-ml-16 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={14}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="px-4"
            >
              {destinations.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={item.path}>
                    <div className="group w-full h-[420px] rounded-[45px] relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
                      
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />

                      <div className="absolute bottom-10 left-0 right-0 text-center px-4">
                        <p className="text-white text-lg mb-3 tracking-wide">
                          Study in
                        </p>
                        <button className="bg-white/90 backdrop-blur-md text-[#006064] font-semibold px-10 py-2.5 rounded-full shadow-lg transition hover:bg-white">
                          {item.title}
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center items-center gap-6 mt-6">
              <button className="custom-prev w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[#4FA3D1] text-[#4FA3D1] hover:bg-[#4FA3D1] hover:text-white transition-all duration-300 shadow-lg cursor-pointer z-10">
                <ChevronLeft size={28} />
              </button>

              <button className="custom-next w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[#4FA3D1] text-[#4FA3D1] hover:bg-[#4FA3D1] hover:text-white transition-all duration-300 shadow-lg cursor-pointer z-10">
                <ChevronRight size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
