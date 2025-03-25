"use client";
import React from "react";
import Link from "next/link";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      {/* Stock Ticker Section */}
      <div className="flex overflow-x-auto whitespace-nowrap py-2 px-4 text-sm border-b border-gray-700">
        {[
          { name: "S&P", value: "-1.01%", color: "text-red-500" },
          { name: "Shanghai", value: "+0.87%", color: "text-yellow-400" },
          { name: "FTSE 100", value: "+0.13%", color: "text-yellow-400" },
          { name: "Brent Crude Oil", value: "-0.24%", color: "text-red-500" },
          { name: "AXD 100", value: "+0.13%", color: "text-yellow-400" },
        ].map((item, index) => (
          <div key={index} className="mx-2 flex items-center">
            <span className="mr-1">{item.name}</span>
            <span className={`px-2 py-1 border rounded ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Logo and Social Icons */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#f5f1e8] border-b">
        <h1 className="text-xl font-bold">Hustlin' Hardos.</h1>
        <div className="flex items-center space-x-3">
          <FaDiscord className="text-xl cursor-pointer" />
          <FaTwitter className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
          <BsMedium className="text-xl cursor-pointer" />
          <button className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded border border-black hover:bg-yellow-500 transition-all">
            CONNECT WALLET
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-center space-x-6 py-3 border-b border-gray-700">
        {['ABOUT US', 'MINTING', 'ROADMAP', 'TEAM', 'FAQS'].map((item, index) => (
          <Link key={index} href="#" className="px-4 py-2 border border-black hover:bg-gray-200 transition-all">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
