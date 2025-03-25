"use client";
import { useState, useRef, useEffect } from "react";
import { FAQS } from "@/utils/helper";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.maxHeight = openIndex === index ? `${content.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? 0 : index);
  };

  return (
    <div className="bg-white text-black border-b-2">
      <div className="container max-w-[1140px] mx-auto px-4">
      <h2 className="text-[80px] mb-6 border-b-2 w-full  py-[88px]">FAQs</h2>
   
      <div className="border-2 border-black divide-y">
        {FAQS.map((faq, index) => (
          <div key={index} className="md:pt-8 md:pb-[43px] md:pl-[30px] md:pr-11 p-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left md:text-2xl text-lg font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span className="text-base font-normal">{openIndex === index ? "-" : "+"}</span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              <p className="mt-4 text-black font-normal md:text-base text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}