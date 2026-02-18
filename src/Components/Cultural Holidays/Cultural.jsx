import React from "react";

const features = [
  {
    title: "Authentic Cultural Experiences",
    desc: "Go beyond tourist spots and explore the real heartbeat of a destination.",
    style: "border border-gray-300",
  },
  {
    title: "Community-Driven Stays",
    desc: "Experience the warmth of host families, heritage homes, or eco-lodges.",
    style: "border border-gray-300",
  },
  {
    title: "Festival & Heritage Celebrations",
    desc: "Be part of iconic cultural events, ceremonies, and traditional celebrations.",
    style: "bg-teal-700 text-white",
  },
  {
    title: "Expert-Curated Itineraries",
    desc: "Our travel experts design every program with cultural depth and comfort in mind.",
    style: "bg-teal-700 text-white",
  },
  {
    title: "Local Cuisine & Culinary Trails",
    desc: "Savor traditional food through guided tastings and cooking experiences.",
    style: "bg-teal-700 text-white",
  },
  {
    title: "Meaningful Local Connections",
    desc: "Build lasting relationships with local communities and fellow travelers.",
    style: "bg-teal-700 text-white",
  },
];

const Cultural = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 ">
      <h2 className="text-[32px] font-bold mb-8 text-[#296166]">
        Why Choose Langma International for <br/>
        Cultural Holidays?
      </h2>
      
      <div className="relative ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {/* Row 1 */}
          <div className="p-8 rounded-tl-[100px] rounded-br-[100px] shadow-lg border-[4px] border-[#296166] min-h-[220px] flex flex-col justify-center">
            <h3 className="font-bold text-[25px] text-[#296166] mb-4">{features[0].title}</h3>
            <p className="text-gray-700 text-lg">{features[0].desc}</p>
          </div>
          
          {/* Center box (row 1) - positioned higher */}
          <div className="p-8 rounded-tl-[100px] rounded-br-[100px] shadow-xl bg-[#296166] text-white relative -top-4 sm:-top-20 min-h-[220px] flex flex-col justify-center">
            <h3 className="font-bold mb-4 text-[25px] ">{features[2].title}</h3>
            <p className="text-lg">{features[2].desc}</p>
          </div>
          
          <div className="p-8 rounded-tl-[100px] rounded-br-[100px] shadow-xl border-[4px] border-[#296166] relative -top-4 sm:-top-40 min-h-[220px] flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-[25px] text-[#296166]">{features[3].title}</h3>
            <p className="text-lg">{features[3].desc}</p>
          </div>
          
          {/* Row 2 */}
          <div className="p-8 rounded-tl-[100px] rounded-br-[100px] shadow-lg border-[4px] border-[#296166] min-h-[220px] flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-[25px] text-[#296166]">{features[1].title}</h3>
            <p className="text-gray-700 text-lg">{features[1].desc}</p>
          </div>
          
          {/* Center box (row 2) - positioned higher */}
          <div className="p-8 rounded-tl-[100px] rounded-br-[100px] shadow-xl border-[4px] border-[#296166]  relative -top-4 sm:-top-20 min-h-[220px] flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 text-[25px] text-[#296166]">{features[4].title}</h3>
            <p className="text-lg">{features[4].desc}</p>
          </div>
          
         <div className="p-8 rounded-tl-[100px] rounded-br-[100px] shadow-xl border-[4px] border-[#296166] relative -top-4 sm:-top-40 min-h-[220px] flex flex-col justify-center">
  <h3 className="font-bold text-xl mb-4 text-[25px] text-[#296166]">{features[5].title}</h3>
  <p className="text-lg">{features[5].desc}</p>
</div>
        </div>
      </div>
    </section>
  );
};

export default Cultural;