"use client";
import { useState, useRef, useEffect } from "react";
import { FAQS } from "@/utils/helper";
import CommonHeading from "./common/CommonHeading";
const Faq = () => {
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
        <div className=" text-black border-b-2">
            <div className="container max-w-[1170px] mx-auto px-4">
                <CommonHeading MyText="Faqs" />
            </div>
            <div className="border border-black w-full"></div>
            <div className="container max-w-[1170px] mx-auto px-4">
                <div className="border-x-2 border-black divide-y">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="md:pt-8 md:pb-[43px] md:pl-[30px] md:pr-11 p-3">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left md:text-2xl text-lg font-semibold flex justify-between items-center"
                            >
                                {faq.question}
                                <span className="text-2xl font-normal">{openIndex === index ? "-" : "+"}</span>
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                style={{ maxHeight: "0px" }}
                            >
                                <p className="md:mt-4 mt-2 text-black font-normal max-w-[992px] md:text-base text-sm">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Faq;