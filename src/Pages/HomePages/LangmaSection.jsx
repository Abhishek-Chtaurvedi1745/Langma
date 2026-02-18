import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  { id: 1, image: "/langma/images/Rectangle 650.png", title: "Mr. Sanjeev Rawat", desc: "with Mr and Mrs. Wang Zhen, Minister Counsellor for the People's Republic of China, India." },
  { id: 2, image: "/langma/images/Rectangle 650 (2).png", title: "Mr. Sanjeev Rawat", desc: "and the Langma Team welcoming H.E Oleksandr Polishchuk, Ambassador of Ukraine to India." },
  { id: 3, image: "/langma/images/Rectangle 650 (1).png", title: "Mr. Sanjeev Rawat", desc: "with the Indian delegation at the World Chinese Language Conference." },
  { id: 4, image: "/langma/images/Rectangle 650.png", title: "Mr. Sanjeev Rawat", desc: "with Mr and Mrs. Wang Zhen, Minister Counsellor for the People's Republic of China, India." },
  { id: 5, image: "/langma/images/Rectangle 650 (2).png", title: "Mr. Sanjeev Rawat", desc: "and the Langma Team welcoming H.E Oleksandr Polishchuk, Ambassador of Ukraine to India." },
];

const LangmaSection = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative px-4">
        <div className="pl-8">

        <h2 className="text-[34px] text-center  font-bold mb-2">
          Langma Unites <span className="text-[#296166]">the World</span>
        </h2>
        <p className="text-[18px] text-center text-gray-700 mb-6">
          Connecting minds, cultures, and opportunities worldwide.
        </p>
        </div>

        {/* Slider with left image behind */}
        <div className="relative">

  {/* Left image behind slider */}
  <div className="hidden md:block absolute -bottom-16 left-0 w-2/5 lg:w-1/3 z-0 
                  overflow-hidden shadow-xl rounded-tr-[40px] rounded-br-[40px]">
    <img
      src="/langma/images/Group 4458.png"
      alt="Langma"
      className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover 
                 rounded-tr-[40px] rounded-br-[40px]"
    />
  </div>

  {/* Swiper Slider */}
  <div className="relative z-10 ml-20">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="pr-10 pb-4"
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-44 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <span className="inline-block bg-[#296166] text-white text-sm px-3 py-1 mb-3 rounded">
                {card.title}
              </span>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

</div>

      </div>
    </section>
  );
};

export default LangmaSection;
