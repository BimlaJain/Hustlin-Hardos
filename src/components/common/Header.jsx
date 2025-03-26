"use client";
import React, { useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { STOCK_TICKERS,SOCIAL_ICONS,NAV_LINKS } from "@/utils/helper";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <div className="overflow-hidden py-[14px] px-4 text-sm border-b border-black relative">
        <Marquee gradient={false} speed={50}>
          {STOCK_TICKERS.map((item, index) => (
            <div key={index} className="mr-[62px] flex items-center">
              <span className="font-normal mr-2 text-base ">{item.name} </span>
              <span className={`ml-1 px-1 py-[2px] border rounded-[5px] ${item.color}`}>{item.value}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="body-img border-b border-black">
        <div className="container mx-auto max-w-[1172px]">
          <div className="flex items-center justify-between max-w-[658px] ml-auto px-4 py-3">
            <Link href="#">  <h1 className="text-2xl font-normal text-black ff-moderno">Hustlin' Hardos</h1></Link>
          
            <div className="md:flex hidden items-center space-x-[18px]">
              {SOCIAL_ICONS.map((icon, index) => (
                <Link key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                  <Image className="cursor-pointer" src={icon.img} alt={icon.name} width={24} height={24} />
                </Link>
              ))}
              <button className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded border border-black hover:bg-white cursor-pointer transition-all">
                CONNECT WALLET
              </button>
            </div>
            <button className="md:hidden text-black text-2xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-black body-img">
        <div className="hidden md:flex justify-center">
          {NAV_LINKS.map((item, index) => (
            <Link key={index} href="#" className="px-6 py-2 border-x-1 text-black border-black transition-all">
              {item}
            </Link>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden body-img border-b border-black flex flex-col items-center py-4 space-y-2">
          {NAV_LINKS.map((item, index) => (
            <Link key={index} href="#" className="px-4 py-2 text-black border border-black w-3/4 text-center">
              {item}
            </Link>
          ))}
          <div className="flex space-x-3 mt-4">
            {SOCIAL_ICONS.map((icon, index) => (
              <Link key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                <Image className="cursor-pointer hover:shadow-lg" src={icon.img} alt={icon.name} width={24} height={24} />
              </Link>            ))}
          </div>
          <button className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded border border-black hover:bg-yellow-500 transition-all mt-4">
            CONNECT WALLET
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
