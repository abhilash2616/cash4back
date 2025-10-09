"use client";
import { useEffect, useState } from "react";
import { IoTimerOutline } from "react-icons/io5";
import Deals from "./Deals";

const FlashDeal = () => {
  const [timeLeft, setTimeLeft] = useState(34 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="absolute top-0 left-0 w-full py-[44px] md:py-[48px] lg:py-12 h-full">
      <div className="flex items-center flex-col">
        <h2 className="uppercase text-white text-[33.63px] md:text-[40px] lg:text-[56px] font-black lg:font-extrabold leading-[33px] md:leading-[40px] md:mb-4 drop-shadow-[0_7.626px_16.524px_rgba(54,61,69,1)]">
          Flash Deal
        </h2>
        <div className="mb-2 md:mb-8 mt-2 !w-[180px] md:!w-[250px] m-auto bg-white px-3 py-2 md:flex rounded flex justify-center items-center gap-2">
          <IoTimerOutline className="text-xl md:text-2xl" />
          <p className="font-semibold text-black">
            Ends in {formatTime(timeLeft)}
          </p>
        </div>
        <div>
          <Deals />
        </div>

      </div>
    </div>
  );
};

export default FlashDeal;
