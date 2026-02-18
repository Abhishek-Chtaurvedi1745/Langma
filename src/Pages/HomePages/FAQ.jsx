import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is UX design?",
    answer:
      "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
  },
  {
    question: "What are the key principles of UX design?",
    answer:
      "The key principles include usability, accessibility, consistency, feedback, and user-centered design.",
  },
  {
    question: "What is the difference between UX and UI design?",
    answer:
      "UX design focuses on the overall experience of the user, while UI design focuses on the visual and interactive elements of a product.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-4 px-4">
      <h2 className="text-[40px] font-bold text-center mb-5 text-[#296166]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-[#F6F6F6] rounded-xl p-5 transition-all duration-300 ${
              openIndex === index ? "shadow-md" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-[#4D5756] font-semibold text-lg md:text-xl">
                {faq.question}
              </h3>

              <div
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 hover:bg-gray-200 transition"
              >
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-gray-800" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-800" />
                )}
              </div>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-base md:text-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
