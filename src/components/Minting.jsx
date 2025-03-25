"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { COUNT_LIST } from "@/utils/helper";
const Minting = () => {
  const [count, setCount] = useState(100);
  const [timeLeft, setTimeLeft] = useState("40:15:12:10");
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        const parts = prev.split(":").map(Number);
        let [days, hours, minutes, seconds] = parts;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                clearInterval(countdown);
              }
            }
          }
        }
        return `${days}:${hours}:${minutes}:${seconds}`;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className=" bg-white border-y-2">
      <div className="container max-w-[1140px] mx-auto">
      <h1 className="text-[80px] font-normal py-22 px-4">Minting</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-black">
        <div className="pt-11 pb-[47px] pl-[25px] border-r border-black">
          <p className="text-base text-black font-normal leading-[150%] mb-[15px] lg:max-w-[438px]">
              Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3.
          </p>
            <div className="flex items-center  border border-black max-w-[238px] mb-[35px]">
            <button
                className=" px-6 text-4xl text-center"
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
              -
            </button>
            <span className="border-l border-r border-black text-center text-4xl px-6">{count}</span>
            <button
                className=" px-6 text-4xl text-center"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-yellow-400 px-[17px] py-[10px] text-black text-sm font-semibold border-2 border-black">MINT NOW</button>
          <div className="mt-9">
            <p className="text-green-600 font-semibold tet-lg">Time Left</p>
            <p className="text-red-600 text-4xl font-semibold leading-[100%]">{timeLeft}</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/assets/images/png/news-boy-image.png"
            alt="Minting Character"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>
      <div ref={ref} className="grid md:grid-cols-4 grid-cols-2 border-t border-black text-center py-4">
        {COUNT_LIST.map((item, index) => (
          <div key={index} className=" p-2">
            <p className="text-lg font-semibold">{item.label}</p>
            <h3 className="text-4xl font-bold">
              {inView ? <CountUp start={0} end={item.endValue} duration={3} /> : 0}
            </h3>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Minting;
