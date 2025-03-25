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
    <div className="min-h-screen bg-white p-10">
      <div className="container max-w-[1140px] mx-auto">
      <h1 className="text-5xl font-bold mb-10">Minting</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-black">
        <div className="p-8 border-r border-black">
          <p className="text-lg text-gray-700 mb-6 lg:max-w-[438px]">
              Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <button
              className="border border-black px-4 py-2"
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
            >
              -
            </button>
            <span className="border border-black px-6 py-2">{count}</span>
            <button
              className="border border-black px-4 py-2"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-yellow-400 px-6 py-2 text-black font-bold border border-black">MINT NOW</button>
          <div className="mt-6">
            <p className="text-green-600 font-semibold">Time Left</p>
            <p className="text-red-600 text-2xl font-bold">{timeLeft}</p>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <Image
            src="/assets/images/png/news-boy-image.png"
            alt="Minting Character"
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </div>
      <div ref={ref} className="grid md:grid-cols-4 grid-cols-2 border-t border-black mt-4 text-center py-4">
        {COUNT_LIST.map((item, index) => (
          <div key={index} className="border-r last:border-r-0 border-black p-2">
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
