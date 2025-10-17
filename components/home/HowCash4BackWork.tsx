"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const slidesData = [
  {
    id: 1,
    title: "Visit CashKaro app first",
    description: "before you shop online",
    image: "/assets/img/howwork/ck-order.png",
  },
  {
    id: 2,
    title: "Select the brand you want to shop on" ,
    description: "and you will be re-directed to their site/app",
    image: "/assets/img/howwork/select-brand.png",
  },
  {
    id: 3,
    title: "Shop & pay as usual on the site",
    description: "you are shopping normally, no difference",
    image: "/assets/img/howwork/shop-pay.png",
  },
  {
    id: 4,
    title: "Get Cashback on your order",
    description: "in your CashKaro account",
    image: "/assets/img/howwork/ck-order.png",
  },
  {
    id: 5,
    title: "Transfer your Cashback",
    description: "to your Bank, UPI or take as Amazon / Flipkart Gift Cards",
    image: "/assets/img/howwork/ck-upi.png",
  },
];

const HowCash4BackWork = () => {
  return (
    <div className="w-full py-8">
      <Splide
        options={{
          perPage: 4,
          gap: "1rem",
          padding: { left: "2rem", right: "1rem" },
          autoplay: false,
          interval: 5000,
          pauseOnHover: true,
          arrows: true,
          pagination: false,
          breakpoints: {
            1024: {
              perPage: 2,
              padding: { left: "1rem", right: "1rem" },
            },
            640: {
              perPage: 1,
              padding: { left: "0.5rem", right: "0.5rem" },
            },
          },
        }}
        aria-label="How Cash4Back Work"
      >
        {slidesData.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="w-full h-full flex flex-col justify-center items-center px-4 py-10 bg-[#fffbf8] rounded-[20px] border-2 border-[#ff6d1d]">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-[60%]">
                  <h2 className="text-[24px] font-bold capitalize leading-tight text-[#ff6d1d] mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-[16px] font-medium capitalize leading-tight text-[#2d3748]">
                    {slide.description}
                  </p>
                </div>
                <div className="w-[35%] flex justify-center items-center">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default HowCash4BackWork;
