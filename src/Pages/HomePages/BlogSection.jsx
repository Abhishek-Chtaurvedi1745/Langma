import React, { useRef } from "react";
import {
  CalendarDays,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "21 April 2023",
    comments: 6,
    image: "/langma/images/Container (1).png",
  },
  {
    id: 2,
    title: "velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "21 April 2023",
    comments: 6,
    image: "/langma/images/Container (1).png",
  },
  {
    id: 3,
    title: "velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "21 April 2023",
    comments: 6,
    image: "/langma/images/Container (1).png",
  },
];

const BlogSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-[#F3FFFE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm text-[#2FC7A1] font-medium mb-2">
              ◇ ALL BLOG POST
            </p>
            <h2 className="text-3xl font-bold text-[#0F172A]">
              Most Popular Post.
            </h2>
          </div>

          <button className="hidden sm:flex bg-[#2FC7A1] text-white px-6 py-3 rounded-full items-center gap-2 hover:bg-emerald-500 transition">
            All Blog Post
            <ArrowRight size={18} />
          </button>
        </div>

        {/* MOBILE SLIDER (1 CARD AT A TIME) */}
        <div className="relative md:hidden">
          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute -left-2 top-1/2 -translate-y-1/2
                       w-9 h-9 bg-black/60 text-white rounded-full
                       flex items-center justify-center z-10"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute -right-2 top-1/2 -translate-y-1/2
                       w-9 h-9 bg-black/60 text-white rounded-full
                       flex items-center justify-center z-10"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 w-full snap-center bg-gradient-to-b from-white to-[#F7F7F7]
                           rounded-2xl shadow-lg p-5 mx-2"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                />

                <div className="flex items-center gap-4 text-sm text-[#FC6441] mb-3">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />({blog.comments})
                  </span>
                </div>

                <h3 className="font-semibold text-[#0F2A44] mb-4">
                  {blog.title}
                </h3>

                <button className="bg-[#2FC7A1] text-white px-4 py-2 rounded-full flex items-center gap-2">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gradient-to-b from-white to-[#F7F7F7]
                         rounded-2xl shadow-lg hover:shadow-2xl
                         transition p-5"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-xl mb-5"
              />

              <div className="flex items-center gap-5 text-sm text-[#FC6441] mb-4">
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle size={16} />
                  Comment ({blog.comments})
                </span>
              </div>

              <h3 className="text-[#0F2A44] font-semibold text-lg mb-6">
                {blog.title}
              </h3>

              <button className="bg-[#2FC7A1] text-white px-5 py-2 rounded-full flex items-center gap-2">
                Read More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
