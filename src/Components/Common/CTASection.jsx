import React from "react";

const CTASection = ({
  title,
  desc,
  buttonText,

  containerClass = "",
  contentClass = "",
  titleClass = "",
  descClass = "",
  buttonClass = "",
}) => {
  return (
    <section className={`w-full bg-[#2E6466] py-6 ${containerClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 ${contentClass}`}>

          {/* LEFT TEXT */}
          <div className="text-white text-center md:text-left">
            <h2 className={`text-[32px] font-semibold mb-1 ${titleClass}`}>
              {title}
            </h2>

            <p className={`text-[20px] text-[#E0F2F2] ${descClass}`}>
              {desc}
            </p>
          </div>

          {/* BUTTON */}
          <button
            className={`
              bg-white text-[#296166]
              px-3 py-1 md:px-6 md:py-3
              rounded-full
              font-semibold
              shadow-md
              text-[15px] md:text-[25px]
              transition
              whitespace-nowrap
              cursor-pointer
              ${buttonClass}
            `}
          >
            {buttonText}
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
