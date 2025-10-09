"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const slidesData = [
    {
        id: 1,
        title: "Divya Painuilly",
        description: "Whenever I shop for skincare or makeup on Nykaa, I use CashKaro. It’s an easy way to get some of my money back. Doesn’t make me feel guilty for splurging a little!",
        image: "/assets/img/Divya.jpg",
    },
    {
        id: 2,
        title: "Priya Saxena",
        description: "I shop on Amazon all the time, but ever since I started using CashKaro, I’ve been getting extra cashback on my orders. It’s like I get paid for buying what I already needed. Best decision ever!",
        image: "/assets/img/Priya.jpg",
    },
    {
        id: 3,
        title: "Rohit Talsania",
        description: "I was skeptical at first, but CashKaro actually gives cashback on Amazon orders. I’ve saved so much over the past few months just by clicking through the app!",
        image: "/assets/img/Rohit.jpg",
    },
    {
        id: 4,
        title: "Amit Dey",
        description: "Bought a laptop from Croma using CashKaro and got a solid cashback amount. Didn’t think it would actually work, but it did! Highly recommend for big purchases.",
        image: "/assets/img/Amit.jpg",
    },
    {
        id: 5,
        title: "Ankita Rajwanshi",
        description: "I love buying clothes from Myntra, and with CashKaro, I save even more. The cashback adds up fast, and I can use it for my next purchase. More shopping, less guilt!",
        image: "/assets/img/Ankita.jpg",
    },
];

const Superstars = () => {
    return (
        <div className="w-full py-8">
            <Splide
                options={{
                    perPage: 4,
                    gap: "1rem",
                    padding: { left: "6rem", right: "2rem" },
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
                aria-label="Superstars"
            >
                {slidesData.map((slide) => (
                    <SplideSlide key={slide.id}>
                        <div className="w-full h-full flex flex-col justify-center items-center px-4 py-4 bg-[#fff] rounded-[20px] border-1 border-[#c5c5c5]">
                            <div className="flex flex-col justify-between items-center">
                                <div className="w-full flex justify-center items-center mb-4">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        width={100}
                                        height={100}
                                        className="w-[100px] h-[100px] object-cover rounded-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-[14px] text-center font-medium capitalize text-[#2d3748] mb-4">
                                        {slide.description}
                                    </p>
                                    <h2 className="text-[15px] font-bold text-center capitalize leading-tight text-[#2d3748] mb-3">
                                        {slide.title}
                                    </h2>
                                </div>

                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default Superstars;
