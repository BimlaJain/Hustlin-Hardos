"use client";
import { useState, useRef, useEffect } from "react";
import { FAQS } from "@/utils/helper";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.maxHeight = openIndex === index ? `${content.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8F6F2] text-black">
      <div className="container max-w-[1140px] mx-auto">
      <h2 className="text-[80px] mb-6 border-b-2 w-full py-[88px]">FAQs</h2>
   
      <div className="border-2 border-black divide-y">
        {FAQS.map((faq, index) => (
          <div key={index} className="p-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center"
            >
              {faq.question}
              <span className="text-base">{openIndex === index ? "-" : "+"}</span>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: "0px" }}
            >
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}