"use client";
import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <div className="overflow-hidden py-2 px-4 text-sm border-b border-black relative">
        <Marquee gradient={false} speed={50}>
          {[
            { name: "S&P", value: "-1.01%", color: "text-red-500" },
            { name: "Shanghai", value: "+0.87%", color: "text-yellow-400" },
            { name: "FTSE 100", value: "+0.13%", color: "text-yellow-400" },
            { name: "Brent Crude Oil", value: "-0.24%", color: "text-red-500" },
            { name: "AXD 100", value: "+0.13%", color: "text-yellow-400" },
            { name: "S&P", value: "-1.01%", color: "text-red-500" },
            { name: "Shanghai", value: "+0.87%", color: "text-yellow-400" },
            { name: "Brent Crude Oil", value: "-0.24%", color: "text-red-500" },
            { name: "AXD 100", value: "+0.13%", color: "text-yellow-400" },
            { name: "Brent Crude Oil", value: "-0.24%", color: "text-red-500" },
            { name: "AXD 100", value: "+0.13%", color: "text-yellow-400" },
          ].map((item, index) => (
            <div key={index} className="mx-4 flex items-center">
              <span className="mr-1">{item.name}</span>
              <span className={`px-2 py-1 border border-black rounded ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className=" bg-white border-b border-black">
        <div className="container">
      <div className="md:flex items-center justify-between max-w-[658px] ml-auto px-4 py-3">
        <h1 className="text-xl font-bold text-black">Hustlin' Hardos.</h1>
        <div className="flex items-center space-x-3">
 
            <Image src="/assets/images/svg/discord.svg" alt="discord" width={24} height={24}/>
            <Image src="/assets/images/svg/twitter.svg" alt="twitter" width={24} height={24} />
            <Image src="/assets/images/svg/instagram.svg" alt="instagram" width={24} height={24} />
            <Image src="/assets/images/svg/media.svg" alt="media" width={24} height={24} />
            <Image src="/assets/images/svg/last.svg" alt="twitter" width={24} height={24} />
          <button className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded border border-black hover:bg-yellow-500 transition-all">
            CONNECT WALLET
          </button>
        </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center space-x-6  border-b border-black bg-white">
        {["ABOUT US", "MINTING", "ROADMAP", "TEAM", "FAQS"].map((item, index) => (
          <Link key={index} href="#" className="px-4 py-2 border text-black border-black  transition-all">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
